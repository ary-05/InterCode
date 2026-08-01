import {
  CallControls,
  CallingState,
  SpeakerLayout,
  useCallStateHooks,
} from "@stream-io/video-react-sdk";
import { Loader2Icon, MessageSquareIcon, UsersIcon, XIcon } from "lucide-react";
import { useMemo, useState } from "react";
import { useNavigate } from "react-router";
import { Channel, Chat, MessageInput, MessageList, Thread, Window } from "stream-chat-react";

import "@stream-io/video-react-sdk/dist/css/styles.css";
import "stream-chat-react/dist/css/v2/index.css";

function VideoCallUI({ chatClient, channel }) {
  const navigate = useNavigate();
  const { useCallCallingState, useParticipants } = useCallStateHooks();
  const callingState = useCallCallingState();
  const participants = useParticipants();
  const participantCount = useMemo(() => {
    const uniqueUserIds = new Set();

    for (const participant of participants) {
      const participantUserId = participant?.userId || participant?.user?.id;
      if (participantUserId) uniqueUserIds.add(participantUserId);
    }

    // Fallback to raw participant length if user ids are unavailable.
    return uniqueUserIds.size > 0 ? uniqueUserIds.size : participants.length;
  }, [participants]);
  const [isChatOpen, setIsChatOpen] = useState(false);

  if (callingState === CallingState.JOINING) {
    return (
      <div className="h-full flex items-center justify-center">
        <div className="text-center">
          <Loader2Icon className="w-12 h-12 mx-auto animate-spin text-[#6217d2] mb-4" />
          <p className="text-lg text-white font-nunito">Joining call...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full flex gap-3 relative str-video min-h-0">
      <div className="flex-1 flex flex-col gap-3 min-h-0 min-w-0">
        {/* Participants count badge and Chat Toggle */}
        <div className="flex items-center justify-between gap-2 bg-[#030023]/50 backdrop-blur-sm border border-[#6217d2]/30 p-3 rounded-xl shadow-xl shrink-0">
          <div className="flex items-center gap-2">
            <UsersIcon className="w-5 h-5 text-[#6217d2]" />
            <span className="font-semibold text-white font-nunito">
              {participantCount} {participantCount === 1 ? "participant" : "participants"}
            </span>
          </div>
          {chatClient && channel && (
            <button
              onClick={() => setIsChatOpen(!isChatOpen)}
              className={`px-4 py-2 rounded-lg font-nunito font-semibold flex items-center gap-2 transition-all duration-200 ${
                isChatOpen
                  ? "bg-[#6217d2] text-white hover:bg-[#7528e3]"
                  : "bg-[#090040] text-white/70 border border-[#6217d2]/30 hover:border-[#6217d2]/50"
              }`}
              title={isChatOpen ? "Hide chat" : "Show chat"}
            >
              <MessageSquareIcon className="size-4" />
              Chat
            </button>
          )}
        </div>

        <div className="flex-1 min-h-0 bg-[#090040]/50 backdrop-blur-sm border border-[#6217d2]/30 rounded-xl overflow-hidden relative shadow-xl">
          <SpeakerLayout />
        </div>

        <div className="bg-[#030023]/50 backdrop-blur-sm border border-[#6217d2]/30 p-3 rounded-xl shadow-xl flex justify-center shrink-0">
          <CallControls onLeave={() => navigate("/dashboard")} />
        </div>
      </div>

      {/* CHAT SECTION */}

      {chatClient && channel && (
        <div
          className={`flex flex-col min-h-0 rounded-xl shadow-xl overflow-hidden bg-[#030023]/50 backdrop-blur-sm border border-[#6217d2]/30 transition-all duration-300 ease-in-out ${
            isChatOpen ? "w-80 opacity-100" : "w-0 opacity-0"
          }`}
        >
          {isChatOpen && (
            <>
              <div className="bg-[#090040]/50 backdrop-blur-sm p-3 border-b border-[#6217d2]/30 flex items-center justify-between shrink-0">
                <h3 className="font-semibold text-white font-nunito">Session Chat</h3>
                <button
                  onClick={() => setIsChatOpen(false)}
                  className="text-white/70 hover:text-white transition-colors"
                  title="Close chat"
                >
                  <XIcon className="size-5" />
                </button>
              </div>
              <div className="flex-1 min-h-0 overflow-hidden stream-chat-dark">
                <Chat client={chatClient} theme="str-chat__theme-dark">
                  <Channel channel={channel}>
                    <Window>
                      <MessageList />
                      <MessageInput />
                    </Window>
                    <Thread />
                  </Channel>
                </Chat>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}
export default VideoCallUI;
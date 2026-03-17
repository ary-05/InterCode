import { useState, useEffect } from "react";
import { StreamChat } from "stream-chat";
import toast from "react-hot-toast";
import { initializeStreamClient, disconnectStreamClient } from "../lib/stream";
import { sessionApi } from "../api/sessions";

function useStreamClient(session, loadingSession, isHost, isParticipant) {
  const [streamClient, setStreamClient] = useState(null);
  const [call, setCall] = useState(null);
  const [chatClient, setChatClient] = useState(null);
  const [channel, setChannel] = useState(null);
  const [isInitializingCall, setIsInitializingCall] = useState(true);

  useEffect(() => {
    let isCancelled = false;
    let videoCall = null;
    let chatClientInstance = null;

    const initCall = async () => {
      if (!session?.callId) return;
      if (!isHost && !isParticipant) return;
      if (session.status === "completed") return;

      setIsInitializingCall(true);

      try {
        const { token, userId, userName, userImage } = await sessionApi.getStreamToken();

        if (isCancelled) return;

        const client = await initializeStreamClient(
          {
            id: userId,
            name: userName,
            image: userImage,
          },
          token
        );

        if (isCancelled) {
          await disconnectStreamClient();
          return;
        }

        setStreamClient(client);

        videoCall = client.call("default", session.callId);
        await videoCall.join({ create: true });

        if (isCancelled) {
          await videoCall.leave();
          await disconnectStreamClient();
          return;
        }

        setCall(videoCall);

        const apiKey = import.meta.env.VITE_STREAM_API_KEY;
        chatClientInstance = StreamChat.getInstance(apiKey);

        await chatClientInstance.connectUser(
          {
            id: userId,
            name: userName,
            image: userImage,
          },
          token
        );

        if (isCancelled) {
          await chatClientInstance.disconnectUser();
          await videoCall.leave();
          await disconnectStreamClient();
          return;
        }

        setChatClient(chatClientInstance);

        const chatChannel = chatClientInstance.channel("messaging", session.callId);
        await chatChannel.watch();

        if (isCancelled) {
          await chatClientInstance.disconnectUser();
          await videoCall.leave();
          await disconnectStreamClient();
          return;
        }

        setChannel(chatChannel);
      } catch (error) {
        if (!isCancelled) toast.error("Failed to join video call");
        console.error("Error init call", error);
      } finally {
        if (!isCancelled) setIsInitializingCall(false);
      }
    };

    if (session && !loadingSession) initCall();
    else setIsInitializingCall(false);

    // cleanup - performance reasons
    return () => {
      isCancelled = true;
      // iife
      (async () => {
        try {
          if (videoCall) await videoCall.leave();
          if (chatClientInstance) await chatClientInstance.disconnectUser();
          await disconnectStreamClient();
          setCall(null);
          setChatClient(null);
          setChannel(null);
          setStreamClient(null);
        } catch (error) {
          console.error("Cleanup error:", error);
        }
      })();
    };
  }, [session, loadingSession, isHost, isParticipant]);

  return {
    streamClient,
    call,
    chatClient,
    channel,
    isInitializingCall,
  };
}

export default useStreamClient;

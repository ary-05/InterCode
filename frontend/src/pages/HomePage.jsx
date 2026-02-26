import { Link } from 'react-router';
import { SignInButton } from "@clerk/clerk-react";
import {
    Headset,
    ArrowRightIcon,
    CheckIcon,
    Code2Icon,
    SparklesIcon,
    UsersIcon,
    VideoIcon,
    ZapIcon,
} from "lucide-react";

function HomePage() {
    return (
        <div className="min-h-screen bg-[#020018]">
            {/*NAVBAR*/}
            <nav className="bg-[#010029]/85 backdrop-blur-md border-b border-[#6217d2]/30 sticky top-0 z-50 shadow-lg">
                <div className="max-w-7xl mx-auto p-4 flex items-center justify-between">
                    {/*Logo*/}
                    <Link to={"/"} className="flex items-center gap-2 sm:gap-3 hover:scale-105 transition-transform duration-200">
                        <div className="size-8 sm:size-10 rounded-xl bg-gradient-to-br from-[#6217d2] via-[#31066e] to-[#FFCC00] flex items-center justify-center shadow-lg">
                            <Headset className="size-5 sm:size-6 text-white" />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-xl sm:text-2xl font-nunito font-bold tracking-wide bg-gradient-to-r from-[#6217d2] to-[#FFCC00] bg-clip-text text-transparent">
                                InterCode
                            </span>
                            <span className="text-xs text-white/60 font-medium font-nunito -mt-1">Let's Code</span>
                        </div>
                    </Link>
                    {/* AUTH BTN */}
                    <SignInButton mode="modal">
                        <button className="group px-4 sm:px-6 py-2 sm:py-3 bg-[#6217d2] rounded-xl text-white font-nunito font-bold text-xs sm:text-sm shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 flex items-center gap-2">
                            <span className="hidden sm:inline">Get Started</span>
                            <span className="sm:hidden">Start</span>
                            <ArrowRightIcon className="size-4 group-hover:translate-x-0.5 transition-transform" />
                        </button>
                    </SignInButton>
                </div>
            </nav>

            {/* HERO SECTION */}
            <div className="max-w-7xl mx-auto px-4 py-12 sm:py-16 lg:py-20">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    {/* LEFT CONTENT */}
                    <div className="space-y-6 sm:space-y-8">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#000000]/20 border border-[#6217d2] rounded-full font-nunito font-semibold text-[#FFCC00] text-sm sm:text-base">
                            <ZapIcon className="size-3 sm:size-4" />
                            Real-time Collaboration
                        </div>

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight">
                            <span className="bg-[#6217d2] bg-clip-text text-transparent font-nunito font-black">
                            Code Together,
                            </span>
                            <br />
                            <span className="text-white font-nunito font-black">Grow Together</span>
                        </h1>

                        <p className="text-base sm:text-xl text-white/70 leading-relaxed max-w-xl font-nunito font-semibold">
                            Built for collaborative coding interviews and pair programming.
                            Live collaboration, Real-time coding, Interview preparation.
                        </p>

                        {/* FEATURE PILLS */}
                        <div className="flex flex-wrap gap-2 sm:gap-3 font-nunito font-semibold" >
                            <div className="inline-flex items-center gap-1 px-3 py-1.5 border-2 border-[#6217d2] rounded-full text-white text-sm sm:text-base">
                                <CheckIcon className="size-3 sm:size-4 text-[#FFCC00]" />
                                Live Video Chat
                            </div>
                            <div className="inline-flex items-center gap-1 px-3 py-1.5 border-2 border-[#6217d2] rounded-full text-white text-sm sm:text-base">
                                <CheckIcon className="size-3 sm:size-4 text-[#FFCC00]" />
                                Code Editor
                            </div>
                            <div className="inline-flex items-center gap-1 px-3 py-1.5 border-2 border-[#6217d2] rounded-full text-white text-sm sm:text-base">
                                <CheckIcon className="size-3 sm:size-4 text-[#FFCC00]" />
                                Multi-Language
                            </div>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 ">
                            <SignInButton mode="modal">
                                <button className="px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-[#6217d2] to-[#31066e] hover:from-[#31066e] hover:to-[#6217d2] rounded-xl text-white font-nunito font-bold shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 flex items-center justify-center gap-2 w-full sm:w-auto">
                                    Start Practicing
                                    <ArrowRightIcon className="size-4 sm:size-5" />
                                </button>
                            </SignInButton>

                            <button onClick={() => window.open('https://drive.google.com/drive/folders/1nYBgf5eN-B-_xWEfmDDE-c7AyKHP_DsC?usp=sharing', '_blank')} className="px-6 py-3 sm:px-8 sm:py-4 bg-transparent border-2 border-[#FFCC00] hover:bg-[#000000]/10 rounded-xl text-[#FFCC00] font-nunito font-bold shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 flex items-center justify-center gap-2 w-full sm:w-auto">
                                <VideoIcon className="size-4 sm:size-5" />
                                Watch Demo
                            </button>
                        </div>

                        {/* STATS */}
                        <div className="space-y-2">
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-[#090040]/50 backdrop-blur-sm border border-[#6217d2]/30 rounded-2xl p-6 shadow-lg w-full">
                                <div className="text-center">
                                    <div className="text-3xl sm:text-4xl font-bold font-nunito text-[#6217d2]">1K+</div>
                                    <div className="text-xs sm:text-sm font-nunito text-white/60">Active Users</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl sm:text-4xl font-bold font-nunito text-[#FFCC00]">5K+</div>
                                    <div className="text-xs sm:text-sm font-nunito text-white/60">Sessions</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl sm:text-4xl font-bold font-nunito text-[#6217d2]">99%</div>
                                    <div className="text-xs sm:text-sm font-nunito text-white/60">Uptime</div>
                                </div>
                            </div>
                            <p className="text-xs text-white/40 text-center font-nunito font-bold">*Demo statistics for illustration purposes</p>
                        </div>
                    </div>

                    {/* RIGHT IMAGE */}
                    <div className="order-first lg:order-last flex justify-center">
                        <img 
                            src="/hero.png"
                            alt="InterCode Platform"
                            className="w-[100%] h-auto rounded-2xl sm:rounded-3xl shadow-2xl border-2 sm:border-3 border-[#6217d2] hover:scale-105 transition-transform duration-500"
                        />
                    </div>
                </div>
            </div>

            {/* FEATURES SECTION */}
            <div className="max-w-7xl mx-auto px-4 py-12 sm:py-16 lg:py-20 pb-16 sm:pb-20">
                <div className="text-center mb-12 sm:mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4 font-nunito text-white">
                        Everything You Need to <span className="text-[#FFCC00] font-nunito">Succeed</span>
                    </h2>
                    <p className="text-base sm:text-lg font-nunito text-white/70 max-w-2xl mx-auto px-4">
                        Powerful features designed to make your coding interviews seamless and productive.
                    </p>
                </div>

                {/* FEATURES GRID */}
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
                    {/* Feature 1 */}
                    <div className="bg-[#090040]/50 backdrop-blur-sm border border-[#6217d2]/30 rounded-2xl shadow-xl hover:shadow-2xl hover:border-[#6217d2] transition-all duration-200 hover:scale-105">
                        <div className="p-6 flex flex-col items-center text-center">
                            <div className="size-14 sm:size-16 bg-[#6217d2]/20 border border-[#6217d2] rounded-2xl flex items-center justify-center mb-4">
                                <VideoIcon className="size-7 sm:size-8 text-[#6217d2]" />
                            </div>
                            <h3 className="text-lg sm:text-xl font-bold mb-2 font-nunito text-white">HD Video Call</h3>
                            <p className="text-sm sm:text-base font-nunito text-white/70">
                                Crystal clear video and audio for seamless communication during interviews
                            </p>
                        </div>
                    </div>

                    {/* Feature 2 */}
                    <div className="bg-[#090040]/50 backdrop-blur-sm border border-[#6217d2]/30 rounded-2xl shadow-xl hover:shadow-2xl hover:border-[#FFCC00] transition-all duration-200 hover:scale-105">
                        <div className="p-6 flex flex-col items-center text-center">
                            <div className="size-14 sm:size-16 bg-[#FFCC00]/20 border border-[#FFCC00] rounded-2xl flex items-center justify-center mb-4">
                                <Code2Icon className="size-7 sm:size-8 text-[#FFCC00]" />
                            </div>
                            <h3 className="text-lg sm:text-xl font-bold mb-2 font-nunito text-white">Live Code Editor</h3>
                            <p className="text-sm sm:text-base font-nunito text-white/70">
                                Collaborate in real-time with syntax highlighting and multiple language support
                            </p>
                        </div>
                    </div>

                    {/* Feature 3 */}
                    <div className="bg-[#090040]/50 backdrop-blur-sm border border-[#6217d2]/30 rounded-2xl shadow-xl hover:shadow-2xl hover:border-[#6217d2] transition-all duration-200 hover:scale-105 sm:col-span-2 md:col-span-1">
                        <div className="p-6 flex flex-col items-center text-center">
                            <div className="size-14 sm:size-16 bg-[#6217d2]/20 border border-[#6217d2] rounded-2xl flex items-center justify-center mb-4">
                                <UsersIcon className="size-7 sm:size-8 text-[#6217d2]" />
                            </div>
                            <h3 className="text-lg sm:text-xl font-bold mb-2 font-nunito text-white">Easy Collaboration</h3>
                            <p className="text-sm sm:text-base font-nunito text-white/70">
                                Share your screen, discuss solutions, and learn from each other in real-time
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage

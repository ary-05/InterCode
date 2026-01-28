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
        <div className="min-h-screen bg-linear-to-br from-base-100 via-base-200 to-base-300">
            {/*NAVBAR*/}
            <nav className="bg-base-100/80 backdrop-blur-md border-b border-primary/20 sticky top-0 z-50 shadow-lg">
                <div className="max-w-7xl mx-auto p-4 flex items-center justify-between">
                    {/*Logo*/}
                    <Link to={"/"} className="flex items-center gap-2 sm:gap-3 hover:scale-105 transition-transform duration-200">
                        <div className="size-8 sm:size-10 rounded-xl bg-linear-to-br from-primary via-secondary to-accent flex items-center justify-center shadow-lg">
                            <Headset className="size-5 sm:size-6 text-white" />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-xl sm:text-2xl font-nunito font-bold tracking-wide bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
                                InterCode
                            </span>
                            <span className="text-xs text-base-content/60 font-medium -mt-1">Let's Code</span>
                        </div>
                    </Link>
                    {/* AUTH BTN */}
                    <SignInButton mode="modal">
                        <button className="group px-4 sm:px-6 py-2 sm:py-3 bg-linear-to-r from-primary to-secondary rounded-xl text-white font-nunito font-bold text-xs sm:text-sm shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 flex items-center gap-2">
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
                        <div className="badge badge-primary badge-md sm:badge-lg font-nunito font-semibold">
                            <ZapIcon className="size-3 sm:size-4" />
                            Real-time Collaboration
                        </div>

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight">
                            <span className="bg-linear-to-r from-primary via-secondary to-accent bg-clip-text text-transparent font-nunito font-black">
                            Code Together,
                            </span>
                            <br />
                            <span className="text-base-content font-nunito font-black">Grow Together</span>
                        </h1>

                        <p className="text-base sm:text-xl text-base-content/70 leading-relaxed max-w-xl font-nunito font-semibold">
                            Built for collaborative coding interviews and pair programming.
                            Live collaboration, Real-time coding, Interview preparation.
                        </p>

                        {/* FEATURE PILLS */}
                        <div className="flex flex-wrap gap-2 sm:gap-3 font-nunito font-semibold" >
                            <div className="badge badge-md sm:badge-lg badge-outline ">
                                <CheckIcon className="size-3 sm:size-4 text-success" />
                                Live Video Chat
                            </div>
                            <div className="badge badge-md sm:badge-lg badge-outline">
                                <CheckIcon className="size-3 sm:size-4 text-success" />
                                Code Editor
                            </div>
                            <div className="badge badge-md sm:badge-lg badge-outline">
                                <CheckIcon className="size-3 sm:size-4 text-success" />
                                Multi-Language
                            </div>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 ">
                            <SignInButton mode="modal">
                                <button className="btn btn-primary btn-md sm:btn-lg w-full sm:w-auto">
                                    Start Practicing
                                    <ArrowRightIcon className="size-4 sm:size-5" />
                                </button>
                            </SignInButton>

                            <button className="btn btn-outline btn-md sm:btn-lg w-full sm:w-auto">
                                <VideoIcon className="size-4 sm:size-5" />
                                Watch Demo
                            </button>
                        </div>

                        {/* STATS */}
                        <div className="space-y-2">
                            <div className="stats stats-vertical sm:stats-horizontal bg-base-100 shadow-lg w-full">
                                <div className="stat">
                                    <div className="stat-value text-primary text-3xl sm:text-4xl">1K+</div>
                                    <div className="stat-title text-xs sm:text-sm" >Active Users</div>
                                </div>
                                <div className="stat">
                                    <div className="stat-value text-secondary text-3xl sm:text-4xl">5K+</div>
                                    <div className="stat-title text-xs sm:text-sm">Sessions</div>
                                </div>
                                <div className="stat">
                                    <div className="stat-value text-accent text-3xl sm:text-4xl">99%</div>
                                    <div className="stat-title text-xs sm:text-sm">Uptime</div>
                                </div>
                            </div>
                            <p className="text-xs text-gray-500 text-center font-nunito font-bold">*Demo statistics for illustration purposes</p>
                        </div>
                    </div>

                    {/* RIGHT IMAGE */}
                    <div className="order-first lg:order-last">
                        <img
                            src="/hero.png"
                            alt="InterCode Platform"
                            className="w-full h-auto rounded-2xl sm:rounded-3xl shadow-2xl border-2 sm:border-4 border-base-100 hover:scale-105 transition-transform duration-500"
                        />
                    </div>
                </div>
            </div>

            {/* FEATURES SECTION */}
            <div className="max-w-7xl mx-auto px-4 py-12 sm:py-16 lg:py-20 pb-16 sm:pb-20">
                <div className="text-center mb-12 sm:mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                        Everything You Need to <span className="text-primary font-mono">Succeed</span>
                    </h2>
                    <p className="text-base sm:text-lg text-base-content/70 max-w-2xl mx-auto px-4">
                        Powerful features designed to make your coding interviews seamless and productive
                    </p>
                </div>

                {/* FEATURES GRID */}
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
                    {/* Feature 1 */}
                    <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow">
                        <div className="card-body items-center text-center">
                            <div className="size-14 sm:size-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                                <VideoIcon className="size-7 sm:size-8 text-primary" />
                            </div>
                            <h3 className="card-title text-lg sm:text-xl">HD Video Call</h3>
                            <p className="text-sm sm:text-base text-base-content/70">
                                Crystal clear video and audio for seamless communication during interviews
                            </p>
                        </div>
                    </div>

                    {/* Feature 2 */}
                    <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow">
                        <div className="card-body items-center text-center">
                            <div className="size-14 sm:size-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                                <Code2Icon className="size-7 sm:size-8 text-primary" />
                            </div>
                            <h3 className="card-title text-lg sm:text-xl">Live Code Editor</h3>
                            <p className="text-sm sm:text-base text-base-content/70">
                                Collaborate in real-time with syntax highlighting and multiple language support
                            </p>
                        </div>
                    </div>

                    {/* Feature 3 */}
                    <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow sm:col-span-2 md:col-span-1">
                        <div className="card-body items-center text-center">
                            <div className="size-14 sm:size-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                                <UsersIcon className="size-7 sm:size-8 text-primary" />
                            </div>
                            <h3 className="card-title text-lg sm:text-xl">Easy Collaboration</h3>
                            <p className="text-sm sm:text-base text-base-content/70">
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
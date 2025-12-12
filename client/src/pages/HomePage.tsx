import { useState } from "react"
import illustration from "@/assets/illustration.svg"
import FormComponent from "@/components/forms/FormComponent"
import Terminal from "@/components/terminal/Terminal"
// import Footer from "@/components/common/Footer";

function HomePage() {
    const [showTerminal, setShowTerminal] = useState(false)

    return (
        <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-gray-900 via-gray-800 to-blue-900 text-white">
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute -left-16 top-10 h-64 w-64 rounded-full bg-teal-500/20 blur-[130px]" />
                <div className="absolute bottom-0 right-[-80px] h-72 w-72 rounded-full bg-purple-600/20 blur-[150px]" />
            </div>
            <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col px-6 py-12 lg:px-10 lg:py-16">
                <header className="mb-12 text-center sm:text-left">
                    <p className="text-xs font-semibold uppercase tracking-[0.4em] text-teal-400/70">
                        Real-time collaboration
                    </p>
                    <h1 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl">
                        Welcome to Code-Coalition
                    </h1>
                    <p className="mx-auto mt-4 max-w-2xl text-base text-gray-300 sm:mx-0">
                        Pair program, brainstorm, and ship ideas faster with a distraction-free
                        workspace. Share a room ID, invite teammates on any device, and start
                        creating together in seconds.
                    </p>
                    <div className="mt-6 flex flex-wrap justify-center gap-4 sm:justify-start">
                        <button
                            className="rounded-full border border-teal-400/50 bg-teal-500/10 px-6 py-2 text-sm font-semibold text-white transition hover:bg-teal-500/20"
                            onClick={() => setShowTerminal(true)}
                        >
                            Open Real-time Terminal
                        </button>
                        <span className="text-xs uppercase tracking-[0.4em] text-white/40">
                            try your program live
                        </span>
                    </div>
                </header>

                <div className="flex flex-1 flex-col-reverse items-center gap-12 lg:flex-row lg:items-stretch">
                    <div className="flex w-full flex-1 flex-col justify-between rounded-3xl border border-gray-700 bg-gray-800/50 p-8 shadow-[0_40px_120px_-60px_rgba(0,0,0,0.9)] backdrop-blur">
                        <div className="space-y-6 text-center lg:text-left">
                            <div className="inline-flex items-center gap-2 rounded-full border border-teal-400/50 bg-teal-500/10 px-4 py-1 text-sm text-white/80">
                                <span className="h-2 w-2 rounded-full bg-teal-400" />
                                Sessions live now
                            </div>
                            <h2 className="text-3xl font-semibold leading-snug">
                                Code together without missing a beat.
                            </h2>
                            <p className="text-gray-300">
                                Syntax highlighting, shared terminals, inline chat, and AI pair-programming
                                are all built-in so you can focus on solving problems, not setting up tools.
                            </p>
                        </div>
                        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                            {[
                                "Join in seconds",
                                "Shareable rooms",
                                "Device-friendly",
                                "Live feedback",
                            ].map((item) => (
                                <div
                                    key={item}
                                    className="rounded-2xl border border-gray-700 bg-gray-800/50 p-4 text-center text-sm font-medium text-white/80 transition-transform hover:scale-105"
                                >
                                    {item}
                                </div>
                            ))}
                        </div>
                        <div className="mt-10 flex justify-center lg:justify-start">
                            <img
                                src={illustration}
                                alt="CodeAlong Illustration"
                                className="mx-auto max-h-72 w-full max-w-md animate-up-down drop-shadow-[0_30px_60px_rgba(13,148,136,0.25)]"
                            />
                        </div>
                    </div>
                    <div className="flex w-full flex-1 items-center lg:max-w-md">
                        <FormComponent />
                    </div>
                </div>
            </div>
            {showTerminal && (
                <Terminal onClose={() => setShowTerminal(false)} />
            )}
        </div>
    )
}

export default HomePage
import React, { useEffect, useRef, useState } from "react";
import axios from "axios";

type LookState = "idle" | "watch" | "away";

function Face({ look }: { look: LookState }) {
    const offsets = {
        idle: { x: 0, y: 0, rot: 0 },
        watch: { x: 6, y: 0, rot: 0 },
        away: { x: -6, y: -8, rot: -12 },
    }[look];

    return (
        <svg
            className={`face face--${look} rounded-full shadow-lg bg-gradient-to-br from-white via-blue-50 to-transparent`}
            width="90"
            height="90"
            viewBox="0 0 90 90"
            aria-hidden
        >
            <defs>
                <linearGradient id="g1" x1="0" x2="1">
                    <stop offset="0%" stopColor="#fff" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#f3f7ff" />
                </linearGradient>
                <filter id="s" x="-20%" y="-20%" width="140%" height="140%">
                    <feDropShadow dx="0" dy="6" stdDeviation="10" floodColor="#000" floodOpacity="0.08" />
                </filter>
            </defs>
            <g transform="translate(0,0)">
                <circle cx="45" cy="40" r="34" fill="url(#g1)" filter="url(#s)" />
                <path
                    d="M30 60c6 6 18 6 24 0"
                    stroke="#ff7b92"
                    strokeWidth="3"
                    strokeLinecap="round"
                    fill="none"
                    opacity={look === "away" ? 0.3 : 1}
                />
                <g transform="translate(24,34)">
                    <ellipse cx="0" cy="0" rx="8" ry="9" fill="#fff" />
                    <circle cx={offsets.x} cy={offsets.y} r="4.2" fill="#0b1223" transform={`rotate(${offsets.rot})`} />
                </g>
                <g transform="translate(66,34)">
                    <ellipse cx="0" cy="0" rx="8" ry="9" fill="#fff" />
                    <circle cx={offsets.x} cy={offsets.y} r="4.2" fill="#0b1223" transform={`rotate(${offsets.rot})`} />
                </g>
            </g>
        </svg>
    );
}

export default function JoinAsMember(): JSX.Element {
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [focusedField, setFocusedField] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const facesCount = 3;
    const lookState: LookState =
        showPassword ? "away" : focusedField === "username" || username.length > 0 ? "watch" : "idle";

    const formRef = useRef<HTMLFormElement | null>(null);

    useEffect(() => {
        const el = formRef.current;
        if (!el) return;
        el.animate([{ opacity: 0, transform: "translateY(8px)" }, { opacity: 1, transform: "translateY(0)" }], {
            duration: 420,
            easing: "cubic-bezier(.2,.9,.2,1)",
            fill: "forwards",
        });
    }, []);

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        setLoading(true);

        try {
            const response = await axios.post(
                "http://localhost:5000/api/member/signup",
                { name, username, email, password },
                { withCredentials: true }
            );

            if (response.status === 201 || response.status === 200) {
                alert(`Welcome ${name}! Your account has been created.`);
                window.location.href = "/joinasmember/signup"; 
            }
        } catch (err: any) {
            console.error(err);
            if (err.response?.data?.message) setError(err.response.data.message);
            else setError("Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center px-12 py-12 bg-gradient-to-b from-[#0f172a] to-[#071033]">
            <div className="w-full max-w-4xl rounded-2xl bg-white/5 shadow-2xl flex flex-col md:flex-row overflow-hidden">
                <div className="flex-1 p-8 flex flex-col gap-5 items-start justify-center min-h-[420px]">
                    <h1 className="text-2xl text-blue-100 font-semibold mb-1">Join the Club</h1>
                    <p className="text-blue-300 text-sm mb-2">Become a member of AntarikhyaJec</p>
                    <div className="flex gap-8 items-center justify-center py-6 w-full">
                        {Array.from({ length: facesCount }).map((_, i) => (
                            <div
                                key={i}
                                className="transition-transform duration-300"
                                style={{
                                    transform: `scale(${1 - i * 0.04}) rotate(${i === 1 ? -2 : i === 2 ? 2 : 0}deg)`,
                                }}
                            >
                                <Face look={lookState} />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="md:w-[420px] w-full bg-white/10 p-9 flex flex-col gap-5 justify-center">
                    <form ref={formRef} onSubmit={onSubmit} aria-label="Join Club form" className="flex flex-col gap-4">
                        {/* Full Name */}
                        <div className="relative flex flex-col gap-1">
                            <label htmlFor="name" className="text-blue-200 text-xs mb-1">
                                Full Name
                            </label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                onFocus={() => setFocusedField("name")}
                                onBlur={() => setFocusedField(null)}
                                placeholder="Enter your full name"
                                className="w-full px-3 py-3 rounded-lg bg-blue-950/60 border border-white/10 text-blue-100 outline-none transition-all text-sm focus:shadow-lg focus:-translate-y-0.5 focus:border-blue-300"
                            />
                        </div>

                        {/* Username */}
                        <div className="relative flex flex-col gap-1">
                            <label htmlFor="username" className="text-blue-200 text-xs mb-1">
                                Username
                            </label>
                            <input
                                id="username"
                                name="username"
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                onFocus={() => setFocusedField("username")}
                                onBlur={() => setFocusedField(null)}
                                placeholder="Create your username"
                                autoComplete="username"
                                className="w-full px-3 py-3 rounded-lg bg-blue-950/60 border border-white/10 text-blue-100 outline-none transition-all text-sm focus:shadow-lg focus:-translate-y-0.5 focus:border-blue-300"
                            />
                        </div>

                        {/* Email */}
                        <div className="relative flex flex-col gap-1">
                            <label htmlFor="email" className="text-blue-200 text-xs mb-1">
                                Email
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                onFocus={() => setFocusedField("email")}
                                onBlur={() => setFocusedField(null)}
                                placeholder="Enter your email"
                                autoComplete="email"
                                className="w-full px-3 py-3 rounded-lg bg-blue-950/60 border border-white/10 text-blue-100 outline-none transition-all text-sm focus:shadow-lg focus:-translate-y-0.5 focus:border-blue-300"
                            />
                        </div>

                        {/* Password */}
                        <div className="relative flex flex-col gap-1">
                            <label htmlFor="password" className="text-blue-200 text-xs mb-1">
                                Password
                            </label>
                            <input
                                id="password"
                                name="password"
                                type={showPassword ? "text" : "password"}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                onFocus={() => setFocusedField("password")}
                                onBlur={() => setFocusedField(null)}
                                placeholder="Create a strong password"
                                autoComplete="new-password"
                                className="w-full px-3 py-3 rounded-lg bg-blue-950/60 border border-white/10 text-blue-100 outline-none transition-all text-sm focus:shadow-lg focus:-translate-y-0.5 focus:border-blue-300"
                            />
                            <button
                                type="button"
                                aria-label={showPassword ? "Hide password" : "Show password"}
                                className="absolute right-2 top-8 rounded-md bg-transparent text-blue-300 p-1 cursor-pointer flex items-center justify-center"
                                onClick={() => setShowPassword((s) => !s)}
                                title={showPassword ? "Hide password" : "Show password"}
                            >
                                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
                                    {showPassword ? (
                                        <path d="M3 3l18 18M9.5 9.5a3.5 3.5 0 0 0 4.9 4.9" strokeLinecap="round" strokeLinejoin="round" />
                                    ) : (
                                        <path
                                            d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12zM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    )}
                                </svg>
                            </button>
                        </div>

                        {/* Error */}
                        {error && <p className="text-red-400 text-sm text-center">{error}</p>}

                        {/* Submit */}
                        <button
                            className="mt-2 py-3 px-4 rounded-xl font-semibold bg-gradient-to-r from-teal-300 to-blue-200 text-blue-900 shadow hover:scale-105 transition disabled:opacity-70"
                            type="submit"
                            disabled={loading}
                        >
                            {loading ? "Joining..." : "Join Now"}
                        </button>

                        {/* Back */}
                        <div className="flex justify-center mt-4">
                            <button
                                type="button"
                                className="bg-transparent border-none text-blue-300 text-sm cursor-pointer"
                                onClick={() => (window.location.href = "/")}
                            >
                                Back to Home
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

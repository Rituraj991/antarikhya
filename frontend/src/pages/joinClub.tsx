import React from "react";

const JoinClub: React.FC = () => (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#0f172a] to-[#071033] p-6">
        <div className="relative w-full max-w-md bg-white/10 backdrop-blur-xl rounded-2xl shadow-2xl p-8 border border-white/10">
            <h2 className="text-center text-2xl font-semibold text-blue-100 mb-6">
                Who are you?
            </h2>

            <div className="space-y-5">
                
                <button
                    onClick={() => (window.location.href = "/joinasmember/signup")}
                    className="w-full py-4 rounded-lg text-lg font-semibold text-blue-950 bg-gradient-to-r from-teal-300 to-blue-200 shadow-lg hover:scale-[1.03] transition-transform duration-200"
                >
                    Join as Member →
                </button>

                <button
                    onClick={() => (window.location.href = "/login")}
                    className="w-full py-4 rounded-lg text-lg font-medium text-blue-100 border border-blue-300/30 hover:bg-white/10 hover:border-blue-200 transition duration-200"
                >
                    Login as Admin/Member →
                </button>
            </div>
        </div>
    </div>
);

export default JoinClub;

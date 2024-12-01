"use client";

import { useState, useEffect } from "react";

export default function Interactive() {
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
    const [savedData, setSavedData] = useState({ name: "", message: "" });

    useEffect(() => {
        const storedName = localStorage.getItem("name");
        const storedMessage = localStorage.getItem("message");
        if (storedName || storedMessage) {
            setSavedData({
                name: storedName || "",
                message: storedMessage || "",
            });
        }
    }, []);

    const handleSave = () => {
        localStorage.setItem("name", name);
        localStorage.setItem("message", message);
        setSavedData({ name, message });
        setName("");
        setMessage("");
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-teal-800 to-green-900 text-white p-8 flex flex-col items-center">
            <h1 className="text-3xl font-bold mb-6">Review Page</h1>
            <div className="w-full max-w-md p-6 bg-gray-700 rounded-lg shadow-lg">
                <label className="block mb-2 font-medium">Enter your name:</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full p-2 mb-4 rounded-lg bg-gray-800 text-white"
                    placeholder="Type your name"
                />

                <label className="block mb-2 font-medium">Write a message:</label>
                <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full p-2 mb-4 rounded-lg bg-gray-800 text-white resize-none"
                    rows={4}
                    placeholder="Type your message"
                />

                <button
                    onClick={handleSave}
                    className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition"
                >
                    Save Review
                </button>

                {savedData.name || savedData.message ? (
                    <div className="mt-6 p-4 bg-gray-800 rounded-lg">
                        <h2 className="text-2xl font-semibold">Review box for the next visitor to see and Edit!:</h2>
                        {savedData.name && (
                            <p className="mt-2">
                                <strong>Name:</strong> {savedData.name}
                            </p>
                        )}
                        {savedData.message && (
                            <p className="mt-2">
                                <strong>Review:</strong> {savedData.message}
                            </p>
                        )}
                    </div>
                ) : null}
            </div>
        </div>
    );
}

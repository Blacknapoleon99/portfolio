"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
    const [stars, setStars] = useState([]);

    useEffect(() => {
        // Generate stars on client side
        const generatedStars = Array.from({ length: 100 }).map(() => ({
            id: Math.random(),
            top: `${Math.random() * 100}vh`,
            left: `${Math.random() * 100}vw`,
            scale: Math.random() * 0.8 + 0.3,
            opacity: Math.random() * 0.5 + 0.5,
        }));
        setStars(generatedStars);
    }, []);

    return (
        <div className="relative min-h-screen bg-gradient-to-br from-black via-black to-purple-900 flex flex-col items-center justify-between text-white overflow-hidden">
            {/* Overlay for Extra Darkness */}
            <div className="absolute inset-0 bg-black opacity-20 pointer-events-none"></div>

            {/* Starry Background */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                {stars.map((star) => (
                    <motion.span
                        key={star.id}
                        className="absolute w-1 h-1 bg-white rounded-full opacity-50"
                        style={{
                            top: star.top,
                            left: star.left,
                            scale: star.scale,
                            opacity: star.opacity,
                        }}
                        animate={{
                            opacity: [0.3, 0.6, 0.9, 0.6, 0.3],
                        }}
                        transition={{
                            duration: 10 + Math.random() * 10,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />
                ))}
            </div>

            {/* GIF at Top Left */}
            <div className="absolute top-0 left-0 w-20 h-20 pointer-events-none">
                <img
                    src="/Red Hole.gif"
                    alt="Glowing Red Hole"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Earth GIF at Bottom Right */}
            <motion.div
                className="absolute bottom-4 right-4 w-60 h-60 pointer-events-none"
                animate={{ rotate: 360 }}
                transition={{
                    repeat: Infinity,
                    duration: 20,
                    ease: "linear",
                }}
            >
                <img
                    src="/Earth.gif"
                    alt="Rotating Earth"
                    className="w-full h-full object-cover rounded-full"
                />
            </motion.div>

            {/* Meteor with Fire */}
            <motion.div
                className="absolute w-6 h-6 bg-gradient-to-br from-gray-400 to-gray-800 rounded-full shadow-lg"
                initial={{ top: "-10%", left: "110%", opacity: 0 }}
                animate={{ top: "80%", left: "-10%", opacity: 1 }}
                transition={{
                    duration: 5,
                    delay: 30,
                    repeat: Infinity,
                    repeatDelay: 30,
                    ease: "easeIn",
                }}
            >
                {/* Fire Effect */}
                <motion.div
                    className="absolute w-12 h-12 bg-gradient-to-br from-yellow-400 to-red-600 opacity-70 rounded-full blur-lg"
                    style={{
                        top: "50%", // Keep it relative to the meteor
                        left: "50%",
                        transform: "translate(-50%, -60%)", // Adjust Y-axis to move it upwards
                    }}
                    animate={{
                        opacity: [0.8, 0.5, 0.8],
                        scale: [1, 1.5, 1],
                    }}
                    transition={{
                        duration: 0.2,
                        repeat: Infinity,
                    }}
                />
            </motion.div>



            {/* Black Hole Section */}
            <motion.div
                className="relative w-80 h-80 flex items-center justify-center mt-12"
                animate={{ rotate: 360 }}
                transition={{
                    repeat: Infinity,
                    duration: 10,
                    ease: "linear",
                }}
            >
                <motion.img
                    src="/Black-Hole1.png"
                    alt="Black Hole"
                    className="rounded-full"
                    style={{
                        position: "absolute",
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        zIndex: 1,
                    }}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                />

                <Link href="/mysteryx">
                    <motion.div
                        className="absolute w-6 h-6 bg-black rounded-full hover:bg-gray-700 cursor-pointer"
                        style={{
                            zIndex: 2,
                            transform: "translate(-50%, -50%)",
                            top: "50%",
                            left: "50%",
                        }}
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                    ></motion.div>
                </Link>
            </motion.div>

            {/* Welcome Section */}
            <div className="mt-8 text-center">
                <h1 className="text-4xl font-bold">Welcome to My Portfolio</h1>
                <p className="text-lg mt-4 max-w-lg text-center">
                    Explore my projects, learn more about me, and discover the mysteries of the universe!
                </p>
            </div>

            {/* Cosmos-Themed Rectangles */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-12 px-8">
                {/* Private Projects */}
                <motion.div
                    className="p-6 bg-gradient-to-br from-purple-800 to-indigo-900 rounded-lg shadow-lg cursor-pointer hover:scale-105 transition-transform private-projects"
                    whileTap={{ scale: 0.95 }}
                >
                    <h2 className="text-xl font-semibold text-center">Private Projects</h2>
                </motion.div>

                {/* Academic Projects */}
                <motion.div
                    className="p-6 bg-gradient-to-br from-teal-800 to-green-700 rounded-lg shadow-lg cursor-pointer hover:scale-105 transition-transform"
                    whileTap={{ scale: 0.95 }}
                >
                    <h2 className="text-xl font-semibold text-center">Academic Projects</h2>
                </motion.div>

                {/* Collaborations */}
                <motion.div
                    className="p-6 bg-gradient-to-br from-pink-700 to-red-800 rounded-lg shadow-lg cursor-pointer hover:scale-105 transition-transform"
                    whileTap={{ scale: 0.95 }}
                >
                    <h2 className="text-xl font-semibold text-center">Collaborations</h2>
                </motion.div>

                {/* Connect */}
                <motion.div
                    className="col-span-2 md:col-span-1 p-6 bg-gradient-to-br from-blue-900 to-purple-900 rounded-lg shadow-lg cursor-pointer hover:scale-105 transition-transform connect-button"
                    whileTap={{ scale: 0.95 }}
                >
                    <h2 className="text-xl font-semibold text-center mb-4">Connect</h2>
                    <form className="space-y-4">
                        <input
                            type="text"
                            placeholder="Name"
                            className="w-full p-2 rounded-md bg-gray-800 text-white"
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full p-2 rounded-md bg-gray-800 text-white"
                        />
                        <textarea
                            placeholder="Your Message"
                            className="w-full p-2 rounded-md bg-gray-800 text-white"
                            rows={3}
                        ></textarea>
                        <button
                            type="submit"
                            className="w-full py-2 bg-purple-700 hover:bg-purple-600 rounded-md text-white font-semibold"
                        >
                            Send
                        </button>
                    </form>
                </motion.div>
            </div>
        </div>
    );
}


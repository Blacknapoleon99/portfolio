"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import Link from "next/link";

// Define props (AnimatedNumbers)
interface AnimatedNumbersProps {
    animateToNumber: number;
    fontStyle?: React.CSSProperties;
    configs?: Array<{ mass: number; tension: number; friction: number }>;
}

const AnimatedNumbers = dynamic(() =>
        import("react-animated-numbers").then((mod) => mod.default as React.FC<AnimatedNumbersProps>),
    { ssr: false }
);


export default function Home() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-black to-purple-900 flex flex-col items-center justify-center text-white">
            {/* Animated Hole */}
            <motion.div
                className="relative w-80 h-80 flex items-center justify-center"
                animate={{ rotate: 360 }} // Rotate black hole
                transition={{
                    repeat: Infinity,
                    duration: 10,
                    ease: "linear",
                }}
            >
                {/* Black Hole Image */}
                <motion.img
                    src="/Black-Hole1.png"
                    alt="Black Hole"
                    className="rounded-full"
                    style={{
                        position: "absolute", // Ensurewithin the parent container
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        zIndex: 1, // Place below the singu point
                    }}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                />

                {/* Singularity Point */}
                <Link href="/mysteryx">
                    <motion.div
                        className="absolute w-6 h-6 bg-black rounded-full hover:bg-gray-700 cursor-pointer"
                        style={{
                            zIndex: 2, // Place it above the black hole
                            transform: "translate(-50%, -50%)", // Center it perfectly
                            top: "50%",
                            left: "50%",
                        }}
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                    ></motion.div>
                </Link>
            </motion.div>







            {/* Animated Numbersfor Black Hole */}
            <div className="mt-8">
                <h1 className="text-4xl font-bold">Welcome to My Portfolio</h1>
                <AnimatedNumbers
                    animateToNumber={42}
                    fontStyle={{ fontSize: 48, color: "#fff" }}
                    configs={[
                        { mass: 1, tension: 220, friction: 100 },
                        { mass: 2, tension: 180, friction: 90 },
                        { mass: 3, tension: 260, friction: 140 },
                    ]}
                />
                <p className="text-lg mt-4 max-w-lg text-center">
                    Explore my projects, learn more about me, and discover the mysteries of the universe!
                </p>
            </div>
        </div>
    );
}

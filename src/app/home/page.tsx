"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";



export default function Home() {
    const [stars, setStars] = useState([]); // Array star elements
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    }); // Form state for Connect Section

    const [dropdown, setDropdown] = useState({
        privateProjects: false,
        academicProjects: false,
        collaborations: false,
    }); // State for dropdown menus

    useEffect(() => {
        // Generate stars dynamically only client sided
        const generatedStars = Array.from({ length: 100 }).map(() => ({
            id: Math.random(),
            top: `${Math.random() * 100}vh`,
            left: `${Math.random() * 100}vw`,
            scale: Math.random() * 0.8 + 0.3,
            opacity: Math.random() * 0.5 + 0.5,
        }));
        setStars(generatedStars);
    }, []);

    // Handle data changes
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // Save form data to localStorage
        localStorage.setItem("contactData", JSON.stringify(formData));

        // Send email using EmailJS
        emailjs
            .send(
                "service_93pycsq",
                "template_9tnkj6d",
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    message: formData.message,
                    reply_to: formData.email,
                },
                "1VzT7uotnOs2QEPIZ"
            )
            .then(
                (response) => {
                    console.log("Email sent successfully!", response.status, response.text);
                    alert("Your message has been sent!");
                },
                (error) => {
                    console.error("Failed to send email:", error);
                    alert("Failed to send your message. Please try again.");
                }
            );

        // Clear fields after submission
        setFormData({
            name: "",
            email: "",
            message: "",
        });
    };

    const toggleDropdown = (menu) => {
        setDropdown((prev) => ({
            ...prev,
            [menu]: !prev[menu],
        }));
    };

    return (
        <div className="relative min-h-screen bg-gradient-to-br from-black via-black to-purple-900 flex flex-col items-center justify-between text-white overflow-hidden">
            {/* Background Overlay extra dark */}
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

            <div className="absolute bottom-4 right-4 w-60 h-60 pointer-events-none earth-container burnable">
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                        repeat: Infinity,
                        duration: 40,
                        ease: "linear",
                    }}
                >
                    <img
                        src="/Earth.gif"
                        alt="Rotating Earth"
                        className="w-full h-full object-cover rounded-full"
                    />
                </motion.div>
            </div>




            {/* Black Hole with Singularity Point */}
            <motion.div
                className="relative w-80 h-80 flex items-center justify-center mt-12"
                animate={{ rotate: 360 }}
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

                {/* Singularity Point */}
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
                    onClick={() => (window.location.href = "/mysteryx")}
                ></motion.div>
            </motion.div>

            {/* Meteor Effect with Burn */}
            <motion.div
                className="absolute w-6 h-6 bg-gradient-to-br from-gray-400 to-gray-800 rounded-full shadow-lg meteor"
                initial={{ top: "-10%", left: "110%", opacity: 0 }}
                animate={{ top: "80%", left: "-10%", opacity: 1 }}
                transition={{
                    duration: 5,
                    delay: 30,
                    repeat: Infinity,
                    repeatDelay: 30,
                    ease: "easeIn",
                }}
                style={{
                    transform: "translate(-50%, -50%)",
                }}
                onUpdate={() => {
                    const meteor = document.querySelector(".meteor");
                    const burnables = document.querySelectorAll(".burnable");

                    if (meteor && burnables) {
                        const meteorRect = meteor.getBoundingClientRect();
                        burnables.forEach((burnable) => {
                            const burnableRect = burnable.getBoundingClientRect();
                            if (
                                meteorRect.left < burnableRect.right &&
                                meteorRect.right > burnableRect.left &&
                                meteorRect.top < burnableRect.bottom &&
                                meteorRect.bottom > burnableRect.top
                            ) {
                                // Add burn
                                burnable.classList.add("burning");

                                // Remove the burn effect after 4 seconds
                                setTimeout(() => {
                                    burnable.classList.remove("burning");
                                }, 4000);
                            }
                        });
                    }
                }}
            >
                {/* Fire Effect for Meteor */}
                <motion.div
                    className="absolute w-12 h-12 bg-gradient-to-br from-yellow-400 to-red-600 opacity-70 rounded-full blur-lg fire-effect"
                    style={{
                        top: "48%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                    }}
                    animate={{
                        opacity: [0.8, 0.5, 0.8],
                        scale: [1, 1.5, 1],
                        x: [0, 5, -5, 0], // realistic effect
                        y: [0, 5, -5, 0],
                    }}
                    transition={{
                        duration: 0.2,
                        repeat: Infinity,
                    }}
                />
            </motion.div>

            {/* Glacial Comet Effect */}
            <motion.div
                className="absolute w-6 h-6 bg-gradient-to-br from-blue-300 to-blue-700 rounded-full shadow-lg glacial-comet"
                initial={{ top: "-10%", left: "-10%", opacity: 0 }}
                animate={{ top: "90%", left: "95%", opacity: 1 }} // Adjusted target to hit
                transition={{
                    duration: 6,
                    delay: 10,
                    repeat: Infinity,
                    repeatDelay: 30,
                    ease: "easeIn",
                }}
                style={{
                    transform: "translate(-50%, -50%)",
                }}
                onUpdate={() => {
                    const comet = document.querySelector(".glacial-comet");
                    const burnables = document.querySelectorAll(".burnable");

                    if (comet && burnables) {
                        const cometRect = comet.getBoundingClientRect();

                        burnables.forEach((burnable) => {
                            const burnableRect = burnable.getBoundingClientRect();

                            if (
                                cometRect.left < burnableRect.right &&
                                cometRect.right > burnableRect.left &&
                                cometRect.top < burnableRect.bottom &&
                                cometRect.bottom > burnableRect.top
                            ) {
                                // Add burning or freezing effect
                                burnable.classList.add("burning", "freezing");

                                // Remove the effect after 4 seconds
                                setTimeout(() => {
                                    burnable.classList.remove("burning", "freezing");
                                }, 4000);
                            }
                        });
                    }
                }}
            >
                {/* Ice Aura Effect for Comet */}
                <motion.div
                    className="absolute w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-800 opacity-70 rounded-full blur-lg ice-effect"
                    style={{
                        top: "48%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                    }}
                    animate={{
                        opacity: [0.8, 0.5, 0.8],
                        scale: [1, 1.5, 1],
                        x: [0, 5, -5, 0], // realistic effect
                        y: [0, 5, -5, 0],
                    }}
                    transition={{
                        duration: 0.2,
                        repeat: Infinity,
                    }}
                />
            </motion.div>






            {/* Grid Items with Dropdown and Burnable Class */}
            <div className="grid grid-cols-3 gap-6">
                {/* Private Projects */}
                <div
                    className="relative burnable p-6 bg-purple-700 rounded-lg shadow-lg cursor-pointer hover:scale-105 transition-transform"
                    onMouseEnter={() => toggleDropdown("privateProjects")}
                    onMouseLeave={() => toggleDropdown("privateProjects")}
                >
                    Private Projects
                    {dropdown.privateProjects && (
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="absolute top-full left-0 bg-gray-800 p-4 rounded-md shadow-lg space-y-2"
                        >
                            <a
                                href="#"
                                className="block hover:text-gray-300 hover:shadow-[0_0_10px_2px_rgba(128,0,128,0.5)]"
                            >
                                World of Warcraft Private Server, Coming Soon!
                            </a>
                            <a
                                href="https://github.com/Blacknapoleon99/mOVINGGAME"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block hover:text-gray-300 hover:shadow-[0_0_10px_2px_rgba(128,0,128,0.5)]"
                            >
                                Pure Java 2D Demo Game, Live Now!
                            </a>
                            <a
                                href="#"
                                className="block hover:text-gray-300 hover:shadow-[0_0_10px_2px_rgba(128,0,128,0.5)]"
                            >
                                Medieval Arena Combat Game
                                Coming Soon!
                            </a>
                        </motion.div>
                    )}
                </div>

                {/* Academic Projects */}
                <div
                    className="relative burnable p-6 bg-green-700 rounded-lg shadow-lg cursor-pointer hover:scale-105 transition-transform"
                    onMouseEnter={() => toggleDropdown("academicProjects")}
                    onMouseLeave={() => toggleDropdown("academicProjects")}
                >
                    Academic Projects
                    {dropdown.academicProjects && (
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="absolute top-full left-0 bg-gray-800 p-4 rounded-md shadow-lg space-y-2"
                        >
                            <a
                                href="#"
                                className="block hover:text-gray-300 hover:shadow-[0_0_10px_2px_rgba(128,0,128,0.5)]"
                            >
                                Academic Project 1
                            </a>
                            <a
                                href="#"
                                className="block hover:text-gray-300 hover:shadow-[0_0_10px_2px_rgba(128,0,128,0.5)]"
                            >
                                Academic Project 2
                            </a>
                            <a
                                href="#"
                                className="block hover:text-gray-300 hover:shadow-[0_0_10px_2px_rgba(128,0,128,0.5)]"
                            >
                                Academic Project 3
                            </a>
                        </motion.div>
                    )}
                </div>

                {/* Collaborations */}
                <div
                    className="relative burnable p-6 bg-red-700 rounded-lg shadow-lg cursor-pointer hover:scale-105 transition-transform"
                    onMouseEnter={() => toggleDropdown("collaborations")}
                    onMouseLeave={() => toggleDropdown("collaborations")}
                >
                    Collaborations
                    {dropdown.collaborations && (
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="absolute top-full left-0 bg-gray-800 p-4 rounded-md shadow-lg space-y-2"
                        >
                            <a
                                href="https://github.com/supergta"
                                target="_blank"
                                className="block hover:text-gray-300 hover:shadow-[0_0_10px_2px_rgba(128,0,128,0.5)]"
                            >
                                Andreas Rydberg
                            </a>
                            <a
                                href="/mysteryx"
                                className="block hover:text-gray-300 hover:shadow-[0_0_10px_2px_rgba(128,0,128,0.5)]"
                            >
                                Unknown User 1
                            </a>
                            <a
                                href="/mysteryx"
                                className="block hover:text-gray-300 hover:shadow-[0_0_10px_2px_rgba(128,0,128,0.5)]"
                            >
                                Unknown User 2
                            </a>
                        </motion.div>
                    )}
                </div>
            </div>

            {/* Welcome Section */}
            <div className="text-center max-w-3xl mx-auto mt-8 space-y-6">
                <h1 className="text-5xl font-bold mb-4 text-glow burnable">
                    Welcome to My Portfolio
                </h1>
                <p className="text-lg leading-relaxed burnable">
                    Hello, and welcome! My name is Kevin Lübeck, and I’m thrilled to share my journey and work with you. I’ve always believed that technology is not just a tool
                    but a bridge to the future, connecting people, solving challenges, and sparking innovation. This portfolio is a reflection of my passion for building creative,
                    efficient, and meaningful solutions.
                </p>
                <p className="text-lg leading-relaxed burnable">
                    My fascination with problem-solving and design stems from a love for creating and experimenting. I take pride in pushing the boundaries of what´s possible, whether
                    it´s crafting dynamic interfaces, optimizing cloud systems, or exploring new avenues in game mechanics. Each project I take on is an opportunity to learn, grow, and
                    contribute something unique.
                </p>
                <p className="text-lg leading-relaxed burnable">
                    While technology drives my professional goals, my personal interests play a huge role in shaping my perspective. I´m inspired by the mysteries of the cosmos and the
                    infinite possibilities of what lies beyond. This curiosity influences my work, as I aim to create applications that feel just as limitless and full of potential.
                </p>
                <p className="text-lg leading-relaxed burnable">
                    Whether you’re here to explore my projects, learn about my journey, or collaborate on exciting ideas, I’m delighted you’ve stopped by. Dive deeper
                    into the projects I’ve brought to life, or visit the interactive section to explore something fun and unexpected. Together, let’s turn ideas into reality!
                </p>
            </div>



            {/* Connect Section */}
            <motion.div
                className="col-span-2 md:col-span-1 p-6 bg-gradient-to-br from-blue-900 to-purple-900 rounded-lg shadow-lg cursor-pointer hover:scale-105 transition-transform mt-12"
                whileTap={{ scale: 0.95 }}
            >
                <h2 className="text-xl font-semibold text-center mb-4">Connect</h2>
                <form className="space-y-4" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full p-2 rounded-md bg-gray-800 text-white"
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full p-2 rounded-md bg-gray-800 text-white"
                        required
                    />
                    <textarea
                        name="message"
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full p-2 rounded-md bg-gray-800 text-white"
                        rows={3}
                        required
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
    );
}

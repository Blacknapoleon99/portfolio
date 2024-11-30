import Link from "next/link";

export default function Home() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-black to-purple-900 flex flex-col items-center justify-center text-white">
            {/* Black Hole Container */}
            <div className="relative w-80 h-80 flex items-center justify-center">
                {/* Outer Glow */}
                <div className="absolute w-[18rem] h-[18rem] rounded-full bg-gradient-to-br from-purple-600 via-transparent to-transparent opacity-40 blur-2xl"></div>
                {/* Accretion Disk */}
                <div className="absolute w-[14rem] h-[14rem] rounded-full bg-gradient-to-br from-purple-900 to-black animate-spin-slow blur-md"></div>
                {/* Event Horizon */}
                <div className="absolute w-[12rem] h-[12rem] rounded-full bg-black"></div>
                {/* Singularity */}
                <Link href="/mysteryx">
                    <div className="absolute w-6 h-6 rounded-full bg-white hover:bg-yellow-300 animate-ping cursor-pointer shadow-lg"></div>
                </Link>
            </div>

            <h1 className="text-4xl font-bold mt-8">Welcome to My Portfolio</h1>
            <p className="text-lg mt-4 max-w-lg text-center">
                Explore my projects, learn more about me, and discover the mysteries of the universe!
            </p>
        </div>
    );
}

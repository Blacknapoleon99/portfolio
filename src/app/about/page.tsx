import Starfield from "@/app/components/Starfield";
import Image from "next/image";

export default function About() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-black via-blue-900 to-purple-900 text-white relative overflow-hidden">
            {/* Starfield Animation */}
            <Starfield />

            <div className="container mx-auto relative z-10">
                {/* About Me Section */}
                <h1 className="text-6xl font-extrabold text-center mb-12 text-glow">
                    About Me
                </h1>
                <div className="bg-gradient-to-b from-blue-800 via-blue-700 to-black p-8 rounded-lg shadow-2xl backdrop-blur-md about-box">
                    <p className="text-2xl leading-relaxed mb-6 text-justify hover-section">
                        My name is Kevin Lübeck, and I am a passionate individual
                        currently immersed in the field of AWS Cloud Development.
                        My journey into the world of technology began with an early
                        fascination for server hosting, database management, and game
                        development, laying the foundation for my technical pursuits
                        today.
                    </p>
                    <p className="text-2xl leading-relaxed mb-6 text-justify hover-section">
                        Inspired by my uncle, Henry Kerali, a visionary who contributed
                        to groundbreaking projects like the Highway Development and
                        Management Model (HDM-II), I’ve always believed in the power
                        of technology to solve global challenges. Witnessing his
                        dedication fueled my determination to push boundaries, whether
                        by building scalable cloud solutions or crafting immersive game
                        environments.
                    </p>
                    <p className="text-2xl leading-relaxed text-justify hover-section">
                        As I continue my journey, my goal remains to bring ideas to
                        life, contribute to meaningful projects, and push the
                        boundaries of what’s possible in technology. With a solid
                        foundation in cloud development, a creative approach, and an
                        insatiable curiosity to learn, I’m excited to shape the future,
                        one project at a time. My Next Project? A 3D based game built
                        with unreal engine 5 and the new nanite technology to push the
                        boundaries of what´s possible in gaming. Stay tuned! Because Alot more is coming!
                        And dont forget to try and find the Hidden Site! 😁
                    </p>
                </div>

                {/* People Who Inspired Me Section */}
                <div className="mt-20">
                    <h2 className="text-4xl font-bold text-center mb-8 text-glow">
                        People Who Inspired Me
                    </h2>
                    <div className="flex justify-center gap-12">
                        {/* Henry Kerali */}
                        <a
                            href="https://www.linkedin.com/in/henry-kerali-581a0b50/?originalSubdomain=ae"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-col items-center hover:scale-110 transition-transform duration-300"
                        >
                            <div className="w-32 h-32 rounded-full overflow-hidden shadow-lg ring-4 ring-white hover:ring-blue-500">
                                <Image
                                    src="/Henry Kerali.jpg"
                                    alt="Henry Kerali"
                                    className="w-full h-full object-cover"
                                    width={240}
                                    height={240}
                                />
                            </div>
                            <p className="mt-4 text-center text-lg font-medium inspiration-name">
                                Henry Kerali
                            </p>
                        </a>

                        {/* Elon Musk */}
                        <a
                            href="https://en.wikipedia.org/wiki/Elon_Musk"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-col items-center hover:scale-110 transition-transform duration-300"
                        >
                            <div className="w-32 h-32 rounded-full overflow-hidden shadow-lg ring-4 ring-white hover:ring-blue-500">
                                <Image
                                    src="/Elon Musk.jpg"
                                    alt="Elon Musk"
                                    className="w-full h-full object-cover"
                                    width={240}
                                    height={240}
                                />
                            </div>
                            <p className="mt-4 text-center text-lg font-medium inspiration-name">
                                Elon Musk
                            </p>
                        </a>

                        {/* Blizzard Entertainment */}
                        <a
                            href="https://worldofwarcraft.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-col items-center hover:scale-110 transition-transform duration-300"
                        >
                            <div className="w-32 h-32 rounded-full overflow-hidden shadow-lg ring-4 ring-white hover:ring-blue-500">
                                <Image
                                    src="/Blizzard Entertainment.jpg"
                                    alt="Blizzard Entertainment"
                                    className="w-full h-full object-cover"
                                    width={240}
                                    height={240}
                                />
                            </div>
                            <p className="mt-4 text-center text-lg font-medium inspiration-name">
                                Blizzard Entertainment
                            </p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

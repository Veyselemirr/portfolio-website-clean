import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Github, Linkedin, FileText } from "lucide-react";
import { Typewriter } from 'react-simple-typewriter';


const HeroSection = () => {
    const [hero, setHero] = useState(null);
    const [cvUrl, setCvUrl] = useState('');

    useEffect(() => {
        // Hero verisi
        axios.get(`${process.env.REACT_APP_API_URL}/api/hero`)
            .then(res => {
                if (res.data.length > 0) {
                    setHero(res.data[0]);
                }
            })
            .catch(err => console.error("API hatası:", err));

        // CV linki
        axios.get(`${process.env.REACT_APP_API_URL}/api/cv`)
            .then(res => setCvUrl(`${process.env.REACT_APP_API_URL}${res.data.url}`))
            .catch(err => console.error("CV linki alınamadı:", err));
    }, []);
    if (!hero) return <p className="text-center mt-10 text-gray-500">Yükleniyor...</p>;

    return (
        <section className="min-h-screen pt-40 pb-20 bg-gradient-to-b from-[#111827] to-[#0b3d2e] text-white" id="home">
            <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-10">
                {/* Sol: Yazılar */}
                <div className="text-center sm:text-left w-full sm:w-1/2">
                    <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-teal-800">
                        {hero.greeting}
                    </h1>

                    <p className="mt-6 text-lg md:text-xl text-gray-200 leading-relaxed">
                        {hero.subtitle}
                    </p>

                    <div className="mt-8 flex space-x-4 justify-center sm:justify-start">
                        <a href="https://github.com/Veyselemirr" target="_blank" rel="noopener noreferrer"
                            className="p-3 bg-emerald-500 text-white rounded-full shadow-lg hover:bg-emerald-600 hover:rotate-6 hover:scale-110 transition-transform duration-300">
                            <Github className="w-8 h-8" />
                        </a>
                        <a href="https://www.linkedin.com/in/veysel-emir-yurtseven-910622327/" target="_blank" rel="noopener noreferrer"
                            className="p-3 bg-emerald-500 text-white rounded-full hover:rotate-6 shadow-lg hover:bg-emerald-600 hover:scale-110 transition-transform duration-300">
                            <Linkedin className="w-8 h-8" />
                        </a>
                        {cvUrl && (
                            <a href={cvUrl} download
                                className="group flex items-center bg-emerald-500 text-white rounded-full shadow-lg overflow-hidden transition-all duration-300 pl-3 pr-3 py-3 w-[48px] hover:w-56">
                                <FileText className="w-6 h-6 flex-shrink-0" />
                                <span className="ml-3 text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                                    CV’mi indirebilirsiniz
                                </span>
                            </a>
                        )}
                    </div>
                </div>

                {/* Sağ: Terminal */}
                <div className="w-full sm:w-1/2 flex justify-center">
                    <div className="bg-gradient-to-br from-gray-1200 to-[#0b3d2e] text-green-400 font-mono p-4 rounded-lg shadow-2xl w-full max-w-[600px] h-[280px] overflow-hidden relative">
                        <p className="text-md mb-2">$ terminal </p>
                        <p className="text-xl sm:text-2xl mb-2">const developer = "Veysel Emir"</p>
                        <span className="text-md sm:text-lg">
                            <Typewriter
                                words={[
                                    'Console.WriteLine("Hello, World!"); ',
                                    'print("Hello, World!")',
                                    'console.log("Hello, World!");',
                                    'System.out.println("Hello, World!");',
                                    'printf("Hello, World!");',
                                ]}
                                loop={true}
                                cursor
                                cursorStyle="|"
                                typeSpeed={50}
                                deleteSpeed={30}
                                delaySpeed={1500}
                            />
                        </span>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default HeroSection;
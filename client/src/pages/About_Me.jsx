import React, { useEffect, useState } from "react";
import axios from "axios";
import { iconMap } from "../utils/iconMap";

const AboutMe = () => {
    const [about, setAbout] = useState(null);
    const [activeTab, setActiveTab] = useState("about");
    const [skills, setSkills] = useState([]);
    const [education, setEducation] = useState(null);

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/api/education`)
            .then(res => {
                if (res.data.length > 0) {
                    setEducation(res.data[0]);
                }
            })
            .catch(err => console.error("Education verisi alınamadı:", err));
    }, []);

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/api/about`)
            .then(res => {
                if (res.data.length > 0) {
                    setAbout(res.data[0]);
                }
            })
            .catch(err => console.error("Hakkımda verisi alınamadı:", err));
    }, []);

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/api/skills`)
            .then(res => {
                setSkills(res.data);
            })
            .catch(err => console.error("Skill verisi alınamadı:", err));
    }, []);

    const renderContent = () => {
        if (activeTab === "about") {
            return (
                <div className="space-y-6">
                    <h3 className="text-4xl font-extrabold text-emerald-400">About Me</h3>
                    <p className="text-lg text-gray-300 leading-relaxed">{about?.description}</p>
                </div>
            );
        } else if (activeTab === "skills") {
            return (
                <div className="space-y-6">
                    <h3 className="text-4xl font-extrabold text-emerald-400">My Skills</h3>
                    <p className="text-lg text-gray-400 max-w-xl">
                        Below are the technologies and tools I actively use in my projects.
                    </p>
                    {skills.length > 0 ? (
                        <div className="overflow-x-hidden">
                            <div className="grid grid-cols-3 sm:grid-cols-3 gap-4 h-[360px] overflow-y-auto pr-2 scrollbar">
                                {skills.map((skill, idx) => {
                                    const IconComponent = iconMap[skill.icon];
                                    return (
                                        <div
                                            key={idx}
                                            className="group relative p-8 rounded-lg bg-[#193540]/80 hover:bg-emerald-600 transition-all duration-300 shadow-md flex flex-col items-center justify-center text-emerald-300 hover:text-white"
                                        >
                                            {IconComponent ? (
                                                <IconComponent className="text-6xl" />
                                            ) : (
                                                <span className="text-sm text-red-400">?</span>
                                            )}
                                            <div className="opacity-0 group-hover:opacity-100 text-xs bg-black/60 text-white px-2 py-1 rounded transition text-center absolute bottom-[-10px] left-1/2 transform -translate-x-1/2">
                                                {skill.name}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    ) : (
                        <p className="text-gray-400 text-sm">Henüz skill eklenmemiş.</p>
                    )}
                </div>
            );
        } else if (activeTab === "education") {
            return (
                <div className="space-y-6">
                    <h3 className="text-4xl font-extrabold text-emerald-400">My Education</h3>
                    <p className="text-lg text-gray-300 leading-relaxed">
                        {education?.description}
                    </p>
                </div>
            );
        }
    };

    return (
        <section className="min-h-screen bg-gradient-to-b from-[#111827] to-[#0b3d2e] text-white py-28 pt-35" id="about">
            {/* Başlık */}
            <div className="max-w-6xl mx-auto px-4 ">
                <h2 className="text-6xl font-bold mb-10 mt-7 text-center text-emerald-400">Resume</h2>
            </div>

            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 px-4">
                {/* Sol Menü */}
                <div className="flex flex-col space-y-6">
                    {["about", "skills", "education"].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`w-full py-4 px-6 text-xl rounded-md text-left font-bold transition-all
                            ${activeTab === tab
                                    ? "bg-emerald-500 text-black"
                                    : "bg-[#1a1f2e] hover:bg-emerald-600 hover:text-white"}`}
                        >
                            {tab === "about" && "About Me"}
                            {tab === "skills" && "Skills"}
                            {tab === "education" && "Education"}
                        </button>
                    ))}
                </div>

                {/* Sağ İçerik */}
                <div className="md:col-span-3 bg-[#1a1f2e] p-12 rounded-2xl shadow-xl mt-2">
                    <div key={activeTab} className="animate-fade-in">
                        {renderContent()}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';

const Experience = () => {
    const [experiences, setExperiences] = useState([]);

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/api/experience`)
            .then(res => setExperiences(res.data))
            .catch(err => console.error("API Hatası:", err));
    }, []);

    return (
        <section className="min-h-screen bg-gradient-to-b from-[#111827] to-[#0b3d2e] text-white py-20 px-6">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-5xl font-bold mb-12 mt-12 text-center text-emerald-400">Experience</h2>

                <div className="relative border-l-4 border-emerald-500 pl-6 space-y-12">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.15 }}
                            viewport={{ once: true }}
                            className="bg-[#1a1f2e] p-6 rounded-lg"
                        >
                            <div className="mb-2 text-sm text-emerald-300 font-medium">
                                {exp.date}
                            </div>
                            <h3 className="text-xl font-semibold">{exp.role} @ {exp.company}</h3>
                            <p className="text-gray-300 mt-1">{exp.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;

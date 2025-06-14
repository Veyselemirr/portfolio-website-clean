import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { iconMap } from '../utils/iconMap';
import { motion } from 'framer-motion';
import { FaEnvelope } from 'react-icons/fa';

const ContactPage = () => {
    const [contact, setContact] = useState(null);

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/api/contact`)
            .then(res => {
                const data = res.data;

                // Sadece dosya adı geldiyse tam URL haline getir
                if (!data.profileImage.startsWith('http')) {
                    data.profileImage = `${process.env.REACT_APP_API_URL}/uploads/${data.profileImage}`;
                }

                setContact(data);
            })
            .catch(err => console.error("API hatası:", err));
    }, []);


    if (!contact) {
        return <p className="text-white text-center mt-10 text-xl">Yükleniyor...</p>;
    }

    return (
        <section className="min-h-screen bg-gradient-to-b from-[#111827] to-[#0b3d2e] text-white pt-32 pb-24 px-8">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-6xl font-bold mb-10 text-center text-emerald-400">Contact</h2>

                <div className="grid md:grid-cols-12 gap-16 items-center">
                    {/* Sol Kısım: Bilgiler Kartı */}
                    <motion.div
                        initial={{ opacity: 0, x: -60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="md:col-span-7 bg-[#1a1f2e] w-full px-12 py-10 rounded-2xl shadow-xl border-l-4 border-emerald-500"
                    >
                        {/* Email */}
                        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-5 mb-5">
                            <div className="flex items-center gap-3">
                                <FaEnvelope size={28} className="text-emerald-400" />
                                <span className="text-base sm:text-lg font-semibold text-white">Email:</span>
                            </div>
                            <a
                                href={`mailto:${contact.email}`}
                                className="text-base sm:text-lg text-emerald-300 hover:underline break-all"
                            >
                                {contact.email}
                            </a>
                        </div>

                        {/* Sosyal Medyalar */}
                        <div className="space-y-6">
                            {contact.socialLinks.map((link, index) => {
                                const Icon = iconMap[link.iconKey];
                                return (
                                    <div
                                        key={index}
                                        className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-5"
                                    >
                                        <div className="flex items-center gap-3">
                                            {Icon && <Icon size={28} className="text-emerald-400" />}
                                            <span className="text-base sm:text-lg font-semibold text-white">{link.name}:</span>
                                        </div>
                                        <a
                                            href={link.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-base sm:text-lg text-emerald-300 hover:underline break-all"
                                        >
                                            {link.url}
                                        </a>
                                    </div>
                                );
                            })}
                        </div>
                    </motion.div>

                    {/* Sağ Kısım: Modern & Dönen Profil Foto */}
                    <motion.div
                        initial={{ opacity: 0, x: 60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="md:col-span-5 flex justify-center items-center"
                    >
                        <div className="relative w-64 h-64 sm:w-80 sm:h-80">
                            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-[#1a1f2e]">
                                <img
                                    src={contact.profileImage}
                                    alt="Profil"
                                    className="w-full h-full object-cover"
                                />


                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ContactPage;

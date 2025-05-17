import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-400 text-center py-6">
            <p className="text-sm">
                &copy; {new Date().getFullYear()} Veysel Emir.dev — Tüm hakları saklıdır.
            </p>
        </footer>
    );
};

export default Footer;

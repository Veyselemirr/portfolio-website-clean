// tailwind.config.js
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            animation: {
                'spin-slow': 'spin 8s linear infinite',
                'spin-slow': 'spin 12s linear infinite',
                'spin-slower': 'spin 20s linear infinite',

            },
        },
    },
    plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        'node_modules/preline/dist/*.js',
        './src/**/*.{js,jsx,ts,tsx}'
    ],
    theme: {
        container: {
            center: true,
        },
        extend: {},
    },
    plugins: [
        require('preline/plugin'),
    ],
}

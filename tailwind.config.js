/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                primary: "#27B5FC",
                orange_primary: "#FC9D26",
                primary_bold: "#262DFC"
            },
            gridTemplateColumns: {
                footer: "1.3fr 1fr 1fr 1fr",
                three_col_custom: "48% 4% 48%",
                two_col_custom: "40% 60%",
            },
            container: {
                screens: {
                    xl: "1220px",
                },
            },
            boxShadow: {
                custom: "0 5px 15px rgba(0, 0, 0, 0.25) ",
            },
            transitionDuration: {
                2000: "2000ms",
            },
        },
    },
    plugins: [],
};

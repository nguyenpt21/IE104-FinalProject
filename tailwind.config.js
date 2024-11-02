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
            inset: {
                '-50px': '-50px', // Định nghĩa giá trị top tùy chỉnh
            },
            fontSize: {
                'tiny': '0.625rem', // Kích thước font nhỏ
                'xxs': '0.5rem',    // Kích thước font siêu nhỏ
                'huge': '2.5rem',   // Kích thước font lớn
            },
        },
    },
    plugins: [],
};

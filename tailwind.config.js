const {nextui} = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                primary: "#27B5FC",
                secondary: "#9ca3af",
                orangee: "#FF7E1B",
                orange_primary: "#FC9D26",
                primary_bold: "#262DFC",
                blue_medium: '#27b5fc'

            },
            gridTemplateColumns: {
                footer: "1.3fr 1fr 1fr 1fr",
                three_col_custom: "48% 4% 48%",
                two_col_custom: "40% 60%",
                two_col_custom_2: "22% auto",
                two_col_custom_3: "30% auto",
            },
            container: {
                screens: {
                    xl: "1220px",
                },
            },
            boxShadow: {
                custom: "0 5px 15px rgba(0, 0, 0, 0.25) ",
                dropdown: "0 4px 20px 0 rgba(0, 0, 0, 0.1)"
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
            whiteSpace: {
                'pre-line': 'pre-line',
            },
        },
    },
    plugins: [],
};

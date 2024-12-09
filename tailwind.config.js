/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        brown: {
          100: "#ece0d1",
          300: "#dbc1ac",
          600: "#967259",
          900: "#634832",
        },
      },
      boxShadow: {
        normal: "0px 1px 10px rgba(0,0,0,0.05)",
        // light: "0px 1px 10px rgba(0,0,0,0.05)",
        // dark: "0px 1px 10px rgba(0,0,0,0.5)",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      fontFamily: {
        Dana: "Dana",
        DanaMedium: "Dana Medium",
        DanaDemiBold: "Dana DemiBold",
        MorabbaLight: "Morabba Light",
        MorabbaMedium: "Morabba Medium",
        MorabbaBold: "Morabba Bold",
        VazirRegular: "Vazir Regular",
        VazirMedium: "Vazir Medium",
        VazirBold: "Vazir Bold",
        VazirBlack: "Vazir Black",
      },
      letterSpacing: {
        tightest: "-0.065em",
      },
      spacing: {
        30: "7.5rem",
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("child", "& > *");
      addVariant("child-hover", "& > *:hover");
    },
  ],
};

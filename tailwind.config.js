module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        "sm": { min: "0px", max: "767px" },
        "md": { min: "768px", max: "1023px" },
        "lg": "1024px",
        "xl": "1280px",
        "2xl": "1536px",
      },

      backgroundImage: {
        "2ndPage": "url('../../assets/2nd-pageBackground.png')",
        "4thPage": "url('../../assets/4th-pageBackground.png')",
        "questionBG": "url('../../assets/Backrgounds/questions_background.png')",
        "fearfulBG": "url('../../assets/Backrgounds/fearful_background.png')",
        "preoccupiedBG":
          "url('../../assets/Backrgounds/preoccupied_background.png')",
        "secureBG": "url('../../assets/Backrgounds/background_secure.png')",
        "dismissiveBG":
          "url('../../assets/Backrgounds/dismissive_background.png')",
        "graph": "url('../../assets/Backrgounds/bargraph_bg.png')"
      },

      textColor: (theme) => theme("colors"),
      textColor: {
        genderChoiceCol: "#e7624c",
      },

      backgroundColor: (theme) => ({
        ...theme("colors"),
        card1: "#efc078",
        genderbg: "#f7dee4",
      }),

      spacing: {
        "42" : "10.5rem",
        "90%" : "88%",
        "85%" : "85%",
        "65": "16.6rem",
        "67": "17rem",
        "53": "13.2rem",
        "59": "14.5rem",
        "50": "12.5rem",
        "70": "17.5rem",
        "63": "15.5rem",
        "97": "45rem",
        "95": "22rem",
        "94": "21rem",
        "99": "29rem",
        "100": "33rem",
        "101": "35rem",
        "75": "19rem",
        "93%": "90%",
        "95%": "95%",
        "34": "8.5rem",
        "98": "32rem",
        "30": "7.5rem",
        "3.5/6": "55%",
        "10%": "10%",
        "3.8/6": "62.5%",
        "70%": "70%",
        "30%": "30%",
        "40%": "40%",
        "60%": "60%",
        "55%": "55%",
        "45%": "45%",
        "35%": "35%",
        "65%" : "65%",
        "27%" : "27%",
        "53%" : "53%",
      },

      margin: {
        "7.9": "1.9rem",
        "8.5": "2.05rem",
        "7.8": "1.8rem",
        "8.9": "2.1rem",
        "9.9": "2.35rem",
        "9.8": "2.45rem",
        "10.6": "2.55rem",
        "10.7": "2.7rem",
        '11.8' : '2.9rem',
        "13" : "3.3rem",
        "30" : "7.5rem"
      },

      fontSize: {
        "7.5xl": ["5.5rem", { lineHeight: "1" }],
        "7.1xl": ["5.1rem", { lineHeight: "1" }],
        "4.5xl": ["2.8rem", { lineHeight: "1" }],
        "8.5xl": ["6.5rem", { lineHeight: "1" }],
        "8.7xl": ["7.5rem", { lineHeight: "1" }],
        "5.5xl": ["3.5rem", { lineHeight: "1" }],
        "6.5xl": ["4rem", { lineHeight: "1" }],
        "3.5xl": ["2.1rem", { lineHeight: "1" }],
      },

      width: {},

      borderRadius: {
        "80": "10%",
      },

      fontFamily: {
        BreeSerif: ["Bree Serif"],
        Barlow: ["Barlow"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

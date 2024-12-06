/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    
  ],
  prefix: "",
  theme: {
    screens: {
      ss: "320px", // small screen
      sm: "375px", // medium screen
      md: "768px", // tablet screen
      lg: "976px", 
      x:  "1024px", // laptop medium
      xx: "1440px", // laptop normal
      xl: "2560px", // Desktop
    },
    colors: {
      "white": "#ffffff",
      "white-light": "#EDEFFA",
      "blue": "#1b3664",
      "light-blue": "#001266",
      "dark": "#000000",
      "purple": "#7e5bef",
      "pink": "#ff49db",
      "orange": "#ff7849",
      "orange-light": "#D8A428",
      "green": "#06543c",
      "green-light": "#ECFDF3",
      "green-deep": "#06543C",
      "green-very-light": "#F6FEF9",
      "yellow": "#ffc82c",
      "gray-dark": "#273444",
      "gray": "#98A2B3",
      "gray-light": "#475467",
      "gray-lighter": "#F2F4F7",
      "gray-white": "#FCFCFD",
      "dark-gray": "#344054",
      "dark-gray-900": "#101828",
      "red": "#FF0000",
      "gold": "#D8A428"
    },
    fontFamily: {
      montserrat: ["Montserrat"],
      sans: ["ui-sans-serif", "poppins"],
      serif: ["ui-serif", "Georgia", "poppins"],
      mono: ["ui-monospace", "SFMono-Regular"],
      display: ["Oswald"],
      body: ['"Open Sans"'],
      

    },
    fontSize: {
      xs: "0.5rem",
      xss: "0.6rem",
      xsss: "0.7rem",
      sm: "0.8rem",
      base: "1rem",
      x: "1.15rem",
      xl: "1.25rem",
      "1xl":"1.28rem",
      "2xl": "1.563rem",
      "3xl": "1.953rem",
      "4xl": "2.441rem",
      "5xl": "3.052rem",
      "6xl": "3.501rem",
      "7xl": "4.285rem",
    },
    spacing: {
      "0.1": "1px",
      "0.2": "2px",
      "0.3": "3px",
      "0.4": "4px",
      "0.5": "4px",
      "0.6": "6px",
      "1": "8px",
      "1.2": "9px",
      "1.5": "10px",
      "2": "12px",
      "2.5": "13px",
      "3": "14px",
      "3.5": "15px",
      "4": "16px",
      "4.4": "17px",
      "4.5": "18px",
      "4.51": "20px",
      "4.6": "22px",
      "4.7": "23px",
      "5": "24px",
      "5.1": "26px",
      "5.2": "28px",
      "5.3": "30px",
      "5.4": "31px",
      "6": "32px",
      "6.1": "34px",
      "6.2": "36px",
      "6.3": "40px",
      "6.4": "42px",
      "6.5": "43px",
      "6.6": "45px",
      "6.7": "47px",
      "7": "48px",
      "7.5": "53px",
      "7.6": "56px",
      "7.7": "58px",
      "8": "60px",
      "8.1": "62px",
      "8.5": "65px",
      "8.6": "66px",
      "8.7": "68px",
      "9": "70px",
      "9.5": "75px",
      "9.6": "78px",
      "10": "80px",
      "10.1": "82px",
      "10.2": "84px",
      "10.3": "86px",
      "10.4": "88px",
      "10.5": "90px",
      "10.6": "95px",
      "11": "100px",
      "11.5": "105px",
      "11.6": "110px",
      "11.7": "113px",
      "11.8": "116px",
      "11.9": "118px",
      "12": "120px",
      "12.1": "122px",
      "12.2": "125px",
      "12.5": "130px",
      "12.6": "135px",
      "13": "140px",
      "13.5": "145px",
      "14": "150px",
      "14.5": "155px",
      "15": "160px",
      "15.1": "167px",
      "15.2": "169px",
      "15.3": "172px",
      "15.5": "175px",
      "15.6": "180px",
      "15.8": "183px",
      "15.9": "188px",
      "16": "195px",
      "16.1": "200px",
      "16.5": "208px",
      "16.6": "210px",
      "17": "220px",
      "17.5": "225px",
      "17.6": "230px",
      "17.7": "235px",
      "18": "240px",
      "18.5": "235px",
      "19": "240px",
      "19.14": "242px",
      "19.15": "245px",
      "19.1": "250px",
      "19.16": "255px",
      "19.17": "257px",
      "19.2": "260px",
      "19.23": "263px",
      "19.25": "265px",
      "19.3": "283px",
      "19.4": "288px",
      "19.5": "290px",
      "19.6": "300px",
      "19.7": "301px",
      "19.8": "306px",
      "19.9": "311px",
    },
    extend: {
      colors: {
        transparent: "transparent",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      spacing: {
        "20": "20rem",
        "20.1": "20.1rem",
        "20.2": "20.2rem",
        "20.3": "20.3rem",
        "20.4": "20.4rem",
        "20.5": "20.6rem",
        "20.8": "20.8rem",
        "21": "21rem",
        "21.1": "21.1rem",
        "21.2": "21.2rem",
        "21.3": "21.3rem",
        "21.4": "21.4rem",
        "21.5": "21.5rem",
        "22": "22rem",
        "22.5": "22.5rem",
        "23": "23rem",
        "23.2": "23.2rem",
        "23.3": "23.3rem",
        "23.4": "23.4rem",
        "23.5": "23.5rem",
        "23.6": "23.6rem",
        "24": "24rem",
        "25": "25rem",
        "25.3": "25.3rem",
        "26": "26rem",
        "27": "27rem",
        "27.5": "27.5rem",
        "28": "28rem",
        "29": "29rem",
        "29.5": "29.5rem",
        "30": "30rem",
        "31": "31rem",
        "32": "32rem",
        "33": "33rem",
        "33.6": "33.6rem",
        "34": "34rem",
        "35": "35rem",
        "36": "36rem",
        "37": "37rem",
        "37.5": "37.5rem",
        "38": "38rem",
        "38.5": "38.5rem",
        "39": "39rem",
        "39.5": "39.5rem",
        "40": "40rem",
        "40.5": "40.5rem",
        "40.9": "40.9rem",
        "41": "41rem",
        "42": "42rem",
        "42.5": "42.5rem",
        "43": "43rem",
        "44": "44rem",
        "44.5": "44.5rem",
        "45": "45rem",
        "46": "46rem",
        "46.5": "46.5rem",
        "47": "47rem",
        "48": "48rem",
        "49": "49rem",
        "50": "50rem",
        "51": "51rem",
        "52": "52rem",
        "53": "53rem",
        "53.1": "53.1rem",
        "54": "54rem",
        "55": "55rem",
        "57": "56.5rem",
        "58": "58rem",
        "59": "59rem",
        "59.2": "59.2rem",
        "60": "60rem",
        "61": "61rem",
        "62": "62rem",
        "63": "63rem",
        "64": "64rem",
        "65": "65rem",
        "66": "66rem",
        "66.1": "66.1rem",
        "66.2": "66.2rem",
        "66.4": "66.4rem",
        "67": "67rem",
        "67.5": "67.5rem",
        "67.7": "67.7rem",
        "67.8": "67.8rem",
        "67.9": "67.9rem",
        "68": "68rem",
        "69": "69rem",
        "70": "70rem",
        "71": "71rem",
        "72": "72rem",
        "73": "73rem",
        "73.5": "73.5rem",
        "73.6": "73.6rem",
        "73.7": "73.7rem",
        "74": "74rem",
        "75": "75rem",
        "75.5": "75.5rem",
        "76": "76rem",
        "76.5": "76.5rem",
        "78": "78rem",
        "80": "80rem",
        "81": "81rem",
        "82": "82rem",
        "83.5": "83rem",
        "83": "84rem",
        "83.6": "86.6rem",
        "84": "87rem",
        "90": "90rem",
        "91": "91rem",
        "92": "92rem",
        "93": "93rem",
        "94": "94rem",
        "95": "95rem",
        "100": "100rem",
        "102": "102rem",
        "104": "104rem",
        "106": "106rem",
        "110": "110rem",
        "115": "115rem",
        "115.5": "115.5rem",
        "120": "120rem",
        "125": "125rem",
        "128": "128rem",
        "130": "130rem",
        "131": "131rem",
        "132": "132rem",
        "133": "133rem",
        "134": "134rem",
        "135": "135rem",
        "136": "136rem",
        "140": "140rem",
        "144": "144rem",
        "150": "150rem",
        "160": "160rem",
        "170": "170rem",
        "180": "180rem",
        "190": "190rem",
        "200": "200rem",
        "214": "214rem",
        "250": "250rem",
        "300": "300rem",
        "350": "350rem",
        "450": "450rem",
        "550": "550rem",
        "650": "650rem",
        "750": "750rem",
        "850": "850rem",
        "870": "870rem",
        "875": "875rem",
        "877": "877rem",
        "878": "878rem",
        "879": "879rem",
        "880": "880rem",
        "900": "900rem",
        "950": "950rem",
        "1050": "1050rem",
        "1150": "1150rem",
        "1245": "1245rem",
        "1248": "1248rem",
        "1250": "1250rem",
        "1345": "1345rem",
        "1350": "1350rem",
      },
    },
  },
  plugins: [],
};
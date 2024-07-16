import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				orange: {
					DEFAULT: "#FF6600",
				},
				orange2: {
					DEFAULT: "#CC5200",
				},
				sudo: {
					DEFAULT: "#444444",
				},
				sudo2: {
					DEFAULT: "#333333",
				},
				blue: {
					DEFAULT: "#003098",
				},
				transparent: {
					DEFAULT: "transparent",
				},
				dark: {
					DEFAULT: "rgb(0, 0, 0, 50)",
				},
				grey: {
					DEFAULT: "rgba(39, 54, 86, .1)",
				},
				green: {
					DEFAULT: "#009a44",
				},
				black: {
					DEFAULT: "#000000",
				},
			},
		},
		screens: {
			// For mobile devices, smaller than 640px
			mobile: "375px",
			// => @media (min-width: 375px) { ... }

			// For tablets, 640px to 1023px
			tablet: "768px",
			// => @media (min-width: 640px) { ... }

			// For laptops, 1024px to 1279px
			laptop: "1024px",
			// => @media (min-width: 1024px) { ... }

			// For desktops, 1280px and up
			desktop: "1280px",
			// => @media (min-width: 1280px) { ... }

			// For extra large screens (e.g., very large monitors), 1536px and up
			"2xl": "1536px",
			// => @media (min-width: 1536px) { ... }
		},
	},
	plugins: [],

	// Tailwind CSS IntelliSense settings
	"tailwindCSS.includeLanguages": {
		html: "html",
		javascript: "javascript",
		css: "css",
	},
	"editor.quickSuggestions": {
		strings: true,
	},
};

export default config;

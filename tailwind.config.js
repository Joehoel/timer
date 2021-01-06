const colors = require("tailwindcss/colors");

module.exports = {
	future: {
		removeDeprecatedGapUtilities: true,
		purgeLayersByDefault: true,
	},
	purge: [],
	darkMode: "media", // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				gray: colors.trueGray,
				red: colors.red,
				green: colors.green,
			},
		},
		animation: {
			fade: "fade 0.5s ease",
		},
		keyframes: {
			fade: {
				"0%": {
					opacity: 0,
				},
				"100%": {
					opacity: 100,
				},
			},
		},
	},
	variants: {
		extend: { scale: ["active"] },
	},
	plugins: [],
};

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
	},
	variants: {
		extend: {},
	},
	plugins: [],
};

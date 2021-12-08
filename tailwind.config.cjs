const daisyui = require('./src/lib/config/theme/daisyui.json');
const themeColors = require('./src/lib/config/theme/colors.json');

const config = {
	/*** TAILWIND KIT CONFIGS ***/
	// Active dark mode on class basis
	important: true,
	darkMode: "class",
	i18n: {
		locales: ["pt-BR"],
		defaultLocale: "pt-BR",
	  },
	/*** OTHER CONFIGS ***/
	// mode: 'jit',
	// purge: ['./src/**/*.{html,js,svelte,ts}'],
	purge: {
		content: ['./src/**/*.{html,js,svelte,ts}', "./pages/**/*.tsx", "./components/**/*.tsx"],
		// These options are passed through directly to PurgeCSS
	  },

	  daisyui: {
		themes: [
			{
				'brand': daisyui,
			},
		],
	},

	theme: {
		extend: {
			colors: themeColors,
			fontFamily: {
				sans: ['Open Sans', 'sans-serif']
			},
			backgroundImage: (theme) => ({
				check: "url('/icons/check.svg')",
				landscape: "url('/images/landscape/2.jpg')",
			  }),
		}
	},
	variants: {
		extend: {
		  backgroundColor: ["checked"],
		  borderColor: ["checked"],
		  inset: ["checked"],
		  zIndex: ["hover", "active"],
		},
	  },

	  future: {
		purgeLayersByDefault: true,
	  },

	plugins: [
		require('@tailwindcss/forms'),
		require('@tailwindcss/typography'),
		require('daisyui')
	]
};

module.exports = config;

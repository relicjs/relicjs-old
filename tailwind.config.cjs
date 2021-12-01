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
				'brand': {
					'primary': '#00a335',
					'primary-focus': '#007938',
					'primary-content': '#ffffff',
					'secondary': '#507888',
					'secondary-focus': '#21495a',
					'secondary-content': '#ffffff',
					'accent': '#27bdbe',
					'accent-focus': '#00a196',
					'accent-content': '#ffffff',
					'neutral': '#3d4451',
					'neutral-focus': '#2a2e37',
					'neutral-content': '#ffffff',
					'base-100': '#ffffff',
					'base-200': '#f9fafb',
					'base-300': '#d1d5db',
					'base-content': '#1f2937',
					'info': '#00a8d5',
					'success': '#00a335',
					'warning': '#eab42a',
					'error': '#d72735',
				},
			},
		],
	},

		theme: {
		extend: {
			colors: {
				green: {
					1200: '#003610',
					1100: '#005023',
					1000: '#045C2F',
					900: '#007938',
					800: '#00863F',
					700: '#00a335',
					600: '#48b554',
					500: '#6dc180',
					400: '#87c984',
					300: '#95ce91',
					200: '#abd5a2',
					100: '#bedcbc',
				},
				blueGray: {
					1200: '#002630',
					1100: '#05303B',
					1000: '#103543',
					900: '#21495A',
					800: '#31586C',
					700: '#507888',
					600: '#6893A7',
					500: '#92C1D4',
					400: '#A5CADA',
					300: '#B8D4E1',
					200: '#CBDEE8',
					100: '#DEE9EF',
				},
				red: {
					1200: '#310000',
					1100: '#530000',
					1000: '#790018',
					900: '#9D0229',
					800: '#ba1122',
					700: '#d72735',
					600: '#ee3d43',
					500: '#F0564E',
					400: '#F58E7B',
					300: '#F79F8C',
					200: '#FAC3B4',
					100: '#FDE9E1',
				},
				orange: {
					1200: '#962e1',
					1100: '#A0521',
					1000: '#BF621',
					900: '#D66D1F',
					800: '#EB741F',
					700: '#EB741F',
					600: '#FBAF3F',
					500: '#FEC359',
					400: '#FFCE7A',
					300: '#FFE5AB',
					200: '#FFEECA',
					100: '#FFF7EA',
				},
				yellow: {
					1200: '#674403',
					1100: '#875B15',
					1000: '#A87716',
					900: '#BC8C1B',
					800: '#D4A327',
					700: '#EAB42A',
					600: '#FFCC47',
					500: '#FFD46D',
					400: '#FFDC8C',
					300: '#FFE5AB',
					200: '#FFEECA',
					100: '#FFF7EA',
				},
				teal: {
					1200: '#007068',
					1100: '#00807B',
					1000: '#009190',
					900: '#00A196',
					800: '#00AEA9',
					700: '#27bdbe',
					600: '#5ec0bc',
					500: '#7cc6c4',
					400: '#87d0d1',
					300: '#94d5d6',
					200: '#afdedd',
					100: '#bce3e5',
				},
				blue: {
					1200: '#00485E',
					1100: '#005B79',
					1000: '#006A88',
					900: '#0084A9',
					800: '#0698BD',
					700: '#00A8D5',
					600: '#3CC6F4',
					500: '#6CCFF6',
					400: '#7FD3F7',
					300: '#90D8F8',
					200: '#C0E7FA',
					100: '#d5ecf3',
				}
			},
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

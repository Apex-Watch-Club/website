import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
		colors: {
			gold: '#dabe70',
			'luxury-black': "#191a1a"
		},
      backgroundImage: {
        'gradient-radial-bg': 'rgb(255,226,112)',
        'gradient-radial': 'radial-gradient(circle, rgba(255,226,112,1) 0%, rgba(0,0,0,1) 50%)',
      },
    },
  },
  plugins: [],
}
export default config

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        industrial: {
          900: '#111111', // Darkest charcoal
          800: '#1a1a1a', // Slate
          700: '#2a2a2a', // Lighter slate
          600: '#333333',
        },
        rust: {
          400: '#d9531e',
          500: '#b7410e', // Main rust accent
          600: '#993300', // Darker rust
        },
        neon: {
          orange: '#ff5500', // Vibrant neon orange
          blue: '#00f0ff',   // Electric blue
          emerald: '#00ff66',// Glowing emerald
        },
      },
      fontFamily: {
        mono: ['"Space Mono"', '"Courier New"', 'monospace'],
        sans: ['"Inter"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      backgroundImage: {
        'rustic-texture': "url('data:image/svg+xml,%3Csvg width=\\'20\\' height=\\'20\\' viewBox=\\'0 0 20 20\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cg fill=\\'%23333333\\' fill-opacity=\\'0.4\\' fill-rule=\\'evenodd\\'%3E%3Ccircle cx=\\'3\\' cy=\\'3\\' r=\\'3\\'/%3E%3Ccircle cx=\\'13\\' cy=\\'13\\' r=\\'3\\'/%3E%3C/g%3E%3C/svg%3E')",
        'grid-pattern': 'linear-gradient(to right, #333 1px, transparent 1px), linear-gradient(to bottom, #333 1px, transparent 1px)',
      },
      backgroundSize: {
        'grid-size': '40px 40px',
      },
      boxShadow: {
        'neon-glow': '0 0 15px rgba(255, 85, 0, 0.4)',
        'emerald-glow': '0 0 15px rgba(0, 255, 102, 0.4)',
        'blue-glow': '0 0 15px rgba(0, 240, 255, 0.4)',
      }
    },
  },
  plugins: [],
}

module.exports = {
  content: ['./src/**/*.{astro,html,js,ts}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Sora', 'ui-sans-serif', 'system-ui'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular'],
      },
      colors: {
        brand: {
          50: '#f6f5ff',
          100: '#efeaff',
          500: '#7c3aed',
        },
      },
      backgroundImage: {
        'hero-gradient': "radial-gradient(circle at 10% 10%, rgba(56,189,248,0.1), transparent 25%), linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0))",
      },
    },
  },
  plugins: [],
};

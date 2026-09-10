tailwind.config = {
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                dark: {
                    bg: '#020b12', /* Deepest dark teal/navy */
                    card: '#081720',
                    surface: '#0d222e',
                    border: '#143647'
                },
                brand: {
                    light: '#2dd4bf', /* teal-400 */
                    DEFAULT: '#14b8a6', /* teal-500 */
                    dark: '#0f766e', /* teal-700 */
                    neon: '#5eead4'  /* teal-300 */
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            }
        }
    }
};

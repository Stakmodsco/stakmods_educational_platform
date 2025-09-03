module.exports = {
  content: [
    "./pages/*.{html,js}",
    "./index.html",
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./components/**/*.{html,js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors - Deep Academic Blue
        primary: {
          DEFAULT: "#1E3A8A", // blue-800
          50: "#EFF6FF", // blue-50
          100: "#DBEAFE", // blue-100
          200: "#BFDBFE", // blue-200
          300: "#93C5FD", // blue-300
          400: "#60A5FA", // blue-400
          500: "#3B82F6", // blue-500
          600: "#2563EB", // blue-600
          700: "#1D4ED8", // blue-700
          800: "#1E3A8A", // blue-800
          900: "#1E40AF", // blue-900
        },
        // Secondary Colors - Sophisticated Slate
        secondary: {
          DEFAULT: "#64748B", // slate-500
          50: "#F8FAFC", // slate-50
          100: "#F1F5F9", // slate-100
          200: "#E2E8F0", // slate-200
          300: "#CBD5E1", // slate-300
          400: "#94A3B8", // slate-400
          500: "#64748B", // slate-500
          600: "#475569", // slate-600
          700: "#334155", // slate-700
          800: "#1E293B", // slate-800
          900: "#0F172A", // slate-900
        },
        // Accent Colors - Warm Amber
        accent: {
          DEFAULT: "#D97706", // amber-600
          50: "#FFFBEB", // amber-50
          100: "#FEF3C7", // amber-100
          200: "#FDE68A", // amber-200
          300: "#FCD34D", // amber-300
          400: "#FBBF24", // amber-400
          500: "#F59E0B", // amber-500
          600: "#D97706", // amber-600
          700: "#B45309", // amber-700
          800: "#92400E", // amber-800
          900: "#78350F", // amber-900
        },
        // Background Colors
        background: "#FEFEFE", // pure white with subtle warmth
        surface: "#F8FAFC", // slate-50
        // Text Colors
        "text-primary": "#1F2937", // gray-800
        "text-secondary": "#6B7280", // gray-500
        // Status Colors
        success: {
          DEFAULT: "#059669", // emerald-600
          50: "#ECFDF5", // emerald-50
          100: "#D1FAE5", // emerald-100
          500: "#10B981", // emerald-500
          600: "#059669", // emerald-600
        },
        warning: {
          DEFAULT: "#D97706", // amber-600
          50: "#FFFBEB", // amber-50
          100: "#FEF3C7", // amber-100
          500: "#F59E0B", // amber-500
          600: "#D97706", // amber-600
        },
        error: {
          DEFAULT: "#DC2626", // red-600
          50: "#FEF2F2", // red-50
          100: "#FEE2E2", // red-100
          500: "#EF4444", // red-500
          600: "#DC2626", // red-600
        },
        // Border Colors
        "border-light": "#E5E7EB", // gray-200
        "border-medium": "#D1D5DB", // gray-300
      },
      fontFamily: {
        // Headings - Inter
        heading: ['Inter', 'sans-serif'],
        // Body Text - Source Sans Pro
        body: ['Source Sans Pro', 'sans-serif'],
        // Captions - Inter
        caption: ['Inter', 'sans-serif'],
        // Data/Monospace - JetBrains Mono
        mono: ['JetBrains Mono', 'monospace'],
        data: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        // Heading Sizes
        'heading-xl': ['2.25rem', { lineHeight: '2.5rem', fontWeight: '700' }], // 36px
        'heading-lg': ['1.875rem', { lineHeight: '2.25rem', fontWeight: '600' }], // 30px
        'heading-md': ['1.5rem', { lineHeight: '2rem', fontWeight: '600' }], // 24px
        'heading-sm': ['1.25rem', { lineHeight: '1.75rem', fontWeight: '500' }], // 20px
        'heading-xs': ['1.125rem', { lineHeight: '1.5rem', fontWeight: '500' }], // 18px
        // Body Sizes
        'body-lg': ['1.125rem', { lineHeight: '1.75rem', fontWeight: '400' }], // 18px
        'body-md': ['1rem', { lineHeight: '1.5rem', fontWeight: '400' }], // 16px
        'body-sm': ['0.875rem', { lineHeight: '1.25rem', fontWeight: '400' }], // 14px
        // Caption Sizes
        'caption-md': ['0.875rem', { lineHeight: '1.25rem', fontWeight: '400' }], // 14px
        'caption-sm': ['0.75rem', { lineHeight: '1rem', fontWeight: '400' }], // 12px
        // Data Sizes
        'data-md': ['0.875rem', { lineHeight: '1.25rem', fontWeight: '400' }], // 14px
        'data-sm': ['0.75rem', { lineHeight: '1rem', fontWeight: '400' }], // 12px
      },
      boxShadow: {
        'subtle': '0 1px 3px rgba(0, 0, 0, 0.1)',
        'medium': '0 4px 6px rgba(0, 0, 0, 0.1)',
        'elevated': '0 10px 25px rgba(0, 0, 0, 0.15)',
      },
      animation: {
        'fade-in': 'fadeIn 300ms cubic-bezier(0.4, 0, 0.2, 1)',
        'slide-up': 'slideUp 300ms cubic-bezier(0.4, 0, 0.2, 1)',
        'pulse-subtle': 'pulseSubtle 2s cubic-bezier(0.4, 0, 0.2, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      transitionDuration: {
        'fast': '200ms',
        'medium': '300ms',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderRadius: {
        'xl': '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      backdropBlur: {
        'xs': '2px',
      },
    },
  },
  plugins: [
    // Add any additional plugins here
  ],
}

import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
        		// Enhanced cyberpunk theme colors
				cyber: {
					'black': '#0a0a0f',
					'dark': '#1A1F2C',
					'purple': '#8B5CF6',
					'blue': '#1EAEDB',
					'pink': '#EC4899',
					'neon': '#39FF14'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'glow': {
					'0%, 100%': {
						textShadow: '0 0 10px #8B5CF6, 0 0 20px #8B5CF6, 0 0 30px #8B5CF6'
					},
					'50%': {
						textShadow: '0 0 20px #8B5CF6, 0 0 40px #8B5CF6, 0 0 60px #8B5CF6'
					}
				},
				'float': {
					'0%, 100%': { 
						transform: 'translateY(0px) scale(1)' 
					},
					'33%': { 
						transform: 'translateY(-15px) scale(1.05)' 
					},
					'66%': { 
						transform: 'translateY(5px) scale(0.95)' 
					}
				},
				'gradient-x': {
					'0%, 100%': {
						'background-position': '0% 50%'
					},
					'50%': {
						'background-position': '100% 50%'
					}
				},
				'pulse-neon': {
					'0%, 100%': { 
						boxShadow: '0 0 10px #39FF14, 0 0 20px #39FF14, 0 0 30px #8B5CF6' 
					},
					'50%': { 
						boxShadow: '0 0 20px #39FF14, 0 0 40px #39FF14, 0 0 60px #8B5CF6' 
					}
				},
				'divine-shimmer': {
					'0%': {
						backgroundPosition: '-200% 0'
					},
					'100%': {
						backgroundPosition: '200% 0'
					}
				},
				'ethereal-glow': {
					'0%, 100%': {
						filter: 'brightness(1) saturate(1)',
						transform: 'scale(1)'
					},
					'50%': {
						filter: 'brightness(1.2) saturate(1.3)',
						transform: 'scale(1.02)'
					}
				},
				'celestial-orbit': {
					'0%': {
						transform: 'rotate(0deg) translateX(100px) rotate(0deg)'
					},
					'100%': {
						transform: 'rotate(360deg) translateX(100px) rotate(-360deg)'
					}
				},
				'mystical-breathe': {
					'0%, 100%': {
						opacity: 0.4,
						transform: 'scale(1)'
					},
					'50%': {
						opacity: 0.8,
						transform: 'scale(1.1)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'glow': 'glow 4s ease-in-out infinite',
				'float': 'float 8s ease-in-out infinite',
				'gradient-x': 'gradient-x 15s ease infinite',
				'pulse-neon': 'pulse-neon 3s infinite',
				'divine-shimmer': 'divine-shimmer 3s linear infinite',
				'ethereal-glow': 'ethereal-glow 5s ease-in-out infinite',
				'celestial-orbit': 'celestial-orbit 20s linear infinite',
				'mystical-breathe': 'mystical-breathe 6s ease-in-out infinite'
			},
			backgroundImage: {
				'cyber-grid': 'linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)',
				'neon-glow': 'radial-gradient(circle, rgba(139, 92, 246, 0.4) 0%, rgba(236, 72, 153, 0.2) 50%, rgba(0, 0, 0, 0) 100%)',
				'divine-gradient': 'conic-gradient(from 0deg, #8B5CF6, #EC4899, #1EAEDB, #39FF14, #8B5CF6)',
				'ethereal-shimmer': 'linear-gradient(45deg, transparent 30%, rgba(139, 92, 246, 0.2) 50%, transparent 70%)'
			},
			spacing: {
				'18': '4.5rem',
				'88': '22rem',
				'128': '32rem'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;

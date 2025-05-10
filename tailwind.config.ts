import type { Config } from "tailwindcss";

export default {
	plugins: [require("@tailwindcss/typography")],
	theme: {
		extend: {
			colors: {
				brand: {
					primary: {
						600: "#1869CC",  // From tokens.json
						900: "#0A1D37",  // From tokens.json
					},
					accent: {
						500: "#C0FF33",  // From tokens.json
					}
				},
				neutral: {
					'000': '#FFFFFF',  // From tokens.json
					'050': '#F8F9FA',  // From tokens.json
					700: '#495057',    // From tokens.json
				},
				feedback: {
					error: {
						500: '#E02424',  // From tokens.json
					},
					success: {
						500: '#26A269',  // From tokens.json
					}
				}
			},
			borderRadius: {
				'none': '0',
				'xs': '2px',
				'sm': '4px',
				'md': '6px',
				'lg': '8px',
				'pill': '50rem',
				'circle': '50%',
			},
			typography: () => ({
				DEFAULT: {
					css: {
						a: {
							textUnderlineOffset: "2px",
							"&:hover": {
								"@media (hover: hover)": {
									textDecorationColor: "var(--color-link)",
									textDecorationThickness: "2px",
								},
							},
						},
						blockquote: {
							borderLeftWidth: "0",
						},
						code: {
							border: "1px dotted #495057", // Neutral-700
							borderRadius: "2px",
						},
						kbd: {
							"&:where([data-theme='dark'], [data-theme='dark'] *)": {
								background: "var(--color-global-text)",
							},
						},
						hr: {
							borderTopStyle: "dashed",
						},
						strong: {
							fontWeight: "700",
						},
						sup: {
							marginInlineStart: "calc(var(--spacing) * 0.5)",
							a: {
								"&:after": {
									content: "']'",
								},
								"&:before": {
									content: "'['",
								},
								"&:hover": {
									"@media (hover: hover)": {
										color: "var(--color-link)",
									},
								},
							},
						},
						/* Table */
						"tbody tr": {
							borderBottomWidth: "none",
						},
						tfoot: {
							borderTop: "1px dashed #495057", // Neutral-700
						},
						thead: {
							borderBottomWidth: "none",
						},
						"thead th": {
							borderBottom: "1px dashed #495057", // Neutral-700
							fontWeight: "700",
						},
						'th[align="center"], td[align="center"]': {
							"text-align": "center",
						},
						'th[align="right"], td[align="right"]': {
							"text-align": "right",
						},
						'th[align="left"], td[align="left"]': {
							"text-align": "left",
						},
					},
				},
				sm: {
					css: {
						code: {
							fontSize: "var(--text-sm)",
							fontWeight: "400",
						},
					},
				},
			}),
		},
	},
} satisfies Config;

/**
 * -----------------------------------------------------------
 *  Project: Personal Portfolio / Link Hub Configuration
 *  File: layout.tsx
 *  Author: Yoan Gilliand
 *
 *  Description:
 *  Root layout for the Next.js application. This file sets up:
 *  - Global fonts and global CSS
 *  - Metadata generation (SEO, OpenGraph, Twitter cards)
 *  - Site-level metadata automatically populated from DATA
 *  - HTML structure and theme-color settings
 *
 *  Edit the DATA object in data.ts to update:
 *  - Name, title, bio, avatar, and link metadata
 *  - Social profile metadata (Twitter/X, etc.)
 *  - The canonical URL and OG/Twitter image
 *
 *  MIT License
 *  Copyright (c) 2025 Yoan Gilliand
 * -----------------------------------------------------------
 */

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { DATA } from "./data";

/* -----------------------------------------------------------
 * FONT SETUP
 * These fonts get loaded globally and are applied to the <body>.
 * You can swap these for any Next.js-supported Google Font.
 * ----------------------------------------------------------- */
const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

/* -----------------------------------------------------------
 * BASE URL EXTRACTION
 * Used for:
 * - Canonical URLs
 * - OpenGraph URL preview
 * - Metadata base path
 *
 * Pulls the URL from:
 *   1. The "portfolio" link (preferred)
 *   2. The first link in the list (fallback)
 * ----------------------------------------------------------- */
const siteUrl =
	DATA.links.find((link) => link.id === "portfolio")?.url || DATA.links[0]?.url;

/* -----------------------------------------------------------
 * TWITTER/X HANDLE EXTRACTION
 * Automatically extracts the username from your socials list.
 * Falls back to your DATA.handle if not found.
 * ----------------------------------------------------------- */
const twitterHandle = DATA.socials
	.find((s) => s.name === "Twitter" || s.name === "X")
	?.url.split("/")
	.pop();

/* -----------------------------------------------------------
 * METADATA CONFIGURATION
 * All major SEO fields are generated dynamically from DATA.
 * You can edit keywords, OG images, icons, etc., below.
 * ----------------------------------------------------------- */
export const metadata: Metadata = {
	metadataBase: new URL(siteUrl),

	title: {
		default: `${DATA.name} | ${DATA.title}`,
		template: `%s | ${DATA.name}`,
	},

	description: DATA.bio,

	// 🔥 EXPANDED SEO KEYWORDS (you can add/remove freely)
	keywords: [
		"Yoan Gilliand",
		"Creative Developer",
		"Frontend Developer Switzerland",
		"React Developer Switzerland",
		"Next.js Developer",
		"Senior Frontend Engineer",
		"UI Engineer",
		"Full Stack Developer",
		"Web Developer",
		"Freelance Developer Switzerland",
		"Swiss Web Developer",
		"Portfolio Developer",
		"UI/UX Specialist",
		"Digital Product Designer",
		"Web Performance Expert",
		"Accessibility Specialist",
		"React Performance Optimization",
		"TypeScript Developer",
		"Creative Coding",
		"Modern Web Animations",
		"Frontend Architecture",
		"Motion UI Developer",
		"High-End Web Experiences",
		"Pixel Perfect Development",
		"3D & Interactive Websites",
		"GSAP Developer",
		"Framer Motion Developer",
		"Next.js SEO Developer",
		"Jamstack Developer",
		"Web Accessibility WCAG",
		"Responsive Design Expert",
	],

	authors: [{ name: DATA.name, url: siteUrl }],
	creator: DATA.name,
	publisher: DATA.name,

	formatDetection: { email: false, address: false, telephone: false },

	// OpenGraph metadata for rich link previews
	openGraph: {
		type: "website",
		locale: "en_US",
		url: siteUrl,
		title: `${DATA.name} | ${DATA.title}`,
		description: DATA.bio,
		siteName: DATA.name,
		images: [
			{
				url: DATA.avatarUrl,
				width: 1200,
				height: 630,
				alt: `${DATA.name} - ${DATA.title}`,
				type: "image/png",
			},
		],
	},

	// Twitter card metadata
	twitter: {
		card: "summary_large_image",
		title: `${DATA.name} | ${DATA.title}`,
		description: DATA.bio,
		creator: twitterHandle ? `@${twitterHandle}` : DATA.handle,
		images: [DATA.avatarUrl],
	},

	// Robots configuration (SEO crawling rules)
	robots: {
		index: true,
		follow: true,
		nocache: false,
		googleBot: {
			index: true,
			follow: true,
			noimageindex: false,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},

	// Favicon, touch icon, and shortcut icon
	icons: {
		icon: [{ url: DATA.avatarUrl, type: "image/png" }],
		shortcut: DATA.avatarUrl,
		apple: [{ url: DATA.avatarUrl, sizes: "180x180", type: "image/png" }],
	},

	// Canonical URL
	alternates: {
		canonical: siteUrl,
	},
};

/* -----------------------------------------------------------
 * ROOT LAYOUT COMPONENT
 * Wraps your entire application.
 * - Adds theme color meta tags for light/dark mode
 * - Injects global fonts
 * - Provides base HTML structure
 * ----------------------------------------------------------- */
export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={`${geistSans.variable} ${geistMono.variable}`}>
				<ThemeProvider
					attribute="class"
					defaultTheme={DATA.defaultTheme || "dark"}
					enableSystem={false}
				>
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}

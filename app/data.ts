/**
 * -----------------------------------------------------------
 *  Project: Personal Portfolio / Link Hub Configuration
 *  File: data.ts
 *  Author: Yoan Gilliand
 *
 *  Description:
 *  This file stores all personal data, links, and social profiles
 *  displayed in the portfolio application. Edit the DATA object
 *  below to update name, avatar, links, socials, and related UI text.
 *
 *  MIT License
 *  Copyright (c) 2025 Yoan Gilliand
 * -----------------------------------------------------------
 */

import { FileUser, Github, Linkedin, Mail, Palette } from "lucide-react";

/**
 * MAIN DATA OBJECT
 * Edit any field to customize your personal information.
 */
export const DATA = {
	name: "Yoan Gilliand", // Your full name
	initials: "YG", // Initials shown in some UI components
	handle: "@yoan-gilliand", // Your handle or username
	title: "Software Engineering Student • Founder of TypstMe", // Your job title or role
	avatarUrl: "https://i.ibb.co/35K3gYrm/1755208886012-copy.jpg", // Profile image URL
	bio: "Building polished digital experiences. Obsessed with performance, accessibility, and pixel-perfect design.", // Short description about you
	location: "Switzerland", // Your location
	defaultTheme: "dark", // Default website theme (light or dark)

	/**
	 * MAIN LINKS
	 * These links appear as primary actions in your portfolio or link hub.
	 * - id: Unique identifier
	 * - title: Displayed name of the link
	 * - url: Destination URL
	 * - subtitle: Smaller text below the title
	 * - icon: Icon component imported above
	 *
	 * To add a new link, simply copy one object and modify its fields.
	 */
	links: [
		{
			id: "typstme",
			title: "TypstMe",
			url: "https://typstme.ch",
			subtitle:
				"Create a polished, ATS-optimized CV with real-time Typst editing",
			icon: FileUser,
		},
		{
			id: "portfolio",
			title: "My Portfolio",
			url: "https://yoan-gilliand.ch",
			subtitle: "Learn more about who I am and explore my projects",
			icon: Palette,
		},
		{
			id: "github",
			title: "GitHub",
			url: "https://github.com/yoan-gilliand",
			subtitle: "Check out my open source code",
			icon: Github,
		},
		{
			id: "linkedin",
			title: "LinkedIn",
			url: "https://linkedin.com/in/yoan-gilliand",
			subtitle: "Connect professionally",
			icon: Linkedin,
		},
	],

	/**
	 * FOOTER SOCIALS
	 * These are typically shown in the footer or smaller UI sections.
	 * - name: Social platform name
	 * - url: Link to your profile or email
	 * - icon: Icon displayed in the UI
	 *
	 * Add or remove items as needed.
	 */
	socials: [
		{ name: "Email", url: "mailto:contact@yoan-gilliand.ch", icon: Mail },
		{ name: "GitHub", url: "https://github.com/yoan-gilliand", icon: Github },
		{
			name: "LinkedIn",
			url: "https://linkedin.com/in/yoan-gilliand",
			icon: Linkedin,
		},
	],
};

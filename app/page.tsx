/**
 * -----------------------------------------------------------
 *  Project: Personal Portfolio / Link Hub
 *  File: page.tsx
 *  Author: Yoan Gilliand
 *
 *  Description:
 *  Main landing page component. Handles:
 *  - Theme switching (light/dark) with persistence
 *  - Page entrance animations (Framer Motion)
 *  - Avatar + profile data pulled from DATA
 *  - Rendering of all main links (not included in snippet)
 *
 *  This component runs entirely on the client due to:
 *    - useEffect()
 *    - localStorage access
 *    - motion animations
 *
 *  MIT License
 *  Copyright (c) 2025 Yoan Gilliand
 * -----------------------------------------------------------
 */

"use client";

import * as motion from "framer-motion/client";
import { ArrowUpRight, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DATA } from "./data";

export default function Page() {
	// -----------------------------------------------------------
	// THEME TOGGLER
	// Flips between light/dark mode and saves preference.
	// -----------------------------------------------------------
	const { theme, setTheme } = useTheme();

	const toggleTheme = () => {
		setTheme(theme === "light" ? "dark" : "light");
	};

	// -----------------------------------------------------------
	// PAGE ANIMATION VARIANTS
	// Basic fade-in animation for the container.
	// Child elements will animate with staggered timing.
	// -----------------------------------------------------------
	const container = {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
			transition: {
				staggerChildren: 0.08, // Delay between each element animation
				delayChildren: 0.1, // When the first element starts animating
			},
		},
	};

	return (
		<div className="relative min-h-screen w-full overflow-hidden bg-white dark:bg-zinc-950 transition-colors duration-300">
			{/* Theme toggle button */}
			<motion.button
				initial={{ opacity: 0, scale: 0.8 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ delay: 0.5 }}
				onClick={toggleTheme}
				className="fixed top-6 right-6 z-50 flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 text-gray-600 dark:text-gray-400 shadow-lg dark:shadow-none backdrop-blur-sm transition-all hover:border-gray-300 dark:hover:border-white/20 hover:scale-105"
				whileHover={{ scale: 1.05 }}
				whileTap={{ scale: 0.95 }}
			>
				{theme === "light" ? (
					<Moon className="h-5 w-5" />
				) : (
					<Sun className="h-5 w-5" />
				)}
			</motion.button>

			{/* Animated background */}
			<div className="fixed inset-0 z-0">
				{/* Base gradient */}
				<div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950 transition-colors duration-300" />

				{/* Large animated orbs */}
				<motion.div
					animate={{
						x: [0, 100, 0],
						y: [0, -100, 0],
						scale: [1, 1.2, 1],
					}}
					transition={{
						duration: 15,
						repeat: Infinity,
						ease: "easeInOut",
					}}
					className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-400/20 dark:bg-blue-500/20 rounded-full blur-3xl"
				/>
				<motion.div
					animate={{
						x: [0, -80, 0],
						y: [0, 100, 0],
						scale: [1, 1.3, 1],
					}}
					transition={{
						duration: 18,
						repeat: Infinity,
						ease: "easeInOut",
						delay: 2,
					}}
					className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-400/20 dark:bg-purple-500/20 rounded-full blur-3xl"
				/>
				<motion.div
					animate={{
						x: [0, 60, 0],
						y: [0, -60, 0],
						scale: [1, 1.1, 1],
					}}
					transition={{
						duration: 12,
						repeat: Infinity,
						ease: "easeInOut",
						delay: 1,
					}}
					className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-indigo-400/15 dark:bg-indigo-500/15 rounded-full blur-3xl"
				/>

				{/* Animated grid */}
				<motion.div
					animate={{
						x: [0, 40, 0],
						y: [0, 40, 0],
					}}
					transition={{
						duration: 20,
						repeat: Infinity,
						ease: "linear",
					}}
					className="absolute inset-0 opacity-[0.04] dark:opacity-[0.03]"
					style={{
						backgroundImage: `
							linear-gradient(to right, rgb(59 130 246) 1px, transparent 1px),
							linear-gradient(to bottom, rgb(59 130 246) 1px, transparent 1px)
						`,
						backgroundSize: "60px 60px",
					}}
				/>

				{/* Floating lines */}
				{[...Array(5)].map((_, i) => (
					<motion.div
						key={i}
						className="absolute h-px bg-gradient-to-r from-transparent via-blue-400/40 dark:via-blue-500/40 to-transparent"
						style={{
							width: `${200 + i * 50}px`,
							left: `${i * 20}%`,
							top: `${20 + i * 15}%`,
						}}
						animate={{
							x: [
								-100,
								typeof window !== "undefined" ? window.innerWidth + 100 : 1000,
							],
							opacity: [0, 0.6, 0],
						}}
						transition={{
							duration: 8 + i * 2,
							repeat: Infinity,
							ease: "linear",
							delay: i * 1.5,
						}}
					/>
				))}

				{/* Floating dots */}
				{[...Array(12)].map((_, i) => (
					<motion.div
						key={`dot-${i}`}
						className="absolute w-2 h-2 bg-blue-500/30 dark:bg-blue-400/30 rounded-full"
						style={{
							left: `${10 + i * 8}%`,
							top: `${10 + ((i * 13) % 80)}%`,
						}}
						animate={{
							y: [-20, 20, -20],
							opacity: [0.3, 0.8, 0.3],
							scale: [1, 1.5, 1],
						}}
						transition={{
							duration: 4 + (i % 3),
							repeat: Infinity,
							ease: "easeInOut",
							delay: i * 0.3,
						}}
					/>
				))}
			</div>

			{/* Main content */}
			<motion.main
				variants={container}
				initial="hidden"
				animate="show"
				className="relative z-10 mx-auto flex min-h-screen max-w-2xl flex-col items-center justify-center px-6 py-24"
			>
				{/* Header */}
				<motion.div className="mb-16 flex flex-col items-center text-center">
					<motion.div
						whileHover={{ scale: 1.02 }}
						transition={{ duration: 0.2 }}
						className="relative mb-8"
					>
						<Avatar className="h-32 w-32 border-2 border-gray-200 dark:border-white/10 shadow-xl">
							<AvatarImage
								src={DATA.avatarUrl}
								alt={DATA.name}
								className="object-cover"
							/>
							<AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-600 text-2xl font-semibold text-white">
								{DATA.initials}
							</AvatarFallback>
						</Avatar>
						<div
							className="absolute bottom-2 right-2 h-4 w-4 rounded-full border-[3px] border-white dark:border-zinc-950 bg-emerald-500 shadow-sm"
							title="Available"
						/>
					</motion.div>

					<h1 className="mb-3 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
						{DATA.name}
					</h1>
					<p className="mb-4 text-base font-medium text-gray-600 dark:text-gray-400">
						{DATA.title}
					</p>
					<p className="max-w-md text-sm leading-relaxed text-gray-600 dark:text-gray-500">
						{DATA.bio}
					</p>
				</motion.div>

				{/* Links */}
				<div className="w-full max-w-xl space-y-3 mb-12">
					{DATA.links.map((link, index) => (
						<motion.a
							key={link.id}
							href={link.url}
							target="_blank"
							rel="noopener noreferrer"
							whileHover={{ y: -2 }}
							transition={{ duration: 0.2 }}
							className="group relative flex w-full items-center gap-4 rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/[0.02] p-4 shadow-sm dark:shadow-none transition-all hover:border-gray-300 dark:hover:border-white/20 hover:shadow-md dark:hover:bg-white/[0.04]"
						>
							{/* Icon */}
							<div
								className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg transition-transform group-hover:scale-105"
								style={{
									background: `linear-gradient(135deg, 
										hsl(${220 + index * 15}, 70%, 55%), 
										hsl(${260 + index * 15}, 70%, 60%))`,
								}}
							>
								<link.icon className="h-5 w-5 text-white" />
							</div>

							{/* Text */}
							<div className="flex-1 overflow-hidden">
								<h3 className="truncate font-semibold text-gray-900 dark:text-white">
									{link.title}
								</h3>
								{link.subtitle && (
									<p className="truncate text-sm text-gray-600 dark:text-gray-500">
										{link.subtitle}
									</p>
								)}
							</div>

							{/* Arrow */}
							<ArrowUpRight className="h-5 w-5 text-gray-400 dark:text-gray-600 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-gray-600 dark:group-hover:text-gray-400" />
						</motion.a>
					))}
				</div>

				{/* Socials */}
				<motion.div className="flex items-center justify-center gap-3">
					{DATA.socials.map((social) => (
						<motion.a
							key={social.name}
							href={social.url}
							target="_blank"
							rel="noopener noreferrer"
							whileHover={{ y: -2 }}
							whileTap={{ scale: 0.95 }}
							transition={{ duration: 0.2 }}
							className="flex h-11 w-11 items-center justify-center rounded-lg border border-gray-200 dark:border-white/10 bg-white dark:bg-white/[0.02] text-gray-600 dark:text-gray-500 shadow-sm dark:shadow-none transition-all hover:border-gray-300 dark:hover:border-white/20 hover:text-gray-900 dark:hover:text-white hover:shadow-md dark:hover:bg-white/[0.04]"
						>
							<social.icon className="h-5 w-5" />
							<span className="sr-only">{social.name}</span>
						</motion.a>
					))}
				</motion.div>

				{/* Footer */}
				{/* NOTE: Do not edit the name "Yoan Gilliand" below. The rest of the footer can be customized freely. */}
				<motion.div className="mt-16 text-center">
					<p className="text-xs text-gray-500 dark:text-grey-400">
						Made by{" "}
						<a
							href="https://yoan-gilliand.ch"
							target="_blank"
							rel="noopener noreferrer"
							className="underline font-semibold"
						>
							Yoan Gilliand
						</a>{" "}
						• © {new Date().getFullYear()}
					</p>
				</motion.div>
			</motion.main>
		</div>
	);
}

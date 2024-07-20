"use client";

import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Menu = () => {
	const [isOpen, setIsOpen] = useState(false);
	const navRef = useRef(null);
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);
	const aboutRef = useRef(null);
	const dropdownIconRef = useRef(null);

	const handleAboutHover = () => {
		setIsDropdownOpen(true);
	};

	const handleAboutLeave = () => {
		setIsDropdownOpen(false);
	};

	const iconVariants = {
		open: {
			rotate: 180,
			transition: {
				duration: 0.3,
				ease: "easeInOut",
			},
		},
		closed: {
			rotate: 0,
			transition: {
				duration: 0.3,
				ease: "easeInOut",
			},
		},
	};

	const dropdownVariants = {
		open: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.3,
				ease: "easeInOut",
				staggerChildren: 0.1,
			},
		},
		closed: {
			opacity: 0,
			y: -10,
			transition: {
				duration: 0.3,
				ease: "easeInOut",
			},
		},
	};

	const itemVariants = {
		open: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.3,
				ease: "easeInOut",
			},
		},
		closed: {
			opacity: 0,
			y: 10,
			transition: {
				duration: 0.3,
				ease: "easeInOut",
			},
		},
	};

	const navVariants = {
		hidden: { opacity: 0, y: -20, transition: { duration: 0.3 } },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.3, staggerChildren: 0.1 },
		},
		hover: { scale: 1.1, transition: { duration: 0.2 } },
		slideIn: {
			x: 0,
			opacity: 1,
			transition: {
				duration: 0.5,
				ease: "easeInOut",
			},
		},
		slideOut: {
			x: "-100%",
			opacity: 0,
			transition: {
				duration: 0.3,
				ease: "easeInOut",
			},
		},
		menuToClose: {
			rotate: 90,
			transition: {
				duration: 0.3,
				ease: "easeInOut",
			},
		},
		resetRotate: {
			rotate: 0,
			transition: {
				duration: 0.3,
				ease: "easeInOut",
			},
		},
	};

	const handleLinkClick = () => {
		setIsOpen(false);
		setIsDropdownOpen(false);
	};

	const pathname = usePathname();

	return (
		<nav ref={navRef} className="">
			<motion.div
				className="sticky top-0 z-30 rounded-full border border-gray-200 bg-white flex items-center justify-between px-4 py-4 tablet:py-2 tablet:px-6 tablet:h-16"
				variants={navVariants}
				initial="hidden"
				animate="visible"
			>
				<motion.button
					onClick={() => setIsOpen((prev) => !prev)}
					className="cursor-pointer focus:outline-none"
					aria-expanded={isOpen}
					aria-label="Toggle Menu"
					variants={navVariants}
					initial="resetRotate"
					animate={isOpen ? "menuToClose" : "resetRotate"}
				>
					{/* Close Icon - Only show when menu is open */}
					<svg
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
						id="Close--Streamline-Ultimate"
						height="15"
						width="15"
						className={`w-6 h-6 transition-transform duration-300 ease-in-out ${isOpen ? "block" : "hidden"}
            `}
					>
						<desc>Close Streamline Icon: https://streamlinehq.com</desc>
						<path
							d="m0.5 0.499 23 23"
							fill="none"
							stroke="#000000"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="1"
						></path>
						<path
							d="m23.5 0.499 -23 23"
							fill="none"
							stroke="#000000"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="1"
						></path>
					</svg>

					{/* Menu Icon - Show when menu is closed */}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						id="Menu--Streamline-Platinum"
						height="15"
						width="15"
						className={`w-6 h-6 transition-transform duration-300 ease-in-out ${!isOpen ? "block" : "hidden"}
            `}
					>
						<desc>Menu Streamline Icon: https://streamlinehq.com</desc>
						<g id="menu">
							<path
								id="Vector 2814"
								stroke="#000000"
								d="M0 4.5h24M0 12h24M0 19.5h24"
								stroke-width="1"
							></path>
						</g>
					</svg>
				</motion.button>
			</motion.div>

			{/* Menu content */}
			<motion.div
				initial={false}
				animate={isOpen ? "slideIn" : "slideOut"}
				className="absolute bg-white text-sudo2 text-start border-b border-zinc-200 font-medium left-0 top-20 w-full h-[calc(100vh-80px)] flex flex-col items-start justify-start px-4 gap-8 z-10 shadow-md"
				variants={navVariants}
			>
				<motion.ul
					variants={navVariants}
					className="flex flex-col items-start w-[240px] mobile:w-[280px] font-medium justify-center mobile:text-2xl mobile:gap-5 mt-6 gap-1"
				>
					<motion.li whileHover="hover" className="hover:text-orange p-2 rounded-md">
						<Link
							href="/"
							onClick={handleLinkClick}
							className={`border-b border-zinc-200  ${pathname === "/" ? "text-orange" : ""
								}`}
						>
							Home
						</Link>
					</motion.li>
					<motion.div
						ref={aboutRef}
						className="hover:text-orange flex items-center"
						onMouseEnter={handleAboutHover}
						onMouseLeave={handleAboutLeave}
					>
						<Link
							href="/about"
							className={`border-b border-zinc-200 p-2 hover:text-orange font-medium text-gray-800 flex items-center ${pathname === "/about" ? "text-orange" : "text-gray-800"
								}`}
							onClick={handleLinkClick}
						>
							About Us{" "}
							<motion.svg
								ref={dropdownIconRef}
								className="ml-2 transition-transform duration-200 ease-in-out transform origin-center"
								width="20"
								height="20"
								viewBox="0 0 15 15"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								variants={iconVariants}
								initial="closed"
								animate={isDropdownOpen ? "open" : "closed"}
							>
								<path
									d="M4.18179 6.18181C4.35753 6.00608 4.64245 6.00608 4.81819 6.18181L7.49999 8.86362L10.1818 6.18181C10.3575 6.00608 10.6424 6.00608 10.8182 6.18181C10.9939 6.35755 10.9939 6.64247 10.8182 6.81821L7.81819 9.81821C7.73379 9.9026 7.61934 9.95001 7.49999 9.95001C7.38064 9.95001 7.26618 9.9026 7.18179 9.81821L4.18179 6.81821C4.00605 6.64247 4.00605 6.35755 4.18179 6.18181Z"
									fill="currentColor"
									fill-rule="evenodd"
									clip-rule="evenodd"
								/>
							</motion.svg>
						</Link>
						<AnimatePresence>
							{isDropdownOpen && (
								<motion.ul
									variants={dropdownVariants}
									initial="closed"
									animate="open"
									exit="closed"
									className="absolute flex flex-col text-sm justify-center items-start px-4 py-4 bg-white rounded-lg shadow-md border border-gray-200"
									style={{ top: "70px", right: "0px" }}
								>
									<motion.li
										variants={itemVariants}
										initial="closed"
										animate="open"
										exit="closed"
										className="hover:bg-gray-100 rounded-md px-2 py-2 text-gray-800 hover:text-orange"
										role="menuitem"
									>
										<Link
											href="/about"
											role="menuitem"
											onClick={handleLinkClick}
											className={`border-b border-zinc-200 ${pathname === "/about" ? "text-orange" : ""
												}`}
										>
											Our Story
										</Link>
									</motion.li>
									<motion.li
										variants={itemVariants}
										initial="closed"
										animate="open"
										exit="closed"
										className="hover:bg-gray-100 rounded-md px-2 py-2 text-gray-800 hover:text-orange"
										role="menuitem"
									>
										<Link
											href="/team"
											role="menuitem"
											onClick={handleLinkClick}
											className={`border-b border-zinc-200 ${pathname === "/team" ? "text-orange" : ""
												}`}
										>
											Our Team
										</Link>
									</motion.li>
									<motion.li
										variants={itemVariants}
										initial="closed"
										animate="open"
										exit="closed"
										className="hover:bg-gray-100 rounded-md px-2 py-2 text-gray-800 hover:text-orange"
										role="menuitem"
									>
										<Link
											href="/mission"
											role="menuitem"
											onClick={handleLinkClick}
											className={`border-b border-zinc-200 ${pathname === "/mission" ? "text-orange" : ""
												}`}
										>
											Our Mission
										</Link>
									</motion.li>
								</motion.ul>
							)}
						</AnimatePresence>
					</motion.div>
					<motion.li whileHover="hover" className="hover:text-orange p-2 rounded-md">
						<Link
							href="/academics"
							onClick={handleLinkClick}
							className={`border-b border-zinc-200 ${pathname === "/academics" ? "text-orange" : ""
								}`}
						>
							Academics
						</Link>
					</motion.li>
					<motion.li whileHover="hover" className="hover:text-orange p-2 rounded-md">
						<Link
							href="/admissions"
							onClick={handleLinkClick}
							className={`border-b border-zinc-200 ${pathname === "/admissions" ? "text-orange" : ""
								}`}
						>
							Admissions
						</Link>
					</motion.li>
					<motion.li whileHover="hover" className="hover:text-orange p-2 rounded-md">
						<Link
							href="/learnings"
							onClick={handleLinkClick}
							className={`border-b border-zinc-200 ${pathname === "/learnings" ? "text-orange" : ""
								}`}
						>
							Learnings
						</Link>
					</motion.li>
					<motion.li whileHover="hover" className="hover:text-orange p-2 rounded-md">
						<Link
							href="/news-events"
							onClick={handleLinkClick}
							className={`border-b border-zinc-200 ${pathname === "/news-events" ? "text-orange" : ""
								}`}
						>
							News & Events
						</Link>
					</motion.li>
				</motion.ul>
			</motion.div>
		</nav>
	);
};

export default Menu;
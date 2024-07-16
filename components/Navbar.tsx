"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Menu from "./Menu";
import dynamic from "next/dynamic";
import { motion, AnimatePresence } from "framer-motion";

const NavIcons = dynamic(() => import("./NavIcons"), { ssr: false });

const Navbar = () => {
	const navRef = useRef<HTMLDivElement>(null);
	const [showDropdown, setShowDropdown] = useState(false);
	const aboutRef = useRef<HTMLDivElement>(null);
	const dropdownIconRef = useRef<SVGSVGElement>(null);

	const handleAboutHover = () => {
		setShowDropdown(true);
	};

	const handleAboutLeave = () => {
		setShowDropdown(false);
	};

	const iconVariants = {
		open: {
			rotate: 180,
			transition: {
				duration: 0.3, // Adjust duration
				ease: "easeInOut", // Adjust easing
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
				staggerChildren: 0.1, // Stagger effect for children (dropdown items)
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

	return (
		<nav
			ref={navRef}
			className={`bg-transparent px-4 tablet:px-8 laptop:px-16 desktop:px-32 2xl:px-64 fixed top-0 z-20 w-full`}>
			<div className='h-full flex justify-between items-center'>
				<div className='mr-8'>
					<Link href='/' className='flex items-center gap-3'>
						<Image src='/logo.svg' alt='School Logo' width={85} height={85} />
					</Link>
				</div>
				<div className='flex items-center'>
					{/* Wrap the links in a flex container */}
					<div
						className={`hidden bg-white tablet:flex space-x-8 text-sm font-medium border border-gray-200 rounded-lg px-4 py-2`}>
						<div className='flex space-x-8'>
							<Link
								href='/'
								className='text-sm font-medium text-sudo2 hover:text-orange'>
								Home
							</Link>
							<motion.div
								ref={aboutRef}
								className='hover:text-orange flex items-center'
								onMouseEnter={handleAboutHover}
								onMouseLeave={handleAboutLeave}>
								<Link
									href='/about'
									className='text-sm hover:text-orange font-medium text-sudo2 flex items-center'>
									About Us{" "}
									<motion.svg
										ref={dropdownIconRef}
										className='ml-2 transition-transform duration-200 ease-in-out transform origin-center'
										width='20'
										height='20'
										viewBox='0 0 15 15'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
										variants={iconVariants}
										initial='closed'
										animate={showDropdown ? "open" : "closed"}>
										<path
											d='M4.18179 6.18181C4.35753 6.00608 4.64245 6.00608 4.81819 6.18181L7.49999 8.86362L10.1818 6.18181C10.3575 6.00608 10.6424 6.00608 10.8182 6.18181C10.9939 6.35755 10.9939 6.64247 10.8182 6.81821L7.81819 9.81821C7.73379 9.9026 7.61934 9.95001 7.49999 9.95001C7.38064 9.95001 7.26618 9.9026 7.18179 9.81821L4.18179 6.81821C4.00605 6.64247 4.00605 6.35755 4.18179 6.18181Z'
											fill='currentColor'
											fill-rule='evenodd'
											clip-rule='evenodd'
										/>
									</motion.svg>
								</Link>
								{/* Dropdown Menu Outside of Navigation Links */}
								<AnimatePresence>
									{showDropdown && (
										<motion.ul
											variants={dropdownVariants} // Apply variants to the dropdown
											initial='closed'
											animate='open'
											exit='closed'
											className='absolute flex justify-center items-center px-6 py-4 gap-6 bg-white rounded-lg shadow-md border border-gray-200'
											style={{ top: "70px", maxWidth: "500px" }}>
											<motion.li
												variants={itemVariants} // Apply variants to dropdown items
												initial='closed'
												animate='open'
												exit='closed'
												className='hover:bg-gray-100 rounded-md px-2 py-2 text-sudo hover:text-orange'
												role='menuitem'>
												<Link href='/about' role='menuitem'>
													Our Story
												</Link>
											</motion.li>
											<motion.li
												variants={itemVariants}
												initial='closed'
												animate='open'
												exit='closed'
												className='hover:bg-gray-100 rounded-md px-2 py-2 text-sudo hover:text-orange'
												role='menuitem'>
												<Link href='/team' role='menuitem'>
													Our Team
												</Link>
											</motion.li>
											<motion.li
												variants={itemVariants}
												initial='closed'
												animate='open'
												exit='closed'
												className='hover:bg-gray-100 rounded-md px-2 py-2 text-sudo hover:text-orange'
												role='menuitem'>
												<Link href='/mission' role='menuitem'>
													Our Mission
												</Link>
											</motion.li>
										</motion.ul>
									)}
								</AnimatePresence>
							</motion.div>
							<Link
								href='/academics'
								className='text-sm font-medium text-sudo2 hover:text-orange'>
								Academics
							</Link>
							<Link
								href='/admissions'
								className='text-sm font-medium text-sudo2 hover:text-orange'>
								Admissions
							</Link>
							<Link
								href='/learnings'
								className='text-sm font-medium text-sudo2 hover:text-orange'>
								Learnings
							</Link>
							<Link
								href='/news-events'
								className='text-sm font-medium text-sudo2 hover:text-orange'>
								News & Events
							</Link>
						</div>
					</div>
					<div className='tablet:hidden'>
						<Menu />
					</div>
					<div className='hidden tablet:flex'>
						<NavIcons />
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;

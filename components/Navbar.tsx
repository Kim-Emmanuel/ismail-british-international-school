"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Menu from "./Menu";
import dynamic from "next/dynamic";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

const NavIcons = dynamic(() => import("./NavIcons"), { ssr: false });

const Navbar = () => {
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

	const linkVariants = {
		hover: {
			scale: 1.1,
			transition: {
				duration: 0.2,
			},
		},
	};

	const pathname = usePathname();

	return (
		<nav
			ref={navRef}
			className={`bg-transparent px-4 tablet:px-2 laptop:px-16 desktop:px-32 2xl:px-64 fixed top-0 z-20 w-full`}>
			<div className='h-full flex justify-between items-center'>
				<div className='mr-8'>
					<Link href='/' className='flex items-center gap-3'>
						<Image src='/logo.svg' alt='School Logo' width={85} height={85} />
					</Link>
				</div>
				<div className='flex items-center'>
					<div
						className={`hidden bg-white tablet:flex space-x-8 text-sm font-medium border border-gray-200 rounded-lg px-4 py-2`}>
						<div className='flex space-x-8'>
							{/* Home Link */}
							<motion.div
								className='text-sm font-medium text-sudo2 hover:text-orange'
								variants={linkVariants}
								whileHover='hover'>
								<Link href='/' className={` ${pathname === "/" ? "text-orange" : ""}`}>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										viewBox='-0.5 -0.5 20 20'
										fill='currentColor'
										id='House-Thin--Streamline-Phosphor-Thin'
										height='20'
										width='20'>
										<desc>House Thin Streamline Icon: https://streamlinehq.com</desc>
										<path
											d='M18.080815625 8.289796484375 10.323271484375 0.53225234375c-0.45475312500000004 -0.456333984375 -1.193726953125 -0.456333984375 -1.648480078125 0L0.917247265625 8.289796484375c-0.2174609375 0.21873007812499998 -0.33917968750000005 0.5148406249999999 -0.33842265625 0.823271484375v9.309057421875c0 0.214225 0.173649609375 0.38788203125000004 0.38787460937499996 0.38787460937499996h6.206038281250001c0.21421015625 -0.000007421875 0.38787460937499996 -0.173664453125 0.38787460937499996 -0.38787460937499996v-5.818163671875h3.8787757812500003v5.818163671875c0 0.214225 0.173649609375 0.38788203125000004 0.38788203125000004 0.38787460937499996h6.206030859375c0.214217578125 -0.000007421875 0.38788203125000004 -0.173664453125 0.38788203125000004 -0.38787460937499996V9.11306796875c0.000244921875 -0.30870546875 -0.12219375 -0.6048605468749999 -0.3403671875 -0.823271484375Zm-0.435389453125 9.744446875H12.215144531249999v-5.8181562499999995c0 -0.21421015625 -0.173664453125 -0.3878671875 -0.38788203125000004 -0.38788203125000004H7.172737499999999c-0.214225 -0.000007421875 -0.38787460937499996 0.17365703124999998 -0.38787460937499996 0.38788203125000004v5.8181562499999995H1.35458125V9.11306796875c-0.00008164062500000001 -0.10290429687500001 0.04073125 -0.20162265625 0.11345078125 -0.274423828125L9.225576171875 1.0811c0.15151015625 -0.15168085937499998 0.3973375 -0.15168085937499998 0.54884765625 0l7.757551562500001 7.757544140625c0.07271953125 0.072801171875 0.11353242187500001 0.17151953125 0.11345078125 0.274423828125Z'
											stroke-width='1'></path>
									</svg>
								</Link>
							</motion.div>
							{/* About Us Link */}
							<motion.div
								ref={aboutRef}
								className='hover:text-orange flex items-center'
								onMouseEnter={handleAboutHover}
								onMouseLeave={handleAboutLeave}>
								<motion.div
									className='text-sm hover:text-orange font-medium text-sudo2'
									variants={linkVariants}
									whileHover='hover'>
									<Link
										href='/about'
										className={` flex items-center ${pathname.startsWith("/about") ? "text-orange" : ""
											}`}>
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
											animate={isDropdownOpen ? "open" : "closed"}>
											<path
												d='M4.18179 6.18181C4.35753 6.00608 4.64245 6.00608 4.81819 6.18181L7.49999 8.86362L10.1818 6.18181C10.3575 6.00608 10.6424 6.00608 10.8182 6.18181C10.9939 6.35755 10.9939 6.64247 10.8182 6.81821L7.81819 9.81821C7.73379 9.9026 7.61934 9.95001 7.49999 9.95001C7.38064 9.95001 7.26618 9.9026 7.18179 9.81821L4.18179 6.81821C4.00605 6.64247 4.00605 6.35755 4.18179 6.18181Z'
												fill='currentColor'
												fill-rule='evenodd'
												clip-rule='evenodd'
											/>
										</motion.svg>
									</Link>
								</motion.div>
								<AnimatePresence>
									{isDropdownOpen && (
										<motion.ul
											variants={dropdownVariants}
											initial='closed'
											animate='open'
											exit='closed'
											className='absolute flex justify-center items-center px-6 py-4 gap-6 bg-white rounded-lg shadow-md border border-gray-200'
											style={{ top: "70px", maxWidth: "500px" }}>
											<motion.li
												variants={itemVariants}
												initial='closed'
												animate='open'
												exit='closed'
												className='hover:bg-gray-100 rounded-md px-2 py-2 text-sudo hover:text-orange'
												role='menuitem'>
												<Link
													href='/about'
													role='menuitem'
													className={` ${pathname === "/about" ? "text-orange" : "text-sudo2"
														} `}>
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
												<Link
													href='/team'
													role='menuitem'
													className={` ${pathname === "/team" ? "text-orange" : "text-sudo2"
														} `}>
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
												<Link
													href='/mission'
													role='menuitem'
													className={` ${pathname === "/mission" ? "text-orange" : "text-sudo2"
														} `}>
													Our Mission
												</Link>
											</motion.li>
										</motion.ul>
									)}
								</AnimatePresence>
							</motion.div>
							<motion.div
								className='text-sm font-medium text-sudo2 hover:text-orange'
								variants={linkVariants}
								whileHover='hover'>
								<Link
									href='/academics'
									className={`${pathname.startsWith("/academics") ? "text-orange" : ""
										}`}>
									Academics
								</Link>
							</motion.div>
							<motion.div
								className='text-sm font-medium text-sudo2 hover:text-orange'
								variants={linkVariants}
								whileHover='hover'>
								<Link
									href='/admissions'
									className={` ${pathname.startsWith("/admissions") ? "text-orange" : ""
										}`}>
									Admissions
								</Link>
							</motion.div>
							<motion.div
								className='text-sm font-medium text-sudo2 hover:text-orange'
								variants={linkVariants}
								whileHover='hover'>
								<Link
									href='/learnings'
									className={`${pathname.startsWith("/learnings") ? "text-orange" : ""
										}`}>
									Learnings
								</Link>
							</motion.div>
							<motion.div
								className='text-sm font-medium text-sudo2 hover:text-orange'
								variants={linkVariants}
								whileHover='hover'>
								<Link
									href='/news-events'
									className={` ${pathname.startsWith("/news-events") ? "text-orange" : ""
										}`}>
									News & Events
								</Link>
							</motion.div>
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

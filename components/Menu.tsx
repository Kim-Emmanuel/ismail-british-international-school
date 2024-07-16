"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const Menu = () => {
	const [open, setOpen] = useState(false);

	const variants = {
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
		// Combined animation for both open and close states
		menuToClose: {
			rotate: 90,
			transition: {
				duration: 0.3,
				ease: "easeInOut",
			},
		},
		// Reset rotation for the menu icon
		resetRotate: {
			rotate: 0,
			transition: {
				duration: 0.3,
				ease: "easeInOut",
			},
		},
	};

	return (
		<div className=''>
			<motion.div className='sticky top-0 z-10 rounded-full border border-gray-200 bg-white tablet:bg-transparent flex items-center justify-between px-4 py-4 tablet:py-2 tablet:px-6 tablet:h-16'>
				<motion.button
					onClick={() => setOpen((prev) => !prev)}
					className='cursor-pointer focus:outline-none'
					aria-expanded={open}
					aria-label='Toggle Menu'
					variants={variants}
					initial='resetRotate'
					animate={open ? "menuToClose" : "resetRotate"}>
					{/* Close Icon - Only show when menu is open */}
					<svg
						viewBox='0 0 24 24'
						xmlns='http://www.w3.org/2000/svg'
						id='Close--Streamline-Ultimate'
						height='15'
						width='15'
						className={`w-6 h-6 transition-transform duration-300 ease-in-out ${open ? "block" : "hidden"
							}`}>
						<desc>Close Streamline Icon: https://streamlinehq.com</desc>
						<path
							d='m0.5 0.499 23 23'
							fill='none'
							stroke='#000000'
							stroke-linecap='round'
							stroke-linejoin='round'
							stroke-width='1'></path>
						<path
							d='m23.5 0.499 -23 23'
							fill='none'
							stroke='#000000'
							stroke-linecap='round'
							stroke-linejoin='round'
							stroke-width='1'></path>
					</svg>

					{/* Menu Icon - Show when menu is closed */}
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						id='Menu--Streamline-Platinum'
						height='15'
						width='15'
						className={`w-6 h-6 transition-transform duration-300 ease-in-out ${!open ? "block" : "hidden"
							}`}>
						<desc>Menu Streamline Icon: https://streamlinehq.com</desc>
						<g id='menu'>
							<path
								id='Vector 2814'
								stroke='#000000'
								d='M0 4.5h24M0 12h24M0 19.5h24'
								stroke-width='1'></path>
						</g>
					</svg>
				</motion.button>
			</motion.div>

			{/* Menu content */}
			<motion.div
				initial={false}
				animate={open ? "slideIn" : "slideOut"}
				className='absolute bg-white text-sudo2 font-medium left-0 top-20 w-full h-[calc(100vh-80px)] flex flex-col items-center justify-center gap-8 text-2xl z-10 shadow-md'
				variants={variants}>
				<motion.ul
					variants={variants}
					className='flex flex-col items-center justify-center gap-8'>
					<motion.li whileHover='hover' className='hover:text-orange p-2 rounded-md'>
						<Link href='/'>Home</Link>
					</motion.li>
					<motion.li whileHover='hover' className='hover:text-orange p-2 rounded-md'>
						<Link href='/about'>About Us</Link>
					</motion.li>
					<motion.li whileHover='hover' className='hover:text-orange p-2 rounded-md'>
						<Link href='/academics'>Academics</Link>
					</motion.li>
					<motion.li whileHover='hover' className='hover:text-orange p-2 rounded-md'>
						<Link href='/admissions'>Admissions</Link>
					</motion.li>
					<motion.li whileHover='hover' className='hover:text-orange p-2 rounded-md'>
						<Link href='/learnings'>Learnings</Link>
					</motion.li>
					<motion.li whileHover='hover' className='hover:text-orange p-2 rounded-md'>
						<Link href='/news-events'>News & Events</Link>
					</motion.li>
				</motion.ul>
			</motion.div>
		</div>
	);
};

export default Menu;

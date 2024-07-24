"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { motion } from "framer-motion";

const slides = [
	{
		id: 1,
		title: "Join Our Family",
		description: "Experience the Ismael British difference. Enroll now!",
		img: "/slider1.jpg",
		enrollUrl: "/admissions", // Replace with your Enroll page URL
		contactUrl: "/contact", // Replace with your Contact page URL
		bg: "bg-gradient-to-r from-yellow-50 to-pink-50",
	},
	{
		id: 2,
		title: "Build Educational Foundation",
		description: "For your child's success.",
		img: "/slider2.jpg",
		enrollUrl: "/admissions", // Replace with your Enroll page URL
		contactUrl: "/contact", // Replace with your Contact page URL
		bg: "bg-gradient-to-r from-pink-50 to-blue-50",
	},
	{
		id: 3,
		title: "A Welcoming Community",
		description: "Where every child feels valued and belongs.",
		img: "/slider3.jpg",
		enrollUrl: "/admissions", // Replace with your Enroll page URL
		contactUrl: "/contact", // Replace with your Contact page URL
		bg: "bg-gradient-to-r from-blue-50 to-yellow-50",
	},
	{
		id: 4,
		title: "Join Our Family",
		description: "Experience the Ismael British difference. Enroll now!",
		img: "/slider4.jpg",
		enrollUrl: "/admissions", // Replace with your Enroll page URL
		contactUrl: "/contact", // Replace with your Contact page URL
		bg: "bg-gradient-to-r from-blue-50 to-yellow-50",
	},
];

const Slider = () => {
	const [current, setCurrent] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
		}, 5000); // Adjust the interval as needed

		return () => {
			clearInterval(interval);
		};
	}, []);

	// Define variants for the text container
	const textVariants = {
		hidden: { opacity: 0, y: 20, transition: { duration: 0.1 } },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.9, ease: "easeInOut" },
		},
	};

	// Define variants for the buttons
	const buttonVariants = {
		hover: {
			scale: 1.1,
			transition: {
				duration: 0.2,
				ease: "easeInOut",
			},
		},
	};

	// Define variants for the navigation dots
	const circleVariants = {
		active: {
			scale: 1.5,
			transition: {
				duration: 0.4,
				ease: "easeInOut",
			},
		},
		inactive: {
			scale: 1,
			transition: {
				duration: 0.4,
				ease: "easeInOut",
			},
		},
	};

	return (
		<div className='relative flex justify-center items-center'>
			<div className='h-[calc(100vh-0px)] overflow-hidden w-full'>
				<div
					className='w-max h-full flex transition-all ease-in-out duration-1000'
					style={{ transform: `translateX(-${current * 100}vw)` }}>
					{slides.map((slide, index) => (
						<div
							key={index}
							className={`${slide.bg} w-screen h-full flex flex-col gap-16 desktop:flex-row relative`}>
							{/* IMAGE CONTAINER */}
							<div className='absolute inset-0 z-10'>
								<Image
									src={slide.img}
									alt=''
									fill
									sizes='100vm'
									className='object-cover'
								/>
							</div>

							{/* TEXT CONTAINER */}
							<div className='absolute inset-0 z-20 flex flex-col items-start justify-end gap-8 2xl:gap-12 text-left px-6 tablet:px-12 laptop:px-20 desktop:px-32 pb-20 bg-black/55'>
								<motion.div
									className='flex flex-col desktop:flex-col desktop:items-start laptop:w-full'
									variants={textVariants}
									initial='hidden'
									animate={current === index ? "visible" : "hidden"}>
									<motion.h1 className='text-3xl laptop:text-4xl desktop:text-5xl font-bold text-white backdrop-blur-sm rounded-md px-2 mb-2 bg-white/10'>
										{slide.title}
									</motion.h1>
									<motion.h2 className='text-lg laptop:text-xl desktop:text-2xl font-medium text-white backdrop-blur-sm rounded-md px-2 mb-2 bg-white/10'>
										{slide.description}
									</motion.h2>
								</motion.div>

								<div className="desktop:w-1/2 mt-8 desktop:mt-0 mb-12">
									<div className="flex items-start gap-6">
										<Link href={slide.enrollUrl}>
											<motion.button
												variants={buttonVariants}
												whileHover="hover"
												className="rounded-sm  text-white font-semibold py-3 px-6 hover:bg-orange border border-orange hover:text-white"
											>
												Enroll Now
											</motion.button>
										</Link>
										<Link href={slide.contactUrl}>
											<motion.button
												variants={buttonVariants}
												whileHover="hover"
												className="rounded-sm bg-orange text-white font-semibold py-3 px-6 hover:bg-orange border border-orange hover:text-white"
											>
												Get in touch
											</motion.button>
										</Link>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
				{/* Navigation dots */}
				<div className='absolute m-auto left-1/2 bottom-8 flex gap-4'>
					{slides.map((_, index) => (
						<motion.div
							key={index}
							className={`w-2 h-2 rounded-full ring-1 ring-neutral-400 hover:ring-orange cursor-pointer flex items-center justify-center`}
							variants={circleVariants}
							initial={current === index ? "active" : "inactive"}
							animate={current === index ? "active" : "inactive"}
							onClick={() => setCurrent(index)}>
							{current === index && (
								<div className='w-[5px] h-[5px] bg-orange rounded-full'></div>
							)}
						</motion.div>
					))}
				</div>
			</div>
			{/* Navbar goes here */}
			<Navbar />
		</div>
	);
};

export default Slider;

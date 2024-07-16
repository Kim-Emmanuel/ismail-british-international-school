/* eslint-disable react/no-unescaped-entities */
"use client";

import React, { useState, useEffect, useRef } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Import your SVGs
import eye from "@public/eye-open.svg";
import education from "@public/undraw_education.svg";
import our from "@public/our.svg";
import magnifyingGlass from "@public/magnifying-glass.svg";

const About = () => {
	const [showMore, setShowMore] = useState(false);
	const [coreValues] = useState([
		{
			number: 1,
			title: "Academic Excellence",
			description: "We cultivate a love of learning and foster academic excellence through rigorous curriculum, dedicated teachers, and innovative teaching methods. Our students are challenged to reach their full potential and develop a strong foundation for future success.",
		},
		{
			number: 2,
			title: "Global Citizenship",
			description: "We instill in our students a deep understanding of the world and their place in it. Through diverse perspectives, global projects, and community engagement, we prepare them to be responsible, compassionate, and impactful citizens.",
		},
		{
			number: 3,
			title: "Respect and Inclusivity",
			description: "At our school, every student feels valued and respected. We embrace diversity, promote understanding, and create a nurturing environment where every voice is heard and every individual can thrive.",
		},
		{
			number: 4,
			title: "Creativity and Innovation",
			description: "We inspire our students to think outside the box and be fearless innovators. Through hands-on learning, project-based activities, and a culture of inquiry, we ignite their passions and empower them to shape the future.",
		},
		{
			number: 5,
			title: "Integrity and Responsibility",
			description: " We prioritize character development alongside academics. Our students learn the importance of integrity, honesty, and accountability. They are empowered to make responsible choices and become ethical leaders of tomorrow.",
		},
	]);

	const handleShowMore = () => {
		setShowMore(!showMore);
	};

	// Framer Motion variants for animations
	const containerVariants = {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2, // Delay between child animations
			},
		},
	};

	const itemVariants = {
		hidden: { opacity: 0, y: 50 },
		show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
	};

	// UseInView for scroll-based animations
	const [ref1, inView1] = useInView({ threshold: 0.7 });
	const [ref2, inView2] = useInView({ threshold: 0.7 });
	const [ref3, inView3] = useInView({ threshold: 0.7 });
	const [ref5, inView5] = useInView({ threshold: 0.7 });
	const [ref6, inView6] = useInView({ threshold: 0.7 });
	const [ref7, inView7] = useInView({ threshold: 0.7 });
	const [ref8, inView8] = useInView({ threshold: 0.7 });
	const [ref9, inView9] = useInView({ threshold: 0.7 });
	const [ref10, inView10] = useInView({ threshold: 0.7 });
	const [refWhyChooseUs, inViewWhyChooseUs] = useInView({ threshold: 0.7 }); // Corrected declaration

	// Declare animation controls
	const animation = useAnimation();
	const magnifyingGlassAnimation = useAnimation();
	const controlsWhyChooseUs = useAnimation();

	useEffect(() => {
		if (inView1) {
			animation.start("show");
		}
	}, [inView1, animation]);

	// Animation controls for "Mission and Vision" section
	const controlsMissionVision = useAnimation();
	const [refMissionVision, inViewMissionVision] = useInView({ threshold: 0.5 });

	useEffect(() => {
		if (inViewMissionVision) {
			controlsMissionVision.start({
				opacity: 1,
				y: 0,
				transition: { duration: 0.8, ease: "easeInOut", staggerChildren: 0.2 },
			});
		}
	}, [controlsMissionVision, inViewMissionVision]);

	useEffect(() => {
		if (inView3) {
			animation.start("show");
		}
	}, [inView3, animation]);

	// Animation controls for "Our Values" section
	const controlsValues = useAnimation();
	const [refValues, inViewValues] = useInView({ threshold: 0.5 });

	useEffect(() => {
		if (inViewValues) {
			controlsValues.start({
				opacity: 1,
				y: 0,
				transition: { duration: 0.8, ease: "easeInOut", staggerChildren: 0.2 },
			});
		}
	}, [controlsValues, inViewValues]);

	useEffect(() => {
		if (inView5) {
			animation.start("show");
		}
	}, [inView5, animation]);

	useEffect(() => {
		if (inView6) {
			animation.start("show");
		}
	}, [inView6, animation]);

	useEffect(() => {
		if (inView7) {
			animation.start("show");
		}
	}, [inView7, animation]);

	useEffect(() => {
		if (inView8) {
			animation.start("show");
		}
	}, [inView8, animation]);

	useEffect(() => {
		if (inView9) {
			animation.start("show");
		}
	}, [inView9, animation]);

	useEffect(() => {
		if (inView10) {
			magnifyingGlassAnimation.start({ opacity: 1, scale: 1 }); // Animate only the image
		}
	}, [inView10, magnifyingGlassAnimation]);

	useEffect(() => {
		if (inViewWhyChooseUs) {
			controlsWhyChooseUs.start({
				opacity: 1,
				y: 0,
				transition: { duration: 0.8, ease: "easeInOut", staggerChildren: 0.2 },
			});
		}
	}, [controlsWhyChooseUs, inViewWhyChooseUs]); // Use the correct variable name

	return (
		<>
			<Head>
				<title>About - Ismail British International School</title>
				<meta
					name='description'
					content='About Ismail British International School'
				/>
			</Head>
			<main className='relative mt-16'>
				{/* Education as background element */}
				<motion.div
					ref={ref10}
					className='absolute flex items-center justify-start py-18 px-14 z-0'
					initial={{ opacity: 0, scale: 0.8 }}
					animate={magnifyingGlassAnimation}
					transition={{ duration: 1, delay: 0.5 }}
					variants={containerVariants}>
					<Image
						src={magnifyingGlass}
						alt=''
						width={230}
						height={230}
						className='opacity-10'
						style={{
							filter: "brightness(0.5) contrast(0.8) saturate(1.5) hue-rotate(190deg)",
						}}
					/>
				</motion.div>

				<motion.div
					className='container mx-auto tablet:px-16 desktop:px-32 py-16 flex flex-col items-start text-start'
					variants={containerVariants}
					initial='hidden'
					animate='show'>
					<h1 className='text-5xl font-bold text-sudo2 mb-3'>Our Story</h1>
					<div className='flex items-center'>
						<div className='w-28 bg-orange h-0.5'></div>
						<div className='w-28 bg-grey h-0.5'></div>
					</div>
				</motion.div>

				{/* Section 1: Who We Are */}
				<motion.div
					ref={ref1}
					className='container mx-auto tablet:px-16 desktop:px-32 mt-2'
					variants={containerVariants}
					initial='hidden'
					animate={animation}
					transition={{ duration: 1, delay: 0.7 }}>
					<h2 className='text-3xl font-bold mb-4 flex justify-start text-sudo text-start'>
						Who is Ismail British International School?
					</h2>
					<p className='text-lg mb-6 flex justify-start text-wrap text-start text-sudo2 tablet:px-18 laptop:px-1'>
						Ismael British International School stands as a beacon of educational
						excellence, dedicated to shaping the minds of tomorrow's leaders. With its
						motto, educating global citizens for a changing world. It’s located in
						Gudele One opposite Nile Petroleum Juba South Sudan. The school embodies a
						commitment to fostering a community of individuals equipped with the
						knowledge, skills, and mindset to thrive in an evolving world.
					</p>

					<motion.div variants={itemVariants}>
						<h3 className='text-xl font-bold text-sudo2 mb-4'>
							Ismail British International School: A Journey of Excellence
						</h3>
						{showMore && (
							<p className='text-lg text-sudo2 mb-6 text-wrap laptop:px-1'>
								Our school is built on a foundation of academic rigor, fostering a love
								for learning, and nurturing well-rounded individuals. We believe in
								providing a supportive and inclusive environment where every student can
								flourish.
							</p>
						)}
					</motion.div>

					<div className='flex justify-start'>
						<button
							onClick={handleShowMore}
							className='text-sudo text-base font-medium hover:text-orange relative group transition-all duration-300 ease-in-out'>
							{showMore ? "Read Less" : "Read More"}
							<div className='flex items-center'>
								<div className='w-6 bg-orange h-px mt-2'></div>
								<span className='absolute transform -translate-x-1/2 mt-2 rounded-full transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100 w-10 flex justify-end ml-3'>
									<svg
										width='20'
										height='20'
										viewBox='0 0 15 15'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'>
										<path
											d='M6.18194 4.18185C6.35767 4.00611 6.6426 4.00611 6.81833 4.18185L9.81833 7.18185C9.90272 7.26624 9.95013 7.3807 9.95013 7.50005C9.95013 7.6194 9.90272 7.73386 9.81833 7.81825L6.81833 10.8182C6.6426 10.994 6.35767 10.994 6.18194 10.8182C6.0062 10.6425 6.0062 10.3576 6.18194 10.1819L8.86374 7.50005L6.18194 4.81825C6.0062 4.64251 6.0062 4.35759 6.18194 4.18185Z'
											fill='#FF6600'
											fillRule='evenodd'
											clipRule='evenodd'></path>
									</svg>
								</span>
							</div>
						</button>
					</div>
				</motion.div>

				<div
					className='container mx-auto py-6 mt-16 mb-8 px-4 tablet:px-8 laptop:px-16 desktop:px-32 2xl:px-64 relative'
					ref={refMissionVision}>
					<motion.h1
						className='text-4xl font-medium text-sudo flex justify-center text-center mb-2'
						initial={{ opacity: 0, y: 20 }}
						animate={controlsMissionVision}>
						Mission and Vision
					</motion.h1>
					<div className='grid grid-cols-1 tablet:grid-cols-2 gap-16'>
						<div className='p-8 tablet:px-0 laptop:px-1 desktop:px-1'>
							<motion.h2
								className='text-2xl font-bold mb-3 text-sudo2'
								initial={{ opacity: 0, y: 20 }}
								animate={controlsMissionVision}>
								Missions
								<div className='flex items-center mt-1'>
									<div className='w-20 bg-orange h-0.5'></div>
									<div className='w-20 bg-grey h-0.5'></div>
								</div>
							</motion.h2>
							<motion.p
								className='text-lg mb-6 text-sudo2 text-wrap'
								initial={{ opacity: 0, y: 20 }}
								animate={controlsMissionVision}>
								Ismael British International School is dedicated to excellence -
								striving to ensure that learners will become: inspire in diverse
								community of learners to take a proactive role as responsible
							</motion.p>
						</div>
						<div className='relative flex justify-end items-center desktop:px-1 tablet:px-0'>
							<Image
								src='/mission.svg'
								alt='Ismail British International School'
								width={180}
								height={180}
								className='max-w-full tablet:max-w-md' // Add max-width for responsiveness
							/>
						</div>
					</div>

					<div className='grid grid-cols-1 tablet:grid-cols-2 gap-16 mt-6'>
						<div className='relative tablet:px-0 desktop:px-1 flex  items-center'>
							<Image
								src='/vision.svg'
								alt='Ismail British International School'
								width={230}
								height={230}
								className='max-w-full tablet:max-w-md' // Add max-width for responsiveness
							/>
						</div>
						<div className='p-8 desktop:px-1 tablet:px-0'>
							<motion.h2
								className='text-2xl font-bold mb-3 text-sudo2'
								initial={{ opacity: 0, y: 20 }}
								animate={controlsMissionVision}>
								Vision
								<div className='flex items-center mt-1'>
									<div className='w-20 bg-orange h-0.5'></div>
									<div className='w-20 bg-grey h-0.5'></div>
								</div>
							</motion.h2>
							<motion.p
								className='text-lg mb-6 text-sudo2 text-wrap'
								initial={{ opacity: 0, y: 20 }}
								animate={controlsMissionVision}>
								To prepare today learners to confidently embrace challenges as
								adaptable, empathetic global citizens who will be active contributors
								for a more sustainable world.
							</motion.p>
						</div>
					</div>
				</div>

				{/* SCHOOL IMAGE */}
				<motion.div
					ref={ref3}
					className='relative bg-black/80 h-2/5'
					initial='hidden'
					animate={animation}
					transition={{ duration: 1, delay: 0.5 }}>
					<Image
						src='/classroom.jpg'
						alt=''
						width={1000}
						height={500}
						className='object-cover w-full h-[620px]'
					/>
				</motion.div>

				<div className="container mx-auto py-6 mt-16 mb-8 px-4 tablet:px-8 laptop:px-16 desktop:px-32 2xl:px-64 relative" ref={refValues}>
					<motion.h2
						className="text-3xl font-black text-start items-center text-sudo mb-10"
						initial={{ opacity: 0, y: 20 }}
						animate={controlsValues}
						transition={{ duration: 0.8, ease: "easeInOut", delay: 0.8 }}
					>
						Our Values
						<div className="flex mt-2 justify-start items-center">
							<div className="w-28 bg-orange h-0.5"></div>
							<div className="w-28 bg-grey h-0.5"></div>
						</div>
					</motion.h2>
					<div className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 mt-4 gap-6">
						{coreValues.map((coreValue) => (
							<motion.div
								key={coreValue.number}
								className="flex flex-col mt-4"
								initial={{ opacity: 0, y: 20 }}
								animate={controlsValues}
								transition={{ duration: 0.8, ease: "easeInOut" }}
							>
								<motion.h2
									className="text-base font-bold text-sudo mb-2"
									initial={{ opacity: 0, y: 20 }}
									animate={controlsValues}
									transition={{ duration: 0.8, ease: "easeInOut" }}
								>
									<span className="text-orange font-bold text-2xl">
										{coreValue.number}.
									</span>{" "}
									{coreValue.title}
								</motion.h2>
								<motion.p
									className="text-sudo2"
									initial={{ opacity: 0, y: 20 }}
									animate={controlsValues}
									transition={{ duration: 0.8, ease: "easeInOut" }}
								>
									{coreValue.description}
								</motion.p>
							</motion.div>
						))}
					</div>
				</div>

				<motion.h2
					className='text-3xl font-bold text-center text-sudo mt-10 mb-2'
					initial={{ opacity: 0, y: 20 }}
					animate={controlsWhyChooseUs}>
					Why Choose Us?
				</motion.h2>
				<motion.div
					className='flex justify-center items-center'
					initial={{ opacity: 0, y: 20 }}
					animate={controlsWhyChooseUs}>
					<div className='w-28 bg-orange h-0.5'></div>
					<div className='w-28 bg-grey h-0.5'></div>
				</motion.div>

				<div
					className='grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 gap-8 container mx-auto py-6 mt-8 mb-8 px-4 tablet:px-8 laptop:px-16 desktop:px-32 2xl:px-64 relative'
					ref={refWhyChooseUs}>
					{[
						{
							icon: "/person.svg",
							title: "Personalized Learning Paths",
							description:
								"We offer tailored educational experiences that cater to each child’s unique talents and learning styles.",
						},
						{
							icon: "/school.png",
							title: "Innovative Curriculum",
							description:
								"Our curriculum is a blend of traditional wisdom and modern innovation, ensuring a holistic development.",
						},
						{
							icon: "/globe.svg",
							title: "Global Citizenry",
							description:
								"We instill values for a connected world, nurturing compassionate global citizens.",
						},
					].map((item, index) => (
						<motion.div
							key={index}
							className='bg-white p-6 border border-neutral-300 rounded-md shadow-md hover:shadow-lg hover:border-orange-500 transition-shadow duration-300 ease-in-out'
							initial={{ opacity: 0, y: 20 }}
							animate={controlsWhyChooseUs}>
							<div className='flex justify-center'>
								<div className='w-16 h-16 rounded-full border border-orange-500 flex items-center justify-center mb-4 hover:scale-110 transition-all duration-200'>
									<Image src={item.icon} alt={item.title} width={50} height={50} />
								</div>
							</div>
							<motion.h3
								className='text-xl text-sudo text-center font-bold mb-2'
								initial={{ opacity: 0, y: 20 }}
								animate={controlsWhyChooseUs}>
								{item.title}
							</motion.h3>
							<motion.p
								className='text-center text-sudo2'
								initial={{ opacity: 0, y: 20 }}
								animate={controlsWhyChooseUs}>
								{item.description}
							</motion.p>
						</motion.div>
					))}
				</div>

				<motion.div
					ref={ref6}
					className='mb-12 flex justify-center'
					variants={containerVariants}
					initial='hidden'
					animate={animation}
					transition={{ duration: 1, delay: 0.5 }}>
					<Link href='/contact'>
						<button className='border border-orange hover:bg-orange hover:text-white text-sudo font-bold py-2 px-4 rounded-sm'>
							Contact Us
						</button>
					</Link>
				</motion.div>
			</main>
		</>
	);
};

export default About;

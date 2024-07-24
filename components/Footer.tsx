'use client';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

const Footer = () => {
  // Animation controls for quick links
  const controlsQuickLinks = useAnimation();
  const [refQuickLinks, inViewQuickLinks] = useInView({ threshold: 0.5 });

  useEffect(() => {
    if (inViewQuickLinks) {
      controlsQuickLinks.start({
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.9,
          ease: 'easeInOut',
          staggerChildren: 0.1, // Delay between child animations
        },
      });
    }
  }, [controlsQuickLinks, inViewQuickLinks]);

  // Animation controls for home links
  const controlsHomeLinks = useAnimation();
  const [refHomeLinks, inViewHomeLinks] = useInView({ threshold: 0.5 });

  useEffect(() => {
    if (inViewHomeLinks) {
      controlsHomeLinks.start({
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.9,
          ease: 'easeInOut',
          staggerChildren: 0.1, // Delay between child animations
        },
      });
    }
  }, [controlsHomeLinks, inViewHomeLinks]);

  return (
			<footer className='py-24 px-4 tablet:px-8 laptop:px-16 desktop:px-32 2xl:px-64 bg-gray-100 text-sm mt-12'>
				<div className='flex flex-col tablet:flex-row justify-between gap-24'>
					<div className='w-full tablet:w-1/2 laptop:w-1/4 flex flex-col gap-8'>
						<Link href='/' className='flex items-center gap-3'>
							<Image
								src='/logo.svg'
								alt='School Logo'
								width={95}
								height={95}
								// Optimize image loading on smaller screens
								sizes='(max-width: 768px) 50vw,
                      (max-width: 1280px) 75vw,
                      95px'
							/>
						</Link>
						<p className='text-sm tablet:text-base'>
							Juba - South Sudan
							<br />
							(Gudele 1 Opposite Gudele Nile Petroleum)
						</p>
						<Link
							href='/admissions'
							className='text-sudo text-base font-medium hover:text-orange relative group transition-all duration-500 ease-in-out'>
							Enroll now
							<div className='flex items-center w-1/12'>
								<div className='w-6 bg-orange h-px mt-2'></div>
								<span className='absolute transform -translate-x-1/2 mt-2 rounded-full transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100 w-8 flex justify-end ml-3'>
									<svg
										width='20'
										height='20'
										viewBox='0 0 15 15'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'>
										<path
											d='M6.18194 4.18185C6.35767 4.00611 6.6426 4.00611 6.81833 4.18185L9.81833 7.18185C9.90272 7.26624 9.95013 7.3807 9.95013 7.50005C9.95013 7.6194 9.90272 7.73386 9.81833 7.81825L6.81833 10.8182C6.6426 10.994 6.35767 10.994 6.18194 10.8182C6.0062 10.6425 6.0062 10.3576 6.18194 10.1819L8.86374 7.50005L6.18194 4.81825C6.0062 4.64251 6.0062 4.35759 6.18194 4.18185Z'
											fill='#FF6600'
											fill-rule='evenodd'
											clip-rule='evenodd'></path>
									</svg>
								</span>
							</div>
						</Link>
						<div className='flex gap-3'>
							<div className='hover:scale-110 hover:bg-orange-200 rounded-full p-1 transition-all duration-200'>
								<Image src='/facebook.svg' alt='' width={20} height={20} />
							</div>
							<div className='hover:scale-110 hover:bg-orange-200 rounded-full p-1 transition-all duration-200'>
								<Image src='/linkedin.svg' alt='' width={20} height={20} />
							</div>
							<div className='hover:scale-110 hover:bg-orange-200 rounded-full p-1 transition-all duration-200'>
								<Image src='/youtube.svg' alt='' width={20} height={20} />
							</div>
							<div className='hover:scale-110 hover:bg-orange-200 rounded-full p-1 transition-all duration-200'>
								<Image src='/twitterx.svg' alt='' width={20} height={20} />
							</div>
						</div>
					</div>

					<div
						className='hidden laptop:flex justify-between w-1/2'
						ref={refHomeLinks}>
						<motion.div
							className='flex flex-col justify-between mt-12'
							initial={{ opacity: 0, y: 20 }}
							animate={controlsHomeLinks}
							transition={{ duration: 0.8, ease: "easeInOut", staggerChildren: 0.1 }}>
							<h1 className='font-semibold text-lg'>Home Links</h1>
							<div className='flex flex-col gap-6 font-semibold text-sudo2'>
								<Link href='/about' className='hover:text-orange-700'>
									About Us
								</Link>
								<Link href='/academics' className='hover:text-orange-700'>
									Academics
								</Link>
								<Link href='/admissions' className='hover:text-orange-700'>
									Admissions
								</Link>
								<Link href='/news-events' className='hover:text-orange-700'>
									News & Events
								</Link>
								<Link href='/contact' className='hover:text-orange-700'>
									Contact Us
								</Link>
							</div>
						</motion.div>
						<motion.div
							className='flex flex-col justify-between mt-12'
							initial={{ opacity: 0, y: 20 }}
							animate={controlsHomeLinks}
							transition={{ duration: 0.8, ease: "easeInOut", staggerChildren: 0.1 }}>
							<h1 className='font-semibold text-lg'>Contact</h1>
							<div className='flex flex-col gap-6 font-medium text-sudo2'>
								<Link href='' className='text-zinc-500 hover:text-orange-700'>
									info@ismaelbritish.edu
								</Link>
								<span className=''>Gudele (1)</span>
								<Link href='' className='text-zinc-500 hover:text-orange-700'>
									+211 921 386 169
								</Link>
								<Link href='' className='text-zinc-500 hover:text-orange-700'>
									+211 923 070 111
								</Link>
								<Link href=''>Email Us</Link>
							</div>
						</motion.div>
						<motion.div
							className='flex flex-col justify-between mt-12'
							initial={{ opacity: 0, y: 20 }}
							animate={controlsQuickLinks}
							transition={{ duration: 0.8, ease: "easeInOut", staggerChildren: 0.1 }}
							ref={refQuickLinks}>
							<h1 className='font-semibold text-lg'>Quick Links</h1>
							<div className='flex flex-col gap-6 font-semibold text-sudo2'>
								<Link href='/admissions' className='hover:text-orange-700'>
									Fee Structure
								</Link>
								<Link href='/admissions' className='hover:text-orange-700'>
									Enrollment
								</Link>
								<Link href='/academics' className='hover:text-orange-700'>
									Academic Calendar
								</Link>
								<Link href='/location' className='hover:text-orange-700'>
									Location
								</Link>
								<Link href='' className='hover:text-orange-700'>
									Transport
								</Link>
							</div>
						</motion.div>
					</div>
				</div>

				{/* BOTTOM */}
				<div className='flex flex-col tablet:flex-row items-center justify-between gap-8 mt-16'>
					<div className='text-zinc-500'>
						Copyright © Ismael British International School {new Date().getFullYear()}{" "}
						All rights Reserved
					</div>
					<div className='flex flex-col gap-8 md:flex-row'>
						<div className=''>
							<span className='text-gray-500 mr-4'>Language</span>
							<span className='font-medium'>United States | English</span>
						</div>
					</div>
				</div>
			</footer>
		);
};

export default Footer;
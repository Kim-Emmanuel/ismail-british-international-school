/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import admission from "@public/admission.jpg";
import Link from "next/link";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import underConstruction from "@public/under-construction.svg";

const admissionPage = () => {
  // Animation controls for hero image zoom
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.5 });

  useEffect(() => {
    if (inView) {
      controls.start({
        scale: 1.1,
        transition: { duration: 0.8, ease: "easeInOut" },
      });
    } else {
      controls.start({
        scale: 1,
        transition: { duration: 0.8, ease: "easeInOut" },
      });
    }
  }, [controls, inView]);

  // Animation controls for text container
  const controlsText = useAnimation();
  const [refText, inViewText] = useInView({ threshold: 0.5 });

  useEffect(() => {
    if (inViewText) {
      controlsText.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeInOut", staggerChildren: 0.2 },
      });
    }
  }, [controlsText, inViewText]);

  // Button hover animation
  const buttonVariants = {
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
  };

  return (
    <>
      {/* Hero Section with Image and Text */}
      <div className='relative flex justify-center items-center'>
        <div className='h-[calc(100vh-0px)] overflow-hidden w-full'>
          <div className='w-screen h-full flex flex-col gap-16 desktop:flex-row relative'>
            {/* IMAGE CONTAINER */}
            <div className='absolute inset-0 z-0'>
              <motion.div
                ref={ref}
                animate={controls}
                className='absolute inset-0 z-0'>
                <Image
                  src={admission}
                  alt=''
                  fill
                  sizes='100vm'
                  className='object-cover'
                />
              </motion.div>
              <div className='absolute inset-0 bg-gradient-to-t from-black to-transparent' />{" "}
              {/* Black gradient */}
            </div>

            {/* TEXT CONTAINER */}
            <div
              className='absolute inset-0 z-10 flex flex-col items-start justify-center gap-8 2xl:gap-12 text-left px-6 tablet:px-12 laptop:px-20 desktop:px-32'
              ref={refText}>
              <motion.div
                className='flex flex-col desktop:flex-col desktop:items-start laptop:w-full'
                initial={{ opacity: 0, y: 20 }}
                animate={controlsText}
                transition={{ duration: 0.8, ease: "easeInOut", staggerChildren: 0.2 }}>
                <motion.h1
                  className='text-3xl laptop:text-6xl desktop:text-6xl font-black text-white backdrop-blur-sm rounded-md px-2 mb-6 bg-white/10'
                  initial={{ opacity: 0, x: -20 }}
                  animate={{
                    opacity: 1,
                    x: 0,
                    transition: { duration: 0.8, ease: "easeInOut", delay: 0.2 },
                  }}>
                  Admission.
                </motion.h1>
                <motion.h2
                  className='text-lg laptop:text-xl desktop:text-2xl font-medium text-orange backdrop-blur-sm rounded-md px-2 bg-white/10'
                  initial={{ opacity: 0, x: 20 }}
                  animate={{
                    opacity: 1,
                    x: 0,
                    transition: { duration: 0.8, ease: "easeInOut", delay: 0.4 },
                  }}>
                  Welcome to Ismael British International School.
                </motion.h2>
              </motion.div>
            </div>

            {/* Call to Action */}
            <div className='absolute z-10 bottom-40 flex-col items-start justify-end gap-8 2xl:gap-12 text-left px-6 tablet:px-12 laptop:px-20 desktop:px-32'>
              <Link href='/'>
                <motion.div
                  className='flex items-start gap-6'
                  variants={buttonVariants}
                  whileHover='hover'>
                  <motion.button className='rounded-sm border border-orange text-white font-semibold py-3 px-6 hover:bg-orange hover:text-white'>
                    Explore Programs
                  </motion.button>
                </motion.div>
              </Link>
            </div>

            <div className='absolute bottom-10 mt-4 font-semibold text-xs text-orange z-0 flex-col items-start justify-end gap-8 2xl:gap-12 text-left px-6 tablet:px-12 laptop:px-20 desktop:px-32'>
              <p>Meet Our Faculty | Alumni | Donations | Contact Us</p>
            </div>
          </div>
        </div>
      </div>

      <div className='container mt-16 py-4 px-4 text-left px-6 tablet:px-12 laptop:px-20 desktop:px-32'>
        <h1 className='text-3xl font-black text-start items-center text-sudo mb-10'>
          Admission Process
          <div className='flex mt-2 justify-start items-center'>
            <div className='w-36 bg-orange h-0.5'></div>
            <div className='w-36 bg-grey h-0.5'></div>
          </div>
        </h1>

        <div className='relative py-16 mb-2 flex justify-center items-center'>
          <div className='absolute flex justify-center items-center top-10'>
            <p className='text-xl font-semibold text-sudo'>
              Section Under construction...
            </p>
          </div>
          <Image
            src={underConstruction}
            alt='Under construction'
            width={500}
            height={500}
            className='object-contain max-w-full'
          />
        </div>
      </div>

      {/* SCHOOL IMAGE */}
      <div className='relative bg-black/80 h-2/5'>
        <Image
          src='/classroom.jpg'
          alt=''
          width={1000}
          height={500}
          className='object-cover w-full h-[620px]'
        />
      </div>
    </>
  );
};

export default admissionPage;

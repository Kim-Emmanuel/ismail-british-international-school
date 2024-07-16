/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/no-unescaped-entities */
"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import location from "@public/location.jpg";
import campus from "@public/location.jpg";
import magnifyingGlass from "@public/magnifying-glass.svg";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const locationPage = () => {
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

  // Animation controls for all elements on scroll down
  const controlsAll = useAnimation();
  const [refAll, inViewAll] = useInView({ threshold: 0.5 });

  useEffect(() => {
    if (inViewAll) {
      controlsAll.start({
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.8,
          ease: "easeInOut",
          staggerChildren: 0.2, // Stagger children animations
        },
      });
    }
  }, [controlsAll, inViewAll]);

  // Animation controls for "Address and Map" section
  const controlsAddress = useAnimation();
  const [refAddress, inViewAddress] = useInView({ threshold: 0.5 });

  useEffect(() => {
    if (inViewAddress) {
      controlsAddress.start({
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.8,
          ease: "easeInOut",
          staggerChildren: 0.2,
        },
      });
    }
  }, [controlsAddress, inViewAddress]);

  // Animation controls for "Links" section
  const controlsLinks = useAnimation();
  const [refLinks, inViewLinks] = useInView({ threshold: 0.5 });

  useEffect(() => {
    if (inViewLinks) {
      controlsLinks.start({
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.8,
          ease: "easeInOut",
          staggerChildren: 0.2,
        },
      });
    }
  }, [controlsLinks, inViewLinks]);

  return (
    <div className="">
      {/* Hero Section with Image and Text */}
      <div className="relative flex justify-center items-center">
        <div className="h-[calc(100vh-0px)] overflow-hidden w-full">
          <div className="w-screen h-full flex flex-col gap-16 desktop:flex-row relative">
            {/* IMAGE CONTAINER */}
            <div className="absolute inset-0 z-0">
              <motion.div
                ref={ref}
                animate={controls}
                className="absolute inset-0 z-0"
              >
                <Image
                  src={location}
                  alt=""
                  fill
                  sizes="100vm"
                  className="object-cover"
                />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />{" "}
              {/* Black gradient */}
            </div>

            {/* TEXT CONTAINER */}
            <div className="absolute inset-0 z-10 flex flex-col items-start justify-end gap-8 2xl:gap-12 text-left px-6 tablet:px-12 laptop:px-20 desktop:px-32 pb-20">
              <motion.div
                className="flex flex-col desktop:flex-col desktop:items-start laptop:w-full"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
              >
                <motion.h1
                  className="text-3xl laptop:text-6xl desktop:text-6xl font-black text-white backdrop-blur-sm rounded-md px-2 mb-6 bg-white/10"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeInOut", delay: 0.2 } }}
                >
                  Location.
                </motion.h1>
                <motion.h2
                  className="text-lg laptop:text-xl desktop:text-2xl font-medium text-orange backdrop-blur-sm rounded-md px-2 bg-white/10"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeInOut", delay: 0.4 } }}
                >
                  Welcome to Ismail British International School.
                </motion.h2>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Find Us Section */}
      <div className="container mx-auto py-20 px-4 tablet:px-8 laptop:px-16 desktop:px-32 2xl:px-64 relative" ref={refAll}>
        {/* Magnifying Glass as background element */}
        <div className="absolute inset-0 flex items-center justify-start p-8 z-0">
          {" "}
          {/*  z-0 for the background */}
          <Image
            src={magnifyingGlass}
            alt=""
            width={230}
            height={230}
            className="opacity-10" // Reduced opacity
            style={{
              filter: "brightness(0.5) contrast(0.8) saturate(1.5) hue-rotate(190deg)",
            }} // Fade up filter
          />
        </div>
        {/* Actual content of the Find Us section */}
        <motion.h2
          className="text-4xl font-bold text-start text-sudo mb-3"
          initial={{ opacity: 0, y: 20 }}
          animate={controlsAll}
        >
          Find Us
        </motion.h2>
        <motion.div
          className="flex justify-start items-start mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={controlsAll}
        >
          <div className="w-24 bg-orange h-0.5"></div>
          <div className="w-24 bg-grey h-0.5"></div>
        </motion.div>
        <motion.p
          className="text-lg font-semibold text-wrap text-sudo2 w-[60%] mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={controlsAll}
        >
          Discover Ismael British International School: A Beacon of Excellence in
          Juba, South Sudan. Nestled in the vibrant neighborhood of Gudele One, our
          school stands opposite the Nile Petroleum.
        </motion.p>
      </div>

      {/* Address and Map Section */}
      <div className="bg-gray-100 grid grid-cols-1 tablet:grid-cols-2 gap-8" ref={refAddress}>
        <div className="p-6 mx-auto py-24 px-4 tablet:px-8 laptop:px-16 desktop:px-32 2xl:px-64 tablet:mx-0">
          <motion.h2
            className="text-3xl font-black text-sudo2 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={controlsAddress}
          >
            Ismail British International School.
          </motion.h2>
          <motion.p
            className="text-gray-600 text-base font-normal leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={controlsAddress}
          >
            Gudele 1 Opposite Gudele Nile Petroleum,
            <br />
            Behind Landy Motor Company Limited.
          </motion.p>
          <motion.p
            className="text-gray-700 mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={controlsAddress}
          >
            <span className="font-semibold">Telephone:</span> +211 921 386 169
            <br />
            +211 923 070 111
          </motion.p>
        </div>
        <div className="relative">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3975.4395557904345!2d31.5499923!3d4.8657789!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x171281dbd781e2bb%3A0xa99a9c857399d8c8!2sISMAEL%20BRITISH%20INTERNATIONAL%20SCHOOL!5e0!3m2!1sen!2ske!4v1719949255451!5m2!1sen!2ske"
            width="100%"
            height="450"
            allowFullScreen={true} // Use boolean value
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      {/* CAMPUS IMAGE */}
      <div className="relative bg-black/80 h-2/5">
        <Image
          src={campus} // Use your campus image
          alt=""
          width={1000}
          height={500}
          className="object-cover w-full h-[620px]"
        />
      </div>

      {/* Links Section */}
      <div className="container mx-auto py-4 mt-12 px-4 tablet:px-8 laptop:px-16 desktop:px-32 2xl:px-64 relative" ref={refLinks}>
        <motion.h2
          className="text-3xl font-black text-start items-start text-sudo mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={controlsLinks}
        >
          Discover More
          <div className="flex mt-2 justify-start items-center">
            <div className="w-28 bg-orange h-0.5"></div>
            <div className="w-28 bg-grey h-0.5"></div>
          </div>
        </motion.h2>
        
        <motion.div
          className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-2 gap-12"
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.8, ease: "easeInOut", delay: 1 }}
          animate={controlsLinks}
        >
          <div className="items-start gap-4 hover:scale-105 transition-transform duration-300 ease-in-out">
            <Link
              href="/transport"
              className="text-sudo text-3xl font-medium hover:text-orange relative group transition-all duration-500 ease-in-out"
            >
              <div className="mb-6 relative w-full h-[200px] hover:brightness-90 transition-brightness duration-300 ease-in-out">
                <Image
                  src="/transport.jpg"
                  alt="School Fees"
                  layout="fill"
                  className="object-cover"
                />
              </div>
              Transport
              <div className="flex items-center w-1/12">
                <div className="w-6 bg-orange h-px mt-2"></div>
                <span className="absolute transform -translate-x-1/2 mt-2 rounded-full transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100 w-10 flex justify-end ml-3">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.18194 4.18185C6.35767 4.00611 6.6426 4.00611 6.81833 4.18185L9.81833 7.18185C9.90272 7.26624 9.95013 7.3807 9.95013 7.50005C9.95013 7.6194 9.90272 7.73386 9.81833 7.81825L6.81833 10.8182C6.6426 10.994 6.35767 10.994 6.18194 10.8182C6.0062 10.6425 6.0062 10.3576 6.18194 10.1819L8.86374 7.50005L6.18194 4.81825C6.0062 4.64251 6.0062 4.35759 6.18194 4.18185Z"
                      fill="#FF6600"
                      fillRule="evenodd"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </span>
              </div>
            </Link>
          </div>

          <div className="items-start gap-4 w-full hover:scale-105 transition-transform duration-300 ease-in-out">
            <Link
              href="/school-fees"
              className="text-sudo text-3xl font-medium hover:text-orange relative group transition-all duration-500 ease-in-out"
            >
              <div className="mb-6 relative w-full h-[200px] hover:brightness-90 transition-brightness duration-300 ease-in-out">
                <Image
                  src="/school-fees.jpg"
                  alt="School Fees"
                  layout="fill"
                  className="object-cover "
                />
              </div>
              School Fees
              <div className="flex items-center w-1/12">
                <div className="w-6 bg-orange h-px mt-2"></div>
                <span className="absolute transform -translate-x-1/2 mt-2 rounded-full transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100 w-10 flex justify-end ml-3">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.18194 4.18185C6.35767 4.00611 6.6426 4.00611 6.81833 4.18185L9.81833 7.18185C9.90272 7.26624 9.95013 7.3807 9.95013 7.50005C9.95013 7.6194 9.90272 7.73386 9.81833 7.81825L6.81833 10.8182C6.6426 10.994 6.35767 10.994 6.18194 10.8182C6.0062 10.6425 6.0062 10.3576 6.18194 10.1819L8.86374 7.50005L6.18194 4.81825C6.0062 4.64251 6.0062 4.35759 6.18194 4.18185Z"
                      fill="#FF6600"
                      fillRule="evenodd"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </span>
              </div>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default locationPage;
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unescaped-entities */
"use client";

import Image from "next/image";
import Link from "next/link";
import learning from "@public/Learning.svg";
import { motion, AnimatePresence, useAnimationControls } from "framer-motion";
import { useState, useEffect, useRef } from "react";

const Learning = () => {
  const controls = useAnimationControls();
  const [isHovered, setIsHovered] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          controls.start({
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeInOut" },
          });
        } else {
          controls.start({
            opacity: 0,
            y: 20,
            transition: { duration: 0.8, ease: "easeInOut" },
          });
        }
      },
      { threshold: 0.3 } // Adjust threshold as needed
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <div className="container mx-auto py-4 mt-16 px-4 tablet:px-8 laptop:px-16 desktop:px-32 2xl:px-64 relative" ref={sectionRef}>
      <div className="flex flex-col items-center justify-center gap-8 tablet:flex-row tablet:items-start">
        <motion.div
          className="flex flex-col tablet:flex-row items-center tablet:items-start"
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <div className="tablet:w-1/2 px-4 mb-8 tablet:mb-0">
            <motion.h1
              className="text-4xl font-bold text-sudo mb-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
            >
              Learning.
            </motion.h1>
            <motion.p
              className="text-lg text-sudo2 mb-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut", delay: 0.4 }}
            >
              At Ismail British International School, learning is a joyous
              adventure! We believe in engaging primary kids through playful
              activities, hands-on experiences, and small class sizes to ensure
              individual attention and personalized learning. Imagine building a
              fort to learn math, dancing to remember history, or creating art to
              express understanding! Come visit us and see our vibrant learning
              community in action. We can't wait to welcome your child!
            </motion.p>
            <Link
              href="/admissions"
              className="text-sudo text-base font-medium hover:text-orange relative group transition-all duration-300 ease-in-out"
            >
              Enroll now
              <div className="flex items-center w-1/12">
                <div className="w-6 bg-orange h-px mt-2"></div>
                <span className="absolute transform -translate-x-1/2 mt-2 rounded-full transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100 w-10 flex justify-end ml-3">
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
          {/* Education as background element */}
          <div className="flex items-end justify-end py-18 mt-8 px-14 ">
            {" "}
            {/*  z-0 for the background */}
            <Image src={learning} alt="" width={230} height={230} />
          </div>
        </motion.div>
      </div>

      {/* Links Section */}
      <div className="container mt-8 mx-auto py-4 px-4 relative">
        <motion.h2
          className="text-3xl font-black text-center items-center text-sudo mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut", delay: 0.8 }}
        >
          Discover More
          <div className="flex mt-2 justify-center items-center">
            <div className="w-28 bg-orange h-0.5"></div>
            <div className="w-28 bg-grey h-0.5"></div>
          </div>
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-2 gap-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut", delay: 1 }}
        >
          <div className="items-start gap-4 hover:scale-105 transition-transform duration-300 ease-in-out">
            <Link
              href="/location"
              className="text-sudo text-3xl font-medium hover:text-orange relative group transition-all duration-500 ease-in-out"
            >
              <div className="mb-6 relative w-full h-[200px] hover:brightness-90 transition-brightness duration-300 ease-in-out">
                <Image
                  src="/map.jpg"
                  alt="School Fees"
                  layout="fill"
                  className="object-cover"
                />
              </div>
              Location
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

          <div className="items-start gap-4 hover:scale-105 transition-transform duration-300 ease-in-out">
            <Link
              href="#"
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
              href="#"
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

export default Learning;
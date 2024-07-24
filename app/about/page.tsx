/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/no-unescaped-entities */
"use client";

import React, { useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import aboutImage from "@public/slider3.jpg";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

// export const metadata: Metadata = {
//   title: "About Ismael British International School | A World-Class Education", 
//   description: "Discover the heart of Ismael British International School: our mission, vision, values, and commitment to providing a world-class education for students of all ages. Learn about our unique learning environment and why we are the school of choice for families in the region.",
//   metadataBase: new URL("https://www.Ismaelbritishschool.com/about"), 
//   openGraph: {
//     title: "About Ismael British International School | A World-Class Education",
//     url: "https://www.Ismaelbritishschool.com/about",
//     description: "Discover the heart of Ismael British International School: our mission, vision, values, and commitment to providing a world-class education for students of all ages. Learn about our unique learning environment and why we are the school of choice for families in the region.",
//     images: "https://www.Ismaelbritishschool.com/images/about_page_og.jpg", // Replace with your actual OG image URL for the about page
//     site_name: "Ismael British International School",
//   },
// };

const aboutPage = () => {
  const [showMore, setShowMore] = useState(false);
  const [coreValues, setCoreValues] = useState([
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

  // Animation controls for "Our Story" section
  const controlsStory = useAnimation();
  const [refStory, inViewStory] = useInView({ threshold: 0.5 });

  useEffect(() => {
    if (inViewStory) {
      controlsStory.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeInOut", staggerChildren: 0.2 },
      });
    }
  }, [controlsStory, inViewStory]);

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

  // Animation controls for "Why Choose Us?" section
  const controlsWhyChooseUs = useAnimation();
  const [refWhyChooseUs, inViewWhyChooseUs] = useInView({ threshold: 0.5 });

  useEffect(() => {
    if (inViewWhyChooseUs) {
      controlsWhyChooseUs.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeInOut", staggerChildren: 0.2 },
      });
    }
  }, [controlsWhyChooseUs, inViewWhyChooseUs]);

  return (
    <>
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
                  src={aboutImage}
                  alt=""
                  fill
                  sizes="100vm"
                  className="object-cover"
                />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-t from-black to-black/20" />{" "}
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
                  Our Story.
                </motion.h1>
                <motion.h2
                  className="text-lg laptop:text-xl desktop:text-2xl font-medium text-orange backdrop-blur-sm rounded-md px-2 bg-white/10"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeInOut", delay: 0.4 } }}
                >
                  Welcome to Ismael British International School.
                </motion.h2>
              </motion.div>
              <div className="absolute bottom-10 mt-4 font-semibold text-xs text-orange z-0">
                <p>Meet Our Faculty | Alumni | Donations | Contact Us</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <main className="container mx-auto py-4 px-4 tablet:px-8 laptop:px-16 desktop:px-32 2xl:px-64 mt-6">
        <div className="flex flex-col items-start text-start" ref={refStory}>
          <motion.h1
            className="text-5xl font-bold text-sudo mb-3"
            initial={{ opacity: 0, y: 20 }}
            animate={controlsStory}
          >
            Our Story
          </motion.h1>
          <motion.div
            className="flex items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={controlsStory}
          >
            <div className="w-28 bg-orange h-0.5"></div>
            <div className="w-28 bg-grey h-0.5"></div>
          </motion.div>
        </div>

        <div className="mt-12">
          <motion.h2
            className="text-3xl font-bold mb-4 flex justify-start text-sudo text-start"
            initial={{ opacity: 0, y: 20 }}
            animate={controlsStory}
          >
            Who is Ismael British International School?
          </motion.h2>
          <motion.p
            className="text-lg mb-6 flex justify-start text-wrap text-sudo2 tablet:px-18 laptop:px-1"
            initial={{ opacity: 0, y: 20 }}
            animate={controlsStory}
          >
            Ismael British International School stands as a beacon of educational
            excellence, dedicated to shaping the minds of tomorrow's leaders. With its
            motto, educating global citizens for a changing world. It’s located in
            Gudele One opposite Nile Petroleum Juba South Sudan. The school embodies a
            commitment to fostering a community of individuals equipped with the
            knowledge, skills, and mindset to thrive in an evolving world.
          </motion.p>

          <div className="mt-8 justify-start text-start">
            <motion.h3
              className="text-xl font-bold text-sudo2 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={controlsStory}
            >
              Ismael British International School: A Journey of Excellence
            </motion.h3>
            {showMore && (
              <motion.p
                className="flex justify-start text-lg text-sudo2 mb-6 text-wrap laptop:px-1"
              >
                Our school is built on a foundation of academic rigor, fostering a love
                for learning, and nurturing well-rounded individuals. We believe in
                providing a supportive and inclusive environment where every student can
                flourish.
              </motion.p>
            )}
          </div>
          <div className="flex justify-start items-center">
            <motion.button
              onClick={handleShowMore}
              className="text-sudo text-base font-medium hover:text-orange relative group transition-all duration-300 ease-in-out"
              initial={{ opacity: 0, y: 20 }}
              animate={controlsStory}
            >
              {showMore ? "Read Less" : "Read More"}
              <div className="flex items-center">
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
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </span>
              </div>
            </motion.button>
          </div>
        </div>

        <div className="mt-32 py-4" ref={refMissionVision}>
          <motion.h1
            className="text-4xl font-medium text-sudo flex justify-center text-center mb-2"
            initial={{ opacity: 0, y: 20 }}
            animate={controlsMissionVision}
          >
            Mission and Vision
          </motion.h1>
          <div className="grid grid-cols-1 tablet:grid-cols-2 gap-16">
            <div className="p-8 tablet:px-0 laptop:px-1 desktop:px-1">
              <motion.h2
                className="text-2xl font-bold mb-3 text-sudo2"
                initial={{ opacity: 0, y: 20 }}
                animate={controlsMissionVision}
              >
                Missions
                <div className="flex items-center mt-1">
                  <div className="w-20 bg-orange h-0.5"></div>
                  <div className="w-20 bg-grey h-0.5"></div>
                </div>
              </motion.h2>
              <motion.p
                className="text-lg mb-6 text-sudo2 text-wrap"
                initial={{ opacity: 0, y: 20 }}
                animate={controlsMissionVision}
              >
                Ismael British International School is dedicated to excellence -
                striving to ensure that learners will become: inspire in diverse
                community of learners to take a proactive role as responsible
              </motion.p>
            </div>
            <div className="relative flex justify-end items-center desktop:px-1 tablet:px-0">
              <Image
                src="/mission.svg"
                alt="Ismael British International School"
                width={180}
                height={180}
                className="max-w-full tablet:max-w-md" // Add max-width for responsiveness
              />
            </div>
          </div>

          <div className="grid grid-cols-1 tablet:grid-cols-2 gap-16 mt-6">
            <div className="relative tablet:px-0 desktop:px-1 flex  items-center">
              <Image
                src="/vision.svg"
                alt="Ismael British International School"
                width={230}
                height={230}
                className="max-w-full tablet:max-w-md" // Add max-width for responsiveness
              />
            </div>
            <div className="p-8 desktop:px-1 tablet:px-0">
              <motion.h2
                className="text-2xl font-bold mb-3 text-sudo2"
                initial={{ opacity: 0, y: 20 }}
                animate={controlsMissionVision}
              >
                Vision
                <div className="flex items-center mt-1">
                  <div className="w-20 bg-orange h-0.5"></div>
                  <div className="w-20 bg-grey h-0.5"></div>
                </div>
              </motion.h2>
              <motion.p
                className="text-lg mb-6 text-sudo2 text-wrap"
                initial={{ opacity: 0, y: 20 }}
                animate={controlsMissionVision}
              >
                To prepare today learners to confidently embrace challenges as
                adaptable, empathetic global citizens who will be active contributors
                for a more sustainable world.
              </motion.p>
            </div>
          </div>
        </div>

        <div className="mt-16 tablet:px-0 laptop:px-1 desktop:px-1" ref={refValues}>
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
          className="text-3xl font-bold text-center text-sudo mt-16 mb-3"
          initial={{ opacity: 0, y: 20 }}
          animate={controlsWhyChooseUs}
        >
          Why Choose Us?
        </motion.h2>
        <motion.div
          className="flex justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={controlsWhyChooseUs}
        >
          <div className="w-28 bg-orange h-0.5"></div>
          <div className="w-28 bg-grey h-0.5"></div>
        </motion.div>

        <div className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 mt-16 gap-8" ref={refWhyChooseUs}>
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
              className="bg-white p-6 border border-neutral-300 rounded-md shadow-md hover:shadow-lg hover:border-orange-500 transition-shadow duration-300 ease-in-out"
              initial={{ opacity: 0, y: 20 }}
              animate={controlsWhyChooseUs}
            >
              <div className="flex justify-center">
                <div className="w-16 h-16 rounded-full border border-orange-500 flex items-center justify-center mb-4 hover:scale-110 transition-all duration-200">
                  <Image src={item.icon} alt={item.title} width={50} height={50} />
                </div>
              </div>
              <motion.h3
                className="text-xl text-sudo text-center font-bold mb-2"
                initial={{ opacity: 0, y: 20 }}
                animate={controlsWhyChooseUs}
              >
                {item.title}
              </motion.h3>
              <motion.p
                className="text-center text-sudo2"
                initial={{ opacity: 0, y: 20 }}
                animate={controlsWhyChooseUs}
              >
                {item.description}
              </motion.p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <Link href="/contact">
            <button className="border border-orange hover:bg-orange hover:text-white text-sudo font-bold py-2 px-4 rounded-sm">
              Contact Us
            </button>
          </Link>
        </div>
      </main>
    </>
  );
};

export default aboutPage;
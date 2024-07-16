/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import admin from "@public/admin.jpg";
import Link from "next/link";
import { motion, AnimatePresence, useAnimationControls } from "framer-motion";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const newsAndEventsPage = () => {
  const [selectedTab, setSelectedTab] = useState("All");
  const [articles, setArticles] = useState<
    {
      title: string;
      date: string;
      image: string;
      category: string;
      link: string;
    }[]
  >([
    {
      title: "More than a game: the rise of Esports in",
      date: "08/05/2024",
      image: "/slider1.jpg",
      category: "News",
      link: "/events/house-cross-country-carnival-2024",
    },
    {
      title:
        "Schools put aside fear to harness artificial intelligence for good",
      date: "30/04/2024",
      image: "/slider4.jpg",
      category: "News",
      link: "/events/house-cross-country-carnival-2024",
    },
    {
      title:
        "Liam Bassett has been named as one of The Educator Rising Stars 2024",
      date: "16/04/2024",
      image: "/admin.jpg",
      category: "Events",
      link: "/events/house-cross-country-carnival-2024",
    },
    {
      title: "Article Title 4",
      date: "05/05/2024",
      image: "/slider2.jpg",
      category: "Events",
      link: "/events/house-cross-country-carnival-2024",
    },
    {
      title: "Article Title 5",
      date: "20/04/2024",
      image: "/classroom.jpg",
      category: "Events",
      link: "/events/house-cross-country-carnival-2024",
    },
    {
      title: "Article Title 6",
      date: "10/04/2024",
      image: "/location.jpg",
      category: "Events",
      link: "/events/house-cross-country-carnival-2024",
    },
  ]);
  const [activeTab, setActiveTab] = useState(0);
  const tabControls = useAnimationControls();
  const articleControls = useAnimationControls();
  const sectionRef = useRef(null);
  const tabsRef = useRef(null);

  useEffect(() => {
    // Start the initial animation for the tabs
    tabControls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeInOut" },
    });
  }, []);

  useEffect(() => {
    // Start the initial animation for the articles
    articleControls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeInOut" },
    });
  }, []);

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

  const handleTabChange = (tab: React.SetStateAction<number>) => {
    setActiveTab(tab);
    setSelectedTab(tab === 0 ? "All" : tab === 1 ? "News" : "Events");
    // No need to filter articles here, as the filter is applied in the render
  };

  return (
    <>
      {/* Hero Section with Image and Text */}
      <div className="relative flex justify-center items-center">
        <div className="h-[500px] overflow-hidden w-full">
          <div className="w-screen h-full flex flex-col gap-16 desktop:flex-row relative">
            {/* TEXT CONTAINER */}
            <div className="absolute inset-0 z-10 flex flex-col items-start justify-end gap-8 2xl:gap-12 text-left px-6 tablet:px-12 laptop:px-20 desktop:px-32 pb-20">
              <div className="flex flex-col desktop:flex-col desktop:items-start laptop:w-full">
                <motion.h1
                  className="text-3xl laptop:text-6xl desktop:text-6xl font-black text-white backdrop-blur-sm rounded-md px-2 mb-6 bg-white/10"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                  News & Events.
                </motion.h1>
                <motion.h2
                  className="text-lg laptop:text-xl desktop:text-2xl font-medium text-orange backdrop-blur-sm rounded-md px-2 bg-white/10"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                  Welcome to Ismail British International School.
                </motion.h2>
              </div>
              <div className="absolute bottom-10 mt-4 font-semibold text-xs text-orange z-0">
                <p>Meet Our Faculty | Alumni | Donations | Contact Us</p>
              </div>
            </div>

            {/* IMAGE CONTAINER */}
            <div className='absolute inset-0 z-0'>
              <motion.div
                ref={ref}
                animate={controls}
                className='absolute inset-0 z-0'>
                <Image
                  src={admin}
                  alt=''
                  fill
                  sizes='100vm'
                  className='object-cover'
                />
              </motion.div>
              <div className='absolute inset-0 bg-gradient-to-t from-black to-black/20' />{" "}
              {/* Black gradient */}
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto py-16 px-4 tablet:px-8 laptop:px-16 desktop:px-32 2xl:px-64 relative" ref={sectionRef}> {/* Add spacing between header and tabs */}
        <motion.div className="tabs flex gap-4 mb-8" ref={tabsRef} initial={{ opacity: 0, y: 20 }} animate={tabControls} transition={{ duration: 0.8, ease: "easeInOut" }}>
          <button
            className={`tab px-4 py-2 border rounded-md ${activeTab === 0 ? "bg-gray-200" : "hover:bg-gray-200"
              }`}
            onClick={() => handleTabChange(0)} // Pass the tab index
          >
            All
          </button>
          <button
            className={`tab px-4 py-2 border rounded-md ${activeTab === 1 ? "bg-gray-200" : "hover:bg-gray-200"
              }`}
            onClick={() => handleTabChange(1)} // Pass the tab index
          >
            News
          </button>
          <button
            className={`tab px-4 py-2 border rounded-md ${activeTab === 2 ? "bg-gray-200" : "hover:bg-gray-200"
              }`}
            onClick={() => handleTabChange(2)} // Pass the tab index
          >
            Events
          </button>
        </motion.div>

        <motion.div className="articles py-12 grid grid-cols-1 gap-8 tablet:grid-cols-3 laptop:grid-cols-3" initial={{ opacity: 0, y: 20 }} animate={articleControls} transition={{ duration: 0.8, ease: "easeInOut" }}>
          {/* Filter articles based on selectedTab */}
          {articles.filter((article) => {
            if (selectedTab === "All") {
              return true; // Show all articles
            } else {
              return article.category === selectedTab; // Show only matching category
            }
          }).map((article, index) => (
            <Link key={article.title} href={article.link}>
              <motion.div
                key={article.title}
                className="article overflow-hidden hover:underline hover:text-orange-500"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: "easeInOut", delay: index * 0.1 }}
              >
                <Image
                  src={article.image}
                  alt={article.title}
                  layout="responsive"
                  width={200}
                  height={200}
                  className="object-cover"
                />
                <div className="mt-8">
                  <h3 className="text-2xl text-start font-normal text-sudo">
                    {article.title}
                  </h3>
                  <p className="text-base font-normal mt-2 text-gray-600">
                    {article.date}
                  </p>
                </div>
              </motion.div>
            </Link>
          ))}
        </motion.div>
      </div>

      {/* Links Section */}
      <div className="container mx-auto px-4 tablet:px-8 laptop:px-16 desktop:px-32 2xl:px-64 relative">
        <h2 className="text-3xl font-black text-center items-center text-sudo mb-10">
          Discover More
          <div className="flex mt-2 justify-center items-center">
            <div className="w-28 bg-orange h-0.5"></div>
            <div className="w-28 bg-grey h-0.5"></div>
          </div>
        </h2>

        <div className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-2 gap-12">
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

          <div className="items-start gap-4 w-full hover:scale-105 transition-transform duration-300 ease-in-out">
            <Link
              href="/academics"
              className="text-sudo text-3xl font-medium hover:text-orange relative group transition-all duration-500 ease-in-out"
            >
              <div className="mb-6 relative w-full h-[200px] hover:brightness-90 transition-brightness duration-300 ease-in-out">
                <Image
                  src="/academics.jpg"
                  alt="School Fees"
                  layout="fill"
                  className="object-cover "
                />
              </div>
              School Programs
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
        </div>
      </div>
    </>
  );
};

export default newsAndEventsPage;
"use client";

import Image from "next/image";
import React, { useState } from "react";

const FeaturedPrograms = () => {
  const programs = [
    {
      title: "Computer Science",
      description:
        "At Ismael British International School, education extends beyond the confines of textbooks and classrooms.",
      image: "/academics.jpg",
    },
    {
      title: "Music Education",
      description:
        "At Ismael British International School, education extends beyond the confines of textbooks and classrooms.",
      image: "/slider2.jpg",
    },
    {
      title: "Art & Design",
      description:
        "At Ismael British International School, education extends beyond the confines of textbooks and classrooms.",
      image: "/slider4.jpg",
    },
    {
      title: "Drama & Theatre",
      description:
        "At Ismael British International School, education extends beyond the confines of textbooks and classrooms.",
      image: "/slider1.jpg",
    },
  ];

  const [activeProgramIndex, setActiveProgramIndex] = useState(0);

  const handleNext = () => {
    setActiveProgramIndex((prevIndex) =>
      prevIndex === programs.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setActiveProgramIndex((prevIndex) =>
      prevIndex === 0 ? programs.length - 1 : prevIndex - 1
    );
  };

  const activeProgram = programs[activeProgramIndex];
  const nextProgram = programs[(activeProgramIndex + 1) % programs.length];

  return (
    <div className='container mx-auto py-16 px-4 tablet:px-8 laptop:px-16 desktop:px-32 2xl:px-64'>
      <h2 className='text-3xl font-bold text-center text-sudo mb-3'>
        Our Featured Programs
      </h2>
      <div className='flex justify-center items-center mb-8'>
        <div className='w-40 bg-orange h-0.5'></div>
        <div className='w-40 bg-grey h-0.5'></div>
      </div>

      {/* Program Preview */}
      <h3 className='text-lg text-center font-bold text-blue text-left mb-2'>
        {activeProgram.title}
      </h3>
      <div className='relative flex justify-center items-center'>
        <div className='relative w-full max-w-xl overflow-hidden rounded-lg shadow-lg'>
          {" "}
          {/* Reduced container width */}
          <Image
            src={activeProgram.image}
            alt={activeProgram.title}
            layout='responsive'
            width={1280} // Reduced width, adjust based on your needs
            height={720} // Reduced height, adjust based on your needs
            objectFit='cover'
            className='transition-transform duration-500 ease-in-out'
            priority
          />
          {/* Overlay for Text and Buttons */}
          <div className='absolute bottom-0 left-0 bg-black bg-opacity-60 flex flex-col justify-start items-start text-white z-0 transition-opacity duration-500 ease-in-out p-4'>
            {/* Bottom-left alignment with padding */}
            <h3 className='text-lg font-semibold text-left mb-3'>
              {activeProgram.title}
            </h3>
            <p className='text-base font-medium text-left mb-6'>
              {activeProgram.description}
            </p>
            <div className='flex space-x-4'>
              <button
                onClick={handlePrev}
                className='bg-gray-300 hover:bg-orange-200 text-gray-800 font-bold py-2 px-4 rounded-l-lg'>
                <svg
                  width='20'
                  height='20'
                  viewBox='0 0 15 15'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M8.81809 4.18179C8.99383 4.35753 8.99383 4.64245 8.81809 4.81819L6.13629 7.49999L8.81809 10.1818C8.99383 10.3575 8.99383 10.6424 8.81809 10.8182C8.64236 10.9939 8.35743 10.9939 8.1817 10.8182L5.1817 7.81819C5.09731 7.73379 5.0499 7.61933 5.0499 7.49999C5.0499 7.38064 5.09731 7.26618 5.1817 7.18179L8.1817 4.18179C8.35743 4.00605 8.64236 4.00605 8.81809 4.18179Z'
                    fill='currentColor'
                    fill-rule='evenodd'
                    clip-rule='evenodd'></path>
                </svg>
              </button>
              <button
                onClick={handleNext}
                className='bg-gray-300 hover:bg-orange-200 text-gray-800 font-bold py-2 px-4 rounded-r-lg'>
                <svg
                  width='20'
                  height='20'
                  viewBox='0 0 15 15'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M6.18194 4.18185C6.35767 4.00611 6.6426 4.00611 6.81833 4.18185L9.81833 7.18185C9.90272 7.26624 9.95013 7.3807 9.95013 7.50005C9.95013 7.6194 9.90272 7.73386 9.81833 7.81825L6.81833 10.8182C6.6426 10.994 6.35767 10.994 6.18194 10.8182C6.0062 10.6425 6.0062 10.3576 6.18194 10.1819L8.86374 7.50005L6.18194 4.81825C6.0062 4.64251 6.0062 4.35759 6.18194 4.18185Z'
                    fill='currentColor'
                    fill-rule='evenodd'
                    clip-rule='evenodd'></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPrograms;

'use client';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

const Welcome = () => {
  // Animation controls for the "View Admission Process" link
  const controlsAdmissionLink = useAnimation();
  const [refAdmissionLink, inViewAdmissionLink] = useInView({ threshold: 0.5 });

  useEffect(() => {
    if (inViewAdmissionLink) {
      controlsAdmissionLink.start({
        opacity: 1,
        scale: 1, // Default scale to 1
        transition: {
          duration: 0.8,
          ease: 'easeInOut',
        },
      });
    }
  }, [controlsAdmissionLink, inViewAdmissionLink]);

  // Animation controls for the content sections
  const controlsContent = useAnimation();
  const [refContent, inViewContent] = useInView({ threshold: 0.5 });

  useEffect(() => {
    if (inViewContent) {
      controlsContent.start({
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.9,
          ease: 'easeInOut',
          staggerChildren: 0.2, // Stagger the animations of child elements
        },
      });
    }
  }, [controlsContent, inViewContent]);

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-no-repeat">
      <Image
        src="/slider3.jpg"
        alt="Blurred background"
        layout="fill"
        className="blur-sm"
        priority={true} // Load the image quickly
      />
      <div className="absolute inset-0 bg-black opacity-60" />{' '}
      {/* Semi-transparent overlay */}
      <div className="container mx-auto tablet:px-16 desktop:px-32 py-4 mb-12 z-0" ref={refContent}>
        <motion.h1
          className="text-4xl font-bold text-center mb-8 mt-8 text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={controlsContent}
        >
          Welcome to Ismael International School
        </motion.h1>

        <div className="grid grid-cols-1 tablet:grid-cols-2 gap-8" ref={refContent}>
          <motion.div
            className=""
            initial={{ opacity: 0, y: 20 }}
            animate={controlsContent}
          >
            <Image
              src="/slider1.jpg"
              alt="Educational approach"
              width={500}
              height={200}
              className="rounded-md mb-4 mt-4 object-cover"
            />
            <div className="bg-transparent bg-white/10 border border-gray-600 rounded-md hover:border-gray-400 duration-300 ease-in-out p-6">
              <div className="flex items-center">
                <motion.h2
                  className="text-xl text-white font-bold mb-4 flex-grow"
                  initial={{ opacity: 0, y: 20 }}
                  animate={controlsContent}
                >
                  Educational Approach
                </motion.h2>{' '}
                {/* Add flex-grow to make it fill available space */}
                <div className="w-12 h-12 rounded-full border border-gray-400 flex items-center justify-center mb-4 hover:scale-110 hover:bg-gray-400 transition-all duration-200">
                  <Image
                    src="/school.png"
                    alt=""
                    width={30}
                    height={30}
                  />
                </div>
              </div>
              <motion.p
                className="text-white mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={controlsContent}
              >
                At Ismael British International School, education extends beyond the
                confines of textbooks and classrooms. The curriculum is designed to
                empower learners with a global perspective, fostering critical thinking,
                problem-solving, and collaboration skills.
              </motion.p>
            </div>
          </motion.div>

          <motion.div
            className=""
            initial={{ opacity: 0, y: 20 }}
            animate={controlsContent}
          >
            <Image
              src="/slider4.jpg"
              alt="Global citizenship"
              width={500}
              height={200}
              className="rounded-md mb-4 mt-4 object-cover"
            />
            <div className="bg-transparent bg-white/10 border border-gray-600 rounded-md hover:border-gray-400 duration-300 ease-in-out p-6">
              <div className="flex items-center">
                <motion.h2
                  className="text-xl text-white font-bold mb-4 flex-grow"
                  initial={{ opacity: 0, y: 20 }}
                  animate={controlsContent}
                >
                  Global citizenship
                </motion.h2>{' '}
                {/* Add flex-grow to make it fill available space */}
                <div className="w-12 h-12 rounded-full border border-gray-400 flex items-center justify-center mb-4 hover:scale-110 hover:bg-gray-400 transition-all duration-200">
                  <Image
                    src="/school.png"
                    alt=""
                    width={30}
                    height={30}
                  />
                </div>
              </div>
              <motion.p
                className="text-white mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={controlsContent}
              >
                Central to the ethos of Ismael British International School is the
                concept of global citizenship. Learners are instilled with
                responsibility towards their local and global communities, nurturing
                empathy, compassion, and a commitment to social justice.
              </motion.p>
            </div>
          </motion.div>
        </div>

        <div className="flex justify-center mt-12 items-center" ref={refAdmissionLink}>
          <motion.div
            animate={controlsAdmissionLink}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
          >
            <Link
              href="/admissions-process"
              className="text-white text-lg font-medium hover:text-orange relative group transition-all duration-300 ease-in-out"
            >
              View Admission Process
              <div className="flex items-center w-10">
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
          </motion.div>
        </div>

        <motion.h2
          className="text-4xl font-black text-center mt-16 text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={controlsContent}
        >
          Ismael British International School
        </motion.h2>
      </div>
    </div>
  );
};

export default Welcome;
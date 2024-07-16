import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import notfound from "@public/page-not-found.svg";

export const metadata: Metadata = {
  title: "Error 404",
};

const NotFound = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen bg-gray-100'>
      <h1 className='text-4xl font-bold text-gray-800 mb-4'>
        404 - Page Not Found
      </h1>
      <p className='text-lg text-gray-600 mb-6'>
        The page you are looking for could not be found.
      </p>

      {/* Not Found Image - Responsive with Tailwind */}
      <div className='relative mt-2 mb-8'>
        <Image
          src={notfound}
          alt='Not Found'
          width={450}
          height={450}
          className='object-contain max-w-full'
        />
      </div>

      <Link href='/'>
        <div className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
          Go back to Homepage
        </div>
      </Link>
    </div>
  );
};

export default NotFound;

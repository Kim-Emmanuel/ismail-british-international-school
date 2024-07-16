"use client"

import Image from 'next/image';
import React from 'react'

const whyChooseUs = () => {
  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Why Choose Us?</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: '/palette.svg',
              title: 'Customizable',
              description:
                'We build our templates for speed in mind, for super-fast load times so your customers never waver',
            },
            {
              icon: '/lightning.svg',
              title: 'Fast Performance',
              description:
                'We build our templates for speed in mind, for super-fast load times so your customers never waver.',
            },
            {
              icon: '/ruler.svg',
              title: 'Fully Featured',
              description:
                'Everything you need to succeed and launch your landing page, right out of the box. No need to install anything else.',
            },
          ].map((item, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-md shadow-md">
              <div className="w-16 h-16 rounded-full bg-blue-500 flex items-center justify-center mb-4">
                <Image
                  src={item.icon}
                  alt={`${item.title} Icon`}
                  className="h-6 w-6 text-white"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-400 text-center">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default whyChooseUs

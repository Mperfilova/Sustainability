'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function OurIdea() {
  return (
    <main className="min-h-screen bg-white py-16">
      <div className="container mx-auto px-4">
        <Link href="/" className="text-blue-500 hover:text-blue-600 mb-8 inline-block">
          ← Back to Home
        </Link>
        
        {/* Header with icons */}
        <div className="flex justify-between items-center mb-12">
          <div className="w-8 h-8">
            <Link href="/">
              <span className="text-2xl">🏠</span>
            </Link>
          </div>
          <div className="bg-[#FFE5B4] px-8 py-3 rounded-lg shadow-md">
            <h1 className="text-2xl font-bold text-center">OUR IDEA</h1>
          </div>
          <div className="w-8 h-8">
            <span className="text-2xl">🌱</span>
          </div>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Important Note - Styled as a sticky note */}
          <div className="sticky-note mb-4">
            <div className="bg-yellow-100 p-4 rounded-lg shadow-md transform rotate-2 max-w-xs ml-auto">
              <p className="text-gray-600 italic">
                It is very important to know our company&apos;s idea and point!
              </p>
            </div>
          </div>
            
          {/* Company Information */}
          <div className="bg-white border-2 border-gray-200 rounded-lg p-6 mb-8">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-yellow-200 rounded-full flex items-center justify-center">
                <span className="font-bold">1</span>
              </div>
              <div>
                <p className="text-gray-800">
                  The name of our company is &quot;VIDES AIZSARGĀJUMS LATVIJĀ&quot;. We choose a relevant environment problem and created a solution to it.
                </p>
              </div>
            </div>
          </div>

          {/* Project Details */}
          <div className="bg-white border-2 border-gray-200 rounded-lg p-6 mb-16">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-yellow-200 rounded-full flex items-center justify-center">
                <span className="font-bold">2</span>
              </div>
              <div>
                <p className="text-gray-800">
                  Our project idea is focused on reducing water and sea pollution in Latvia. We want to raise awareness about this issue by creating posters and videos for social media. We also plan to organize coastal clean-up events with students and suggest using fewer single-use plastics.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Map Section */}
          <div className="relative">
            {/* Contact Note - Styled as a sticky note */}
            <div className="sticky-note mb-4">
              <div className="bg-white border-2 border-gray-200 p-3 rounded-lg shadow-md transform -rotate-1 max-w-xs ml-auto">
                <p className="text-gray-600">Here is location of our office and contact!</p>
              </div>
            </div>
            <div className="max-w-lg mx-auto h-[200px] relative rounded-lg overflow-hidden">
              <Image
                src="/images/map.jpg"
                alt="Office Location Map"
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-lg"
              />
              <div className="absolute bottom-4 left-4 bg-white px-4 py-2 rounded shadow">
                <p className="font-semibold">Bruņinieku iela 52</p>
                <p className="text-sm text-gray-600">@SUSTAINABILITYLATVIA</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 
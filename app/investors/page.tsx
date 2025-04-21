'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Investors() {
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
          <div className="bg-blue-200 px-8 py-3 rounded-lg shadow-md">
            <h1 className="text-2xl font-bold text-center">OUR INVESTORS(USER)</h1>
          </div>
          <div className="w-8 h-8">
            <span className="text-2xl">👥</span>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* User Description Box */}
          <div className="bg-yellow-100 p-6 rounded-lg shadow-md mb-12 max-w-2xl mx-auto text-center">
            <p className="text-gray-800">
              USER is a person who will use our site. This person can be literally anyone, because no matter who will use the site, it will help our country and society. Many of our users are also our investors so here is all the information you need to
            </p>
          </div>

          <div className="text-center mb-8">
            <h2 className="text-xl font-semibold inline-block border-2 border-gray-300 rounded-full px-6 py-2">
              HERE ARE OUR MAIN INVESTORS
            </h2>
          </div>

          {/* Investors Grid */}
          <div className="grid grid-cols-1 gap-12">
            {/* Investor 1 */}
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-64 h-64 relative rounded-lg overflow-hidden">
                <Image
                  src="/images/fisherman.jpg"
                  alt="Fisherman Jānis Krūmale"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="flex-1 bg-white border-2 border-gray-200 rounded-lg p-6">
                <p className="text-gray-800">
                  Fisherman Jānis Krūmale, 67 years old, is a successful investor with extensive experience. He understands that the health of nature is directly related to his ability to work in the future, which is why he helps our company
                </p>
              </div>
            </div>

            {/* Investor 2 */}
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-64 h-64 relative rounded-lg overflow-hidden">
                <Image
                  src="/images/businessman.jpg"
                  alt="Businessman Ojars Ozoliņš"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="flex-1 bg-white border-2 border-gray-200 rounded-lg p-6">
                <p className="text-gray-800">
                  Businessman Ojars Ozoliņš, 35 years old. Owns an environmental protection company in Latvia and helps small businesses that are beneficial to Latvia and nature.
                </p>
              </div>
            </div>

            {/* Investor 3 */}
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-64 h-64 relative rounded-lg overflow-hidden">
                <Image
                  src="/images/entrepreneur.jpg"
                  alt="Environmental activist Anna Berziņa"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="flex-1 bg-white border-2 border-gray-200 rounded-lg p-6">
                <p className="text-gray-800">
                  Environmental activist and entrepreneur Anna Berziņa. Owns a sustainable packaging company in Latvia. Anna cares deeply about the environment and believes in supporting young people who are working on real solutions for pollution.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 
'use client';

import React from 'react';
import Link from 'next/link';

export default function HowToHelp() {
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
          <div className="bg-purple-200 px-8 py-3 rounded-lg shadow-md">
            <h1 className="text-2xl font-bold text-center">HOW YOU CAN HELP?</h1>
          </div>
          <div className="w-8 h-8">
            <span className="text-2xl">⭐</span>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Step 1 */}
            <div className="relative">
              <div className="w-12 h-12 bg-yellow-200 rounded-full flex items-center justify-center absolute -left-6 -top-6">
                <span className="font-bold text-xl">1</span>
              </div>
              <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-center border-2 border-gray-300 rounded-full py-2">Join the Movement</h3>
                <div className="space-y-4">
                  <p className="text-gray-800">
                    Spread the word! Share our site on social media with #EcoLatvia – the more people know, the bigger our impact.
                  </p>
                  <p className="text-gray-800">
                    Got friends who care about nature? Bring them onboard – together we&apos;re stronger.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="w-12 h-12 bg-yellow-200 rounded-full flex items-center justify-center absolute -left-6 -top-6">
                <span className="font-bold text-xl">2</span>
              </div>
              <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-center border-2 border-gray-300 rounded-full py-2">Take Action</h3>
                <div className="space-y-4">
                  <p className="text-gray-800">
                    Use our interactive map to find local clean-up events or recycling spots near you. Just open the map, pick a spot, and go!
                  </p>
                  <p className="text-gray-800">
                    Start small: follow our weekly eco-challenges (like &quot;Zero Waste Tuesday&quot;) and track your progress.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative">
              <div className="w-12 h-12 bg-yellow-200 rounded-full flex items-center justify-center absolute -left-6 -top-6">
                <span className="font-bold text-xl">3</span>
              </div>
              <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-center border-2 border-gray-300 rounded-full py-2">Volunteer or Donate</h3>
                <div className="space-y-4">
                  <p className="text-gray-800">
                    Want to do more? Volunteer with us – help organize events, create content, or translate articles. DM us @EcoLatvia_team!
                  </p>
                  <p className="text-gray-800">
                    If you can&apos;t volunteer, donations (even small) keep the site running. Every euro helps – <Link href="/donate" className="text-blue-500 hover:underline">link to donation page</Link>.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="relative">
              <div className="w-12 h-12 bg-yellow-200 rounded-full flex items-center justify-center absolute -left-6 -top-6">
                <span className="font-bold text-xl">4</span>
              </div>
              <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-center border-2 border-gray-300 rounded-full py-2">Share Your Ideas</h3>
                <div className="space-y-4">
                  <p className="text-gray-800">
                    Got a genius eco-hack or a problem we missed? Email us at ideas@ecolatvia.lv – we&apos;ll feature the best solutions on the site!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 
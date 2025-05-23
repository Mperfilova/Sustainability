'use client';

import React from 'react';
import Link from 'next/link';
import { FaHome, FaStar } from 'react-icons/fa';

export default function PurposePage() {
  return (
    <main className="min-h-screen bg-white py-8">
      {/* Header with icons */}
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <Link href="/" className="text-gray-600 hover:text-gray-800">
            <FaHome className="text-2xl" />
          </Link>
          <div className="bg-[#C8B6E2] px-8 py-3 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-center">WHAT&apos;S THE PURPOSE OF THE SITE?</h2>
          </div>
          <div className="text-gray-600">
            <FaStar className="text-2xl" />
          </div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto mt-12">
          <div className="prose max-w-none mb-12">
            <p className="text-lg text-gray-700">
              Our project isn&apos;t just a website—it&apos;s a real way to make Latvia cleaner and greener. We created it so anyone can easily learn about environmental issues and find ways to help, even if they&apos;ve never thought about it before. Our idea is simple: bring together information, solutions, and actions in one place to make protecting nature accessible to everyone. The site is just the beginning, and we believe even small steps can make a big difference. Together, we can save nature for the future! 🌱
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-blue-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-blue-600">Community</h3>
              <p className="text-gray-700">
                You won&apos;t just find info here – you&apos;ll meet people who want to change the world too. Together you can organize events, share tips and motivate each other – because one eco-habit can start a movement.
              </p>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-blue-600">Simplicity</h3>
              <p className="text-gray-700">
                We&apos;ve turned complicated eco-rules into easy steps: recycling maps, checklists and even memes. Now helping nature is as simple as scrolling through your feed.
              </p>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-blue-600">Future</h3>
              <p className="text-gray-700">
                Every small action on our site makes a real difference. Years from now, you&apos;ll see cleaner parks and rivers and know you helped make it happen.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 
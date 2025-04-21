'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { FaUsers, FaCalendarAlt, FaHome } from 'react-icons/fa';
import Link from 'next/link';

export default function Home() {
  const [showDate, setShowDate] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const infoBlocksRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setShowDate(false);
      } else {
        setShowDate(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const scrollToInfoBlocks = (e: React.MouseEvent) => {
    e.preventDefault();
    infoBlocksRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Date Section - Scrolls with content */}
      <div className="relative bg-white/80 backdrop-blur-sm shadow-sm py-4">
        <div className="container mx-auto px-4">
          <div className="flex justify-end">
            <div className="flex items-center gap-2">
              <span className="text-gray-600 text-sm">Today:</span>
              <div className="flex items-center gap-2">
                <input
                  type="date"
                  className="border rounded-md px-2 py-1 text-sm"
                  value={new Date().toISOString().split('T')[0]}
                  readOnly
                />
                <FaCalendarAlt className="text-blue-500" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Title */}
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-[#00008B] mb-8">
          ENVIRONMENT PROTECTION IN LATVIA
        </h1>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-64px)] flex items-center justify-center bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Image on the left */}
            <div className="w-full md:w-1/2 order-2 md:order-1">
              <div className="relative" style={{ width: '267px', height: '240px', margin: '0 auto' }}>
                <Image
                  src="/images/fish.png"
                  alt="Fish swimming in ocean"
                  width={267}
                  height={240}
                  style={{ objectFit: 'contain' }}
                  className="rounded-lg"
                  priority
                />
              </div>
            </div>
            {/* Text on the right */}
            <div className="w-full md:w-1/2 order-1 md:order-2">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">Save the fish!</h1>
              <p className="text-lg text-gray-600 mb-6">
                Join us in our mission to protect marine life and create a sustainable future for our oceans.
              </p>
              <button 
                onClick={scrollToInfoBlocks}
                className="bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* Information Blocks Section */}
      <section ref={infoBlocksRef} className="py-16 bg-blue-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link href="/our-idea" className="block h-full">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow h-full flex flex-col">
                <h3 className="text-xl font-bold mb-4">OUR IDEA</h3>
                <p className="text-gray-600 flex-grow">
                  We aim to create innovative solutions for ocean conservation and sustainable fishing practices.
                </p>
              </div>
            </Link>
            <Link href="/purpose" className="block h-full">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow h-full flex flex-col">
                <h3 className="text-xl font-bold mb-4">WHAT&apos;S THE PURPOSE OF THE SITE?</h3>
                <p className="text-gray-600 flex-grow">
                  To connect investors with sustainable ocean initiatives and raise awareness about marine conservation.
                </p>
              </div>
            </Link>
            <Link href="/how-to-help" className="block h-full">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow h-full flex flex-col">
                <h3 className="text-xl font-bold mb-4">HOW YOU CAN HELP?</h3>
                <p className="text-gray-600 flex-grow">
                  Invest in our projects, spread awareness, or contribute to our conservation efforts.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">ARTICLES ABOUT SUSTAINABILITY</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center">
              <div className="relative h-[100px] w-[200px] mx-auto rounded-lg overflow-hidden mb-4">
                <Image
                  src="/images/environment.png"
                  alt="Environment"
                  width={200}
                  height={100}
                  style={{ objectFit: 'contain', width: '100%', height: '100%' }}
                  className="bg-white"
                />
              </div>
              <Link href="/environment">
                <button className="bg-white border-2 border-black px-6 py-2">ENVIRONMENT</button>
              </Link>
            </div>
            <div className="flex flex-col items-center">
              <div className="relative h-[100px] w-[200px] mx-auto rounded-lg overflow-hidden mb-4">
                <Image
                  src="/images/help.webp"
                  alt="How to Help"
                  width={200}
                  height={100}
                  style={{ objectFit: 'contain', width: '100%', height: '100%' }}
                  className="bg-white"
                />
              </div>
              <Link href="/how-to-help">
                <button className="bg-white border-2 border-black px-6 py-2">HOW TO HELP?</button>
              </Link>
            </div>
            <div className="flex flex-col items-center">
              <div className="relative h-[100px] w-[200px] mx-auto rounded-lg overflow-hidden mb-4">
                <Image
                  src="/images/sustainability.png"
                  alt="Sustainability Word Cloud"
                  width={200}
                  height={100}
                  style={{ objectFit: 'contain', width: '100%', height: '100%' }}
                  className="bg-white"
                />
              </div>
              <Link href="/sustainability">
                <button className="bg-white border-2 border-black px-6 py-2">SUSTAINABILITY</button>
              </Link>
            </div>
            <div className="flex flex-col items-center">
              <div className="relative h-[100px] w-[200px] mx-auto rounded-lg overflow-hidden mb-4">
                <Image
                  src="/images/latvia-flag.png"
                  alt="Latvia Flag"
                  width={200}
                  height={100}
                  style={{ objectFit: 'contain', width: '100%', height: '100%' }}
                  className="bg-white"
                />
              </div>
              <Link href="/about-latvia-article">
                <button className="bg-white border-2 border-black px-6 py-2">ABOUT LATVIA</button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Investors Section */}
      <section className="py-16 bg-gradient-to-r from-blue-500 to-blue-600">
        <div className="container mx-auto px-4">
          <Link href="/investors" className="block">
            <div className="bg-white rounded-xl shadow-2xl p-8 transform hover:scale-[1.02] transition-transform">
              <div className="flex flex-col items-center">
                <div className="flex items-center gap-3 mb-8">
                  <FaUsers className="text-blue-600 text-3xl" />
                  <h2 className="text-3xl font-bold text-blue-600">Our Investors</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
                  <div className="flex flex-col items-center">
                    <div className="relative w-24 h-24 rounded-full overflow-hidden mb-4">
                      <Image
                        src="/images/fisherman.jpg"
                        alt="Fisherman Jānis Krūmale"
                        width={96}
                        height={96}
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <p className="font-semibold text-gray-800">Jānis Krūmale</p>
                    <p className="text-sm text-gray-600">Fisherman</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="relative w-24 h-24 rounded-full overflow-hidden mb-4">
                      <Image
                        src="/images/businessman.jpg"
                        alt="Businessman Ojars Ozoliņš"
                        width={96}
                        height={96}
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <p className="font-semibold text-gray-800">Ojars Ozoliņš</p>
                    <p className="text-sm text-gray-600">Businessman</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="relative w-24 h-24 rounded-full overflow-hidden mb-4">
                      <Image
                        src="/images/entrepreneur.jpg"
                        alt="Environmental Activist Anna Berziņa"
                        width={96}
                        height={96}
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <p className="font-semibold text-gray-800">Anna Berziņa</p>
                    <p className="text-sm text-gray-600">Environmental Activist</p>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Follow Us Section */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center">
            <div className="relative h-[100px] w-[200px] mx-auto rounded-lg overflow-hidden mb-4">
              <Image
                src="/images/ocean.png"
                alt="Ocean View"
                width={200}
                height={100}
                style={{ objectFit: 'contain', width: '100%', height: '100%' }}
                className="bg-white"
              />
            </div>
            <button className="bg-white border-2 border-black px-6 py-2 mb-4">FOLLOW US</button>
            <a 
              href="https://twitter.com/sustainabilitylatvia" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700"
            >
              @SUSTAINABILITYLATVIA
            </a>
          </div>
        </div>
      </section>
    </main>
  );
} 
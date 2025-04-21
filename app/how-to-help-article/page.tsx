'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function HowToHelpArticle() {
  return (
    <main className="min-h-screen relative">
      {/* Background Image */}
      <div className="fixed inset-0 z-0">
        <Image
          src="/images/background.png"
          alt="Background"
          fill
          style={{ objectFit: 'cover' }}
        />
      </div>

      <div className="relative z-10 bg-white/90">
        <div className="container mx-auto px-4 py-16">
          <Link href="/" className="text-blue-500 hover:text-blue-600 mb-8 inline-block">
            ← Back to Home
          </Link>

          <article className="prose max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-8">How Can You Help The Marine Life</h1>
            
            <p>Everyone has a role in addressing climate change, and small actions by regular people can significantly affect the health of marine life. Oceans are deeply affected by climate change, suffering from warming temperatures, acidification, overfishing, and plastic pollution (IPCC, 2019). Individual efforts, though seemingly small, can collectively support the preservation of marine ecosystems.</p>

            <p>One of the most effective actions people can take is reducing single-use plastics. Millions of tons of plastic waste end up in oceans annually, harming marine animals who ingest or become entangled in it (Jambeck et al., 2015). By using reusable bags, bottles, and containers, individuals can help decrease plastic waste that pollutes marine habitats.</p>

            <p>Choosing sustainable seafood is another powerful choice. Overfishing has caused severe declines in many fish populations. Consumers can support responsible fisheries by checking labels for sustainability certifications like the Marine Stewardship Council (MSC) or using seafood guides such as those from the Monterey Bay Aquarium (MSC, 2023).</p>

            <p>Lowering one's carbon footprint also benefits marine life. Carbon dioxide emissions contribute to ocean acidification, which threatens coral reefs and shell-forming marine organisms. Using public transport, consuming less meat, conserving electricity, and supporting renewable energy are all steps individuals can take to reduce CO₂ output (IPCC, 2019).</p>

            <p>Participating in or supporting beach clean-ups, ocean conservation groups, and marine education initiatives can also amplify impact. Volunteering or donating to NGOs that focus on marine protection increases the reach and efficiency of conservation efforts.</p>

            <p>Lastly, raising awareness is crucial. Sharing information on marine conservation through social media, schools, or community groups helps build a culture of sustainability. The more people who understand the connections between daily choices and marine health, the more widespread the positive effects will be.</p>

            <p>In conclusion, individuals are not powerless in the face of climate change. Everyday actions—from reducing waste to making informed choices—can have a profound effect on the oceans and marine life.</p>

            <h2 className="text-2xl font-bold mt-12 mb-6">References</h2>
            <div className="pl-8 space-y-4">
              <p className="text-sm">Intergovernmental Panel on Climate Change. (2019). <em>Special Report on the Ocean and Cryosphere in a Changing Climate</em>.</p>
              
              <p className="text-sm">Jambeck, J. R., Geyer, R., Wilcox, C., Siegler, T. R., Perryman, M., Andrady, A., Law, K. L. (2015). Plastic waste inputs from land into the ocean. <em>Science, 347</em>(6223), 768–771.</p>
              
              <p className="text-sm">Marine Stewardship Council. (2023). <em>Certified sustainable seafood</em>. https://www.msc.org/</p>
            </div>
          </article>
        </div>
      </div>
    </main>
  );
} 
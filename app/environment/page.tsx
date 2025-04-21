'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function EnvironmentPage() {
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
            <h1 className="text-4xl font-bold mb-8">The Importance of Marine Life for the Environment</h1>
            
            <p>Marine life plays a crucial role in maintaining ecological balance and supporting the health of the global environment. Oceans cover more than 70% of the Earth's surface and host an extraordinary diversity of life forms, from microscopic plankton to massive whales (UNESCO, 2021). This marine biodiversity contributes directly and indirectly to ecosystem services that sustain the planet.</p>

            <p>One of the most significant roles of marine life is in regulating the climate. Marine organisms, especially phytoplankton, are responsible for producing more than half of the world's oxygen through photosynthesis (Falkowski et al., 1998). Additionally, marine ecosystems act as carbon sinks. Oceans absorb approximately 25% of the carbon dioxide (CO₂) emitted by human activities, helping to mitigate the impact of global warming (Sabine et al., 2004).</p>

            <p>Coral reefs and mangrove forests also provide critical environmental functions. Reefs protect coastlines from erosion and storm surges, while mangroves filter pollutants and stabilize sediments. These habitats are breeding and nursery grounds for numerous marine species, supporting food chains that reach far beyond the sea (Barbier et al., 2011).</p>

            <p>Moreover, marine biodiversity supports global food security. Fish and other seafood are primary protein sources for over three billion people (FAO, 2020). Marine organisms also contribute to medicine and biotechnology. Compounds derived from marine species are being used in treatments for cancer, pain relief, and bacterial infections (Leal et al., 2012).</p>

            <p>In summary, marine life is vital not only for ocean health but for the functioning of the entire Earth system. Protecting marine ecosystems is essential for climate regulation, food security, coastal protection, and future scientific discoveries.</p>

            <h2 className="text-2xl font-bold mt-12 mb-6">References</h2>
            <div className="pl-8 space-y-4">
              <p className="text-sm">Barbier, E. B., Hacker, S. D., Kennedy, C., Koch, E. W., Stier, A. C., & Silliman, B. R. (2011). The value of estuarine and coastal ecosystem services. <em>Ecological Monographs</em>, 81(2), 169–193.</p>
              
              <p className="text-sm">FAO. (2020). <em>The State of World Fisheries and Aquaculture 2020</em>. Food and Agriculture Organization of the United Nations.</p>
              
              <p className="text-sm">Falkowski, P. G., Barber, R. T., & Smetacek, V. (1998). Biogeochemical controls and feedbacks on ocean primary production. <em>Science</em>, 281(5374), 200–206.</p>
              
              <p className="text-sm">Leal, M. C., Puga, J., Serôdio, J., Gomes, N. C. M., & Calado, R. (2012). Trends in the discovery of new marine natural products from invertebrates over the last two decades–where and what are we bioprospecting? <em>PLoS ONE</em>, 7(1), e30580.</p>
              
              <p className="text-sm">Sabine, C. L., Feely, R. A., Gruber, N., Key, R. M., Lee, K., Bullister, J. L., ... & Wallace, D. W. (2004). The oceanic sink for anthropogenic CO₂. <em>Science</em>, 305(5682), 367–371.</p>
              
              <p className="text-sm">UNESCO. (2021). <em>Ocean literacy for all</em>. United Nations Educational, Scientific and Cultural Organization.</p>
            </div>
          </article>
        </div>
      </div>
    </main>
  );
} 
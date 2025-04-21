'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function SustainabilityPage() {
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
            <h1 className="text-4xl font-bold mb-8">Sustainability and Marine Life</h1>
            
            <p>Sustainability refers to meeting present needs without compromising the ability of future generations to meet their own. In the context of marine life, sustainability means ensuring that ocean ecosystems remain healthy, productive, and resilient. It involves protecting biodiversity, regulating human activities, and maintaining ecological balance (UN, 1987). As oceans face increasing pressure from climate change, pollution, and overexploitation, sustainable practices are essential to ensure their long-term viability.</p>

            <p>One key aspect of marine sustainability is responsible fishing. Overfishing has depleted many fish stocks worldwide, destabilizing marine food webs and threatening the livelihoods of communities that depend on fishing (Pauly et al., 2002). Sustainable fisheries use methods that minimize bycatch, avoid damaging the seafloor, and follow science-based quotas. Governments, industries, and consumers must work together to enforce regulations and promote certified sustainable seafood.</p>

            <p>Marine protected areas (MPAs) are another important tool. MPAs conserve biodiversity by limiting or banning activities like fishing, mining, and tourism in sensitive areas. They help ecosystems recover, improve species diversity, and even replenish fish stocks in surrounding regions (Lester et al., 2009). Expanding the global network of MPAs is vital for safeguarding marine biodiversity and resilience.</p>

            <p>Pollution control is also essential for sustainability. Oceans are sinks for various pollutants, including plastics, heavy metals, and agricultural runoff. These pollutants can poison marine species, destroy habitats, and even enter the human food chain (Halpern et al., 2008). Effective waste management, reduced use of harmful chemicals, and stricter regulations are required to protect marine ecosystems.</p>

            <p>Climate action is closely linked to marine sustainability. Rising sea temperatures, ocean acidification, and deoxygenation all result from greenhouse gas emissions. These changes are causing coral bleaching, altering species distributions, and threatening entire ecosystems (IPCC, 2019). Reducing carbon emissions, transitioning to renewable energy, and investing in nature-based solutions like blue carbon ecosystems (e.g., mangroves and seagrasses) are essential for ocean health.</p>

            <p>Sustainability also involves education and international cooperation. People must be informed about the importance of marine ecosystems and how to protect them. Likewise, governments and organizations must collaborate to create and enforce international laws that preserve the ocean.</p>

            <p>To conclude, sustainable marine practices are crucial for environmental health, economic stability, and future generations. By managing resources wisely and protecting vulnerable ecosystems, we can ensure that marine life continues to thrive in a changing world.</p>

            <h2 className="text-2xl font-bold mt-12 mb-6">References</h2>
            <div className="pl-8 space-y-4">
              <p className="text-sm">Halpern, B. S., Walbridge, S., Selkoe, K. A., Kappel, C. V., Micheli, F., D'Agrosa, C., ... & Watson, R. (2008). A global map of human impact on marine ecosystems. <em>Science</em>, 319(5865), 948–952.</p>
              
              <p className="text-sm">IPCC. (2019). <em>Special Report on the Ocean and Cryosphere in a Changing Climate</em>. Intergovernmental Panel on Climate Change.</p>
              
              <p className="text-sm">Lester, S. E., Halpern, B. S., Grorud-Colvert, K., Lubchenco, J., Ruttenberg, B. I., Gaines, S. D., ... & Warner, R. R. (2009). Biological effects within no-take marine reserves: a global synthesis. <em>Marine Ecology Progress Series</em>, 384, 33–46.</p>
              
              <p className="text-sm">Pauly, D., Christensen, V., Guénette, S., Pitcher, T. J., Sumaila, U. R., Walters, C. J., ... & Zeller, D. (2002). Towards sustainability in world fisheries. <em>Nature</em>, 418(6898), 689–695.</p>
              
              <p className="text-sm">UN. (1987). <em>Report of the World Commission on Environment and Development: Our Common Future</em>. United Nations.</p>
            </div>
          </article>
        </div>
      </div>
    </main>
  );
} 
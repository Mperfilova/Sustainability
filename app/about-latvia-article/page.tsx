'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function AboutLatviaArticle() {
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
            <h1 className="text-4xl font-bold mb-8">Climate Change and Marine Life in Latvia</h1>
            
            <p>Latvia, located on the eastern coast of the Baltic Sea, is witnessing significant changes in its marine environment due to climate change. The Baltic Sea is one of the most vulnerable regional seas in Europe, characterized by low salinity, limited water exchange with the North Sea, and high human activity. These factors amplify the effects of climate change on marine life in Latvian waters (HELCOM, 2021).</p>

            <p>One of the primary impacts is the warming of sea temperatures. Over recent decades, the surface temperature of the Baltic Sea has increased faster than the global average (Meier et al., 2022). This warming affects species composition, migration patterns, and breeding seasons. Cold-water species such as cod are declining, while warmer water species are becoming more common. This shift threatens biodiversity and affects commercial fisheries vital to Latvia's economy.</p>

            <p>Ocean acidification, though less pronounced in the Baltic than in open oceans, is beginning to influence shell-forming organisms. These changes can weaken the base of the food web, particularly species such as mussels and zooplankton, which are essential for higher trophic levels (Carstensen et al., 2014).</p>

            <p>Eutrophication remains a major issue. Runoff from agriculture and untreated wastewater introduces excess nutrients into the sea, leading to algae blooms and oxygen depletion. Climate change exacerbates this problem by increasing rainfall and river discharge, which washes more nutrients into marine areas (HELCOM, 2021). Hypoxic (low oxygen) zones harm bottom-dwelling species and reduce fish spawning success.</p>

            <p>Invasive species are another concern. Warming waters allow non-native species to thrive in the Baltic Sea. Species such as the round goby have displaced native fish and altered ecosystem dynamics. This disrupts food webs and challenges local fisheries (Ojaveer et al., 2015).</p>

            <p>Latvia has taken steps to monitor and mitigate these changes. Through regional cooperation under the Baltic Marine Environment Protection Commission (HELCOM), Latvia participates in coordinated efforts to reduce pollution, protect habitats, and improve marine governance. The country also supports marine protected areas (MPAs), which safeguard biodiversity hotspots and help ecosystems adapt to climate stressors.</p>

            <p>However, more action is needed. Latvia must invest in sustainable fisheries management, climate-resilient infrastructure, and public education. Enhancing scientific research and monitoring is also critical to understand how local ecosystems are evolving under climate pressure.</p>

            <p>In conclusion, marine life in Latvia is under growing threat from climate change, with impacts on biodiversity, fisheries, and ecosystem health. Through national and regional cooperation, it is possible to protect and restore marine environments for future generations.</p>

            <h2 className="text-2xl font-bold mt-12 mb-6">References</h2>
            <div className="pl-8 space-y-4">
              <p className="text-sm">Carstensen, J., Andersen, J. H., Gustafsson, B. G., & Conley, D. J. (2014). Deoxygenation of the Baltic Sea during the last century. <em>Proceedings of the National Academy of Sciences</em>, 111(15), 5628–5633.</p>
              
              <p className="text-sm">HELCOM. (2021). <em>State of the Baltic Sea – Second HELCOM holistic assessment 2011–2016</em>. Baltic Marine Environment Protection Commission.</p>
              
              <p className="text-sm">Meier, H. E. M., Saraiva, S., Markus Meier, H. E., & Andersson, H. C. (2022). Climate change projections for the Baltic Sea: changes in temperature and salinity. <em>Ambio</em>, 51(3), 686–703.</p>
              
              <p className="text-sm">Ojaveer, H., Galil, B. S., Campbell, M. L., Carlton, J. T., Canning-Clode, J., Cook, E. J., ... & Gollasch, S. (2015). Classification of non-indigenous species based on their impacts: Considerations for application in marine management. <em>PLoS Biology</em>, 13(4), e1002130.</p>
            </div>
          </article>
        </div>
      </div>
    </main>
  );
} 
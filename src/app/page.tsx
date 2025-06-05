// app/page.tsx
'use client'

import Hero from "@/components/Hero"
import Image from "next/image"


export default function Home() {

  return (
    <div>
    <div> {/* Prevent scrolling */}
     <Hero />
 <div className="fixed bottom-0 right-0 z-10">
    <Image 
      src="/images/people.png" 
      alt="Happy customers"
      width={600}
      height={600}
      className="w-[150px] sm:w-[200px] md:w-[300px] lg:w-[400px] xl:w-[500px] h-auto object-contain"
      priority
    />
  </div>
    </div>

    </div>
  )
}
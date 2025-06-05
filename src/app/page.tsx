// app/page.tsx
'use client'

import Hero from "@/components/Hero"
import Image from "next/image"


export default function Home() {

  return (
    <div>
    <div className="overflow-hidden"> {/* Prevent scrolling */}
     <Hero />
  <Image 
  src="/images/people.png" 
  alt="Hero" 
  width={600}
  height={600}
  className="absolute bottom-0 right-0 
            w-[200px] sm:w-[300px] md:w-[400px] lg:w-[500px] xl:w-[600px]
            h-auto object-contain"
  priority
/>
    </div>

    </div>
  )
}
import Link from "next/link";

export default function Hero() {
  return (

<section className="flex items-center justify-center hero-container overflow-hidden ">
        <div className="max-w-9/12  w-full  px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-4">
          Simplify Global Money Moves.
          <br />
          <span className="">Multiply Your Momentum.</span>
        </h1>
        
        <p className="text-xl text-[#E6A54A] my-8 font-semibold">
          Innovate Faster. Transact Smarter. Secure Payments Built in
        </p>
        
        <div className="max-w-2xl mb-10">
          <p className="text-lg text-gray-700">
           Lindapay&apos;s all-in-one platform merges payments, revenue tools, and financial agility into a seamless engine, so you can innovate faster, operate leaner, and build what&apos;s next.
          </p>
        </div>
        
<div className="flex flex-col sm:flex-row gap-4">
  <Link href="/signup" className="w-full sm:w-auto">

  <button className="
    relative bg-[#E6A54A] text-white 
    font-medium py-3 px-6 rounded-lg 
    overflow-hidden
    before:content-[''] before:absolute before:top-0 before:left-0 
    before:w-full before:h-full before:bg-[#d8953a]
    before:scale-x-0 before:origin-left
    before:transition-transform before:duration-300 before:ease-in-out
    hover:before:scale-x-100
    group
  ">

    <span className="relative z-10">
      Get Started <span className="ml-1 group-hover:translate-x-1 transition-transform duration-200">▶</span>
    </span>
  </button>
    </Link>
  <button className="
    relative border-2 border-[#E6A54A] text-[#E6A54A]
    font-medium py-3 px-6 rounded-lg 
    overflow-hidden
    before:content-[''] before:absolute before:top-0 before:left-0 
    before:w-full before:h-full before:bg-[#E6A54A]/10
    before:scale-x-0 before:origin-left
    before:transition-transform before:duration-300 before:ease-in-out
    hover:before:scale-x-100
    hover:border-[#d8953a] hover:text-[#d8953a]
    group
  ">
    <span className="relative z-10">
      Talk To Us Now <span className="ml-1 group-hover:translate-x-1 transition-transform duration-200">▶</span>
    </span>
  </button>
</div>
      </div>
    </section>
  );
}
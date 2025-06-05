import Link from "next/link";
import { motion } from "framer-motion";

// Animation variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const buttonHover = {
  scale: 1.02,
  transition: { duration: 0.2 }
};

export default function Hero() {
  return (
    <motion.section 
      className="flex items-center justify-center "
      initial="hidden"
      animate="show"
      variants={container}
    >
      <div className="max-w-9/12 w-full px-4 sm:px-6 lg:px-8">
        <motion.h1 
          className="text-4xl md:text-5xl font-semibold text-gray-900 mb-4"
          variants={item}
        >
          Simplify Global Money Moves.
          <br />
          <span className="">Multiply Your Momentum.</span>
        </motion.h1>
        
        <motion.p 
          className="text-xl text-[#E6A54A] my-8 font-semibold"
          variants={item}
        >
          Innovate Faster. Transact Smarter. Secure Payments Built in
        </motion.p>
        
        <motion.div 
          className="max-w-2xl mb-10"
          variants={item}
        >
          <p className="text-lg text-gray-700">
            Lindapay&apos;s all-in-one platform merges payments, revenue tools, and financial agility into a seamless engine, so you can innovate faster, operate leaner, and build what&apos;s next.
          </p>
        </motion.div>
        
        <motion.div 
          className="flex flex-col sm:flex-row gap-4"
          variants={item}
        >
          <Link href="/signup" className="block z-50">
            <motion.button 
              className="
                relative bg-[#E6A54A] text-white 
                font-medium py-3 px-6 rounded-lg 
                overflow-hidden
                w-full sm:w-auto
                before:content-[''] before:absolute before:top-0 before:left-0 
                before:w-full before:h-full before:bg-[#d8953a]
                before:scale-x-0 before:origin-left
                before:transition-transform before:duration-300 before:ease-in-out
                hover:before:scale-x-100
                group
              "
              whileHover={buttonHover}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10">
                Get Started <span className="ml-1 group-hover:translate-x-1 transition-transform duration-200">▶</span>
              </span>
            </motion.button>
          </Link>
          
          <motion.button 
            className="
              relative border-2 border-[#E6A54A] text-[#E6A54A]
              font-medium py-3 px-6 rounded-lg 
              overflow-hidden
              before:content-[''] before:absolute before:top-0 before:left-0 
              before:w-full before:h-full before:bg-[#E6A54A]/10
              before:scale-x-0 before:origin-left
              before:transition-transform before:duration-300 before:ease-in-out
              hover:before:scale-x-100
              hover:border-[#d8953a] hover:text-[#d8953a]
              bg-white
              z-1000
              group
            "
            whileHover={buttonHover}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative">
              Talk To Us Now <span className="ml-1 group-hover:translate-x-1 transition-transform duration-200">▶</span>
            </span>
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
}
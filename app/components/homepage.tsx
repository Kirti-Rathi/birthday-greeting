import { motion } from "framer-motion";
import Image from "next/image";
import { Send } from "lucide-react";

const Homepage = () => {
  return (
    <div className="h-[100dvh] w-screen bg-[#6697BC] flex flex-col items-center justify-start p-4 relative overflow-hidden">
      {/* Clouds */}
      <div className="absolute inset-0">
        {/* Top right clouds */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="absolute top-5 right-[-25%]"
        >
          <Image
            src="/images/cloud.png"
            width={350}
            height={200}
            alt="Cloud"
            className="opacity-90"
          />
        </motion.div>

        {/* Middle left cloud */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
          className="absolute top-[30%] left-[-20%]"
        >
          <Image
            src="/images/cloud.png"
            width={350}
            height={200}
            alt="Cloud"
            className="opacity-90"
          />
        </motion.div>
      </div>

      {/* Main content */}
      <div className=" relative z-10 text-center mt-[15vh] ">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 20, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col"
        >
          <span className="text-[#FFB974] text-[2.5rem] font-bold pr-40">
            HAPPY
          </span>
          <span className="text-white text-[5rem] leading-[1] font-bold -mt-2">
            poipoi&apos;s
          </span>
          <span className="text-[#FFB974] text-[5.5rem] leading-[1] font-bold self-end -mt-4">
            day
          </span>
        </motion.div>

        {/* White rectangle */}
        <motion.button
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="w-[180px] h-[60px] bg-white/80 rounded-lg mx-auto my-16 flex justify-center items-center"
          onClick={() =>
            window.scrollTo({
              top: window.innerHeight,
              behavior: "smooth",
            })
          }
        >
          <span className="text-[#5F93B3] text-xl mr-2 ">Scroll Down</span>
          <Send
            className="text-[#5F93B3] text-lg mb-2"
            style={{ transform: "rotate(135deg)" }}
          />
        </motion.button>

        {/* Bottom text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-white/90 text-sm tracking-wide leading-relaxed"
        >
          SET YOUR EARPHONES
          <br />
          AND KEEP THE VOLUME UP
        </motion.div>
      </div>

      {/* Paper airplanes */}
      <div className="absolute bottom-12 left-0 right-0 h-24">
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="relative h-full"
        >
          {[...Array(3)].map((_, i) => (
            <Send
              key={i}
              className="absolute text-white/50 "
              style={{
                left: `${20 + i * 30}%`,
                bottom: `${10 + (i % 2) * 8}px`,
                width: "24px",
                height: "24px",
                transform: "rotate(135deg)",
              }}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Homepage;

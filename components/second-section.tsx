import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

const SecondSection = () => {
  return (
    <div className="w-full h-auto lg:h-screen bg-card flex flex-col lg:flex-row items-center justify-between overflow-hidden">
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full md:hidden lg:w-1/2 h-70 sm:h-125 lg:h-full relative overflow-hidden"
      >
        <Image src="/home2.webp" fill alt="home-2" className="object-cover" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 1 }}
        className="w-full lg:w-1/2 flex flex-col items-center justify-center pb-0 h-full gap-8"
      >
        <div className="flex items-center p-6 sm:p-10 lg:p-18 w-full lg:h-full">
          <div className="w-full space-y-8">
            <h1 className="text-[clamp(36px,4vw,64px)] font-medium leading-tight md:text-center lg:text-left">
              Move through the{" "}
              <span className="text-primary">overwhelm.</span>{" "}
            </h1>

            <div className="space-y-5 text-[clamp(18px,1.2vw,22px)] md:text-center lg:text-left font-semibold text-muted">
              <p>
                Therapy becomes a private place to slow down and reconnect after
                years of pushing through stress.
              </p>
              <p>
                My goal is to help you develop the insight and resilience needed
                for a more sustainable life.
              </p>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="w-full h-12 md:h-20 border-t font-medium text-sm border-primary flex items-center gap-2 justify-center"
        >
          GET IN TOUCH <ArrowRight className="w-3 h-3" />
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full hidden md:flex rounded-bl-[130px] lg:w-1/2 h-100 sm:h-125 lg:h-full relative overflow-hidden"
      >
        <Image src="/home2.webp" fill alt="home-2" className="object-cover" />
      </motion.div>
    </div>
  );
};

export default SecondSection;

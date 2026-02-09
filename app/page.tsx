"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import SecondSection from "../components/second-section";
import ThirdSection from "../components/third-section";
import FourthSection from "../components/fourth-section";
import Faqs from "../components/faq";
import { motion } from "framer-motion";
import ProffessionalBg from "../components/proffessional-bg";

const Homepage = () => {
  return (
    <div>
      <div className="min-h-screen w-full mt-20 flex flex-col md:justify-center items-center px-6 lg:px-18 pt-10">
        <div className="flex flex-col lg:flex-row h-auto lg:h-225 justify-between w-full lg:min-w-125 lg:max-w-450 lg:max-h-375 gap-3 md:gap-16 lg:gap-32 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-50 lg:w-150 overflow-hidden relative h-75 sm:h-137.5 lg:h-full rounded-t-full"
          >
            <Image
              src="/bg-new.jpg"
              alt="home-image"
              fill
              className=" object-bottom"
            />
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.25,
                },
              },
            }}
            className="flex-1 w-full lg:h-full"
          >
            <div className="w-full h-full flex flex-col items-center justify-center gap-8 md:-mt-20 lg:gap-10 text-center lg:text-left">
              <motion.h1
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.7 }}
                className="text-4xl md:text-5xl lg:text-7xl font-medium"
              >
                Find your <span className="text-primary">Ground.</span>
              </motion.h1>

              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.7 }}
                className="text-base md:text-xl font-semibold text-black/80"
              >
                Therapy for Adults in Santa Monica, CA.
              </motion.p>

              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.7 }}
              >
                <Button
                  variant="ghost"
                  className="hover:bg-transparent cursor-pointer border-2 font-semibold border-background rounded-2xl py-5"
                >
                  CONNECT WITH ME <ArrowRight />
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <Faqs />
      <ProffessionalBg />
    </div>
  );
};

export default Homepage;

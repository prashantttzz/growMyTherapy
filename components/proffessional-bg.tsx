"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const ProffessionalBg = () => {
  return (
    <div className="min-h-screen flex flex-col">
      
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="py-16 md:py-20 flex items-center justify-center px-6 bg-card"
      >
        <div className="flex flex-col gap-10 md:gap-15 items-center w-full max-w-[900px] ">
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-3xl sm:text-4xl md:text-5xl font-medium text-center"
          >
            My Professional Background
          </motion.h1>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.15 },
              },
            }}
            className="w-full"
          >
            <Accordion type="single" collapsible defaultValue="item-1">
              {["item-1", "item-2", "item-3"].map((item) => (
                <motion.div
                  key={item}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <AccordionItem
                    value={item}
                    className="border-black border-y"
                  >
                    <AccordionTrigger
                      className="text-lg sm:text-xl md:text-2xl justify-between"
                      iconPosition="right"
                    >
                      Is it accessible?
                    </AccordionTrigger>

                    <AccordionContent className="text-base sm:text-lg md:text-xl">
                      Yes. It adheres to the WAI-ARIA design pattern.
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="py-16 md:py-20 flex items-center justify-center px-6 bg-primary text-white"
      >
        <div className="flex flex-col items-center justify-center gap-8 md:gap-10 w-full max-w-[800px] text-center text-base sm:text-lg md:text-xl">
          
          <h1 className="text-3xl sm:text-4xl md:text-7xl font-medium">
            get started today
          </h1>

          <p className="text-lg md:text-2xl md:leading-10">
            Ready to take the first step towards a happier, healthier you?
            <br className="hidden md:block" />
            Contact me to book your first session. I look forward to starting
            this therapeutic journey with you.
          </p>

          <Button
            variant="ghost"
            className="border border-black rounded-4xl px-20! py-8 hover:bg-transparent  cursor-pointer hover:text-white flex gap-3 items-center mt-10 md:mt-20 justify-center"
          >
            GET IN TOUCH <ArrowRight />
          </Button>
        </div>
      </motion.section>

      <footer className="w-full mt-0 md:mt-10">
        
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.2 },
            },
          }}
          className="w-full my-12 md:mb-32 px-6 md:px-18  md:mt-20 flex bg-foreground flex-col lg:flex-row gap-12 items-center md:items-start md:justify-between"
        >
          
          {[
            <div key="brand" className="flex flex-col items-center md:items-start gap-6 md:gap-10 text-center">
              <h1 className="text-2xl md:text-5xl font-medium">Dr. Maya Reynolds, PsyD</h1>
              <div className="text-base md:text-2xl space-y-1">
                <p>123th Street 45 W </p>
                <p>Santa Monica, CA 90401</p>
              </div>
              <div className="text-base md:text-xl space-y-1">
                <p>123 Example Road</p>
                <p>Minneapolis, MN</p>
              </div>
            </div>,

            <div key="links" className="flex flex-col sm:flex-row gap-12 items-center md:items-start md:justify-between sm:gap-20 lg:w-[35%]">
              <div className="flex flex-col items-center md:items-start gap-6 md:gap-8 text-center">
                <h1 className="text-2xl md:text-5xl font-medium">Hours</h1>
                <div className="text-base md:text-xl space-y-1">
                  <p>Monday – Friday</p>
                  <p>10am – 6pm</p>
                </div>
              </div>

              <div className="flex flex-col gap-6 md:gap-10">
                <h1 className="text-2xl md:text-5xl font-medium">Find</h1>
                <div className="text-base md:text-xl space-y-1 text-center">
                  <p className="underline cursor-pointer">Home</p>
                  <p className="underline cursor-pointer">Contact</p>
                  <p className="underline cursor-pointer">Blog</p>
                </div>
              </div>
            </div>,
          ].map((block, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6 }}
            >
              {block}
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full py-10 md:p-18 md:pb-8 flex bg-card text-black flex-col gap-6 items-center text-center text-base md:text-lg"
        >
          <div className="flex flex-col md:flex-row flex-wrap justify-center font-medium gap-1 md:gap-6">
            <span className="underline">Privacy & Cookies Policy</span>
            <span className="underline">Good Faith Estimate</span>
            <span className="underline">Website Terms & Conditions</span>
            <span className="underline">Disclaimer</span>
          </div>

          <div>
            Website Template Credits:{" "}
            <span className="underline">Go Bloom Creative</span>
          </div>

          <div className="md:mt-10">
            All Rights Reserved © 2024 Your Business Name Here, LLC.
          </div>
        </motion.div>
      </footer>
    </div>
  );
};

export default ProffessionalBg;

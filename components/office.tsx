"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Clock } from "lucide-react";

const OfficeSection = () => {
  return (
    <section className="w-full bg-card py-20 lg:py-32 px-6 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col gap-20">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl xl:text-6xl font-semibold leading-tight">
            A space that feels <span className="text-primary">grounded</span>{" "}
            from the moment you enter.
          </h2>

          <p className="mt-6 text-base md:text-lg xl:text-xl text-muted-foreground">
            The Santa Monica office is designed to be calm, private, and
            thoughtfully uncluttered. Natural light and soft textures create an
            environment where reflection feels possible.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1 }}
          className="relative w-full"
        >
          <div className="relative w-full h-[350px] md:h-[500px] lg:h-[650px] overflow-hidden rounded-[40px] border border-border shadow-xl">
            <Image
              src="/office1.jpeg"
              alt="Office interior"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[90%] md:w-[70%] bg-primary text-white border border-border rounded-3xl p-6 md:p-10 shadow-lg">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
              <div className="flex items-center gap-3">
                <MapPin className="text-primary w-5 h-5" />
                <span className="text-sm md:text-base">
                  123th Street 45 W, Santa Monica, CA 90401
                </span>
              </div>

              <div className="hidden md:block h-6 w-px bg-border" />

              <div className="flex items-center gap-3">
                <Clock className="text-primary w-5 h-5" />
                <span className="text-sm md:text-base">
                  Monday – Friday | 9:00 AM – 6:00 PM
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OfficeSection;

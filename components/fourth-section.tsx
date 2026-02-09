"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

const FourthSection = () => {
  return (
    <div>
      <section className="w-full min-h-screen bg-card flex flex-col lg:flex-row">
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1 }}
          className="relative w-full lg:w-1/2 min-h-0 lg:min-h-screen "
        >
          <Image
            src="/fourthsection.webp"
            alt="fourth-section-image"
            fill
            className="object-cover rounded-br-[180px]"
            priority
          />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.15 },
            },
          }}
          className="w-full lg:w-1/2 flex flex-col justify-between"
        >
          <div className="px-8 md:px-16 py-12 lg:py-20 flex flex-col gap-10">
            <motion.h1
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl xl:text-6xl leading-tighter font-semibold"
            >
              You don’t have to do this all{" "}
              <span className="text-primary">alone</span>.
            </motion.h1>

            <motion.p
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 },
              }}
              transition={{ duration: 0.8 }}
              className="text-base md:text-lg xl:text-xl font-semibold"
            >
              If you are facing any of these, there’s hope:
            </motion.p>

            <motion.ol
              variants={{
                hidden: {},
                visible: {
                  transition: { staggerChildren: 0.1 },
                },
              }}
              className="list-disc space-y-3 ml-10 text-base md:text-lg xl:text-xl font-semibold"
            >
              {[
                "Constant worry or tension in your body",
                "Difficulty sleeping or feeling emotionally on edge",
                "Lingering effects of past trauma ",
                "Exhaustion from perfectionism ",
                "A pervasive sense of being stuck in overthinking",
              ].map((item, i) => (
                <motion.li
                  key={i}
                  variants={{
                    hidden: { opacity: 0, x: -10 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  transition={{ duration: 0.4 }}
                >
                  {item}
                </motion.li>
              ))}
            </motion.ol>

            <motion.p
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 },
              }}
              transition={{ duration: 0.8 }}
              className="text-base md:text-lg xl:text-xl font-semibold"
            >
              With a warm and grounded approach, we&apos;ll work together to
              help you develop lasting resilience and insight.{" "}
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="border-t border-black w-full flex items-center justify-center gap-3 py-4 text-sm font-medium"
          >
            WORK WITH ME <ArrowRight className="w-4 h-4" />
          </motion.div>
        </motion.div>
      </section>

      <section className="w-full min-h-screen flex gap-12 lg:gap-25 flex-col lg:flex-row px-6 md:px-16 py-12 lg:py-32">
        <div className="md:hidden flex justify-center">
          <div className="relative w-full flex justify-center">
            <div className="w-40 overflow-hidden relative h-[250px] rounded-t-full">
              <Image
                src="/doctor.png"
                alt="home-image"
                fill
                className="object-cover"
              />
            </div>

            <div className="h-[110px] w-[110px] bottom-2 right-10 absolute rounded-full overflow-hidden">
              <Image
                src="/circle.webp"
                fill
                alt="circle"
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-[60%] flex flex-col justify-center items-center gap-16 lg:gap-32"
        >
          <div className="flex flex-col pl-0 md:pl-10 gap-6 lg:gap-10">
            <h1 className="text-3xl md:text-4xl xl:text-6xl font-medium leading-tight">
              Hi, I’m <span className="text-primary">Maya.</span>{" "}
            </h1>

            <p className="text-base md:text-lg xl:text-2xl leading-relaxed md:w-[80%]">
              I’m a licensed clinical psychologist in Santa Monica committed to
              providing a safe, grounded environment where we can explore the
              physiological and emotional sides of your experience. we&apos;ll
              work together to help you build a stronger relationship with
              yourself.
            </p>
          </div>

          <Button
            className="hover:bg-transparent cursor-pointer border-2 border-primary w-fit md:p-8 px-20! md:text-xl flex items-center justify-center gap-3 rounded-4xl font-semibold"
            variant="ghost"
          >
            LETS CHAT <ArrowRight />
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="hidden md:flex -ml-10 justify-start p-2 border-2 border-primary rounded-t-full"
        >
          <div className="relative w-full mr-10">
            <div className="w-full max-w-[550px] lg:w-130 overflow-hidden relative md:h-[600px] lg:h-[800px] rounded-t-full">
              <Image
                src="/doctor.png"
                alt="home-image"
                fill
                className="object-cover"
              />
            </div>

            <div className="h-[200px] w-[200px] md:h-[260px] md:w-[260px] lg:h-[340px] lg:w-[340px] absolute -bottom-10 md:-bottom-16 lg:-bottom-10 -right-20 rounded-full overflow-hidden">
              <Image
                src="/circle.webp"
                fill
                alt="circle"
                className="object-cover"
              />
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default FourthSection;

"use client";

import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const Faqs = () => {
  const faqs =[
    {
      title:"Do you take insurance?",
      desc:"I provide secure telehealth and in-person sessions; please contact me regarding superbills for out-of-network reimbursement.",
    },
    {
      title:"What are your rates?",
      desc:"I offer structured, private sessions in a calm environment—reach out for specific fee information.",
    },
    {
      title:"Do you have any openings?",
      desc:" I am currently accepting clients for in-person therapy in Santa Monica and telehealth throughout California",
    },
  ]
  return (
    <div className="min-h-screen px-5 md:px-20 py-10 md:py-32 flex gap-10 flex-col md:flex-row items-center justify-center">
            <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.9 }}
        className="w-full md:w-1/2 flex items-center justify-center"
      >
        <div className="w-46 md:w-1/2 max-w-[480px] lg:w-120 overflow-hidden relative h-[260px] md:h-[600px] lg:h-[730px] rounded-t-full">
          <Image
            src="/faqs.webp"
            alt="faqs-image"
            fill
            className="object-cover"
          />
        </div>
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
        className="w-full flex-1 flex flex-col gap-10 md:gap-15"
      >
        <motion.h1
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-6xl font-medium"
        >
          FAQs
        </motion.h1>

        <motion.div
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.1 },
            },
          }}
        >
          <Accordion type="single" collapsible defaultValue="item-1">
            
            
            {["item-1", "item-2", "item-3"].map((item, i) => (
              <motion.div
                key={item}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5 }}
              >
                <AccordionItem value={item} className="border-black border-y">
                  <AccordionTrigger className="text-3xl md:text-5xl font-normal">
                    Is it accessible?
                  </AccordionTrigger>
                  <AccordionContent className="text-lg md:text-xl">
                    Yes. It adheres to the WAI-ARIA design pattern.
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}

          </Accordion>
        </motion.div>

      </motion.div>
    </div>
  );
};

export default Faqs;

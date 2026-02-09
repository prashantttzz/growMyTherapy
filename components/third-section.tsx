import Image from "next/image";
import { motion } from "framer-motion";

const ThirdSection = () => {
  const boxContent = [
    {
      id: 1,
      heading: "Anxiety & Panic",
      desc: " Support for constant worry, physical tension, and the feeling of always bracing for something to go wrong.",
      imageUrl: "/3.png",
    },
    {
      id: 2,
      heading: "Trauma & EMDR",
      desc: "Paced, careful work using evidence-based methods to process single-incident or complex childhood trauma.",
      imageUrl: "/2.png",
    },
    {
      id: 3,
      heading: "Professional Burnout",
      desc: "A space for entrepreneurs and creatives to slow down and reconnect after years of high internal pressure",
      imageUrl: "/1.png",
    },
  ];

  return (
  <section className="min-h-screen w-full px-3 md:px-12 xl:px-20 py-16 flex flex-col gap-12 items-center">
  
  <motion.h1
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 0.6 }}
    className="text-3xl md:text-4xl xl:text-5xl font-medium text-center"
  >
    My Specialities
  </motion.h1>

  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    variants={{
      hidden: {},
      visible: {
        transition: {
          staggerChildren: 0.2,
        },
      },
    }}
    className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
  >
    {boxContent.map((box) => (
      <motion.div
        key={box.id}
        variants={{
          hidden: { opacity: 0, y: 40 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        whileHover={{ y: -6 }}
        className="border border-primary flex flex-col p-6 h-full bg-card rounded-2xl transition-shadow jc"
      >
        <div className="space-y-4 flex flex-col items-center">
          <h2 className="text-xl md:text-2xl font-semibold">
            {box.heading}
          </h2>

          <p className="text-sm md:text-base text-center leading-relaxed">
            {box.desc}
          </p>
        </div>

        <div className="flex-1" />

        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          className="flex justify-center mt-6"
        >
          <div className="relative w-50 h-50 md:w-52 md:h-52 xl:w-60 xl:h-60 rounded-tr-[100px] rounded-bl-[100px] overflow-hidden">
            <Image
              src={box.imageUrl}
              fill
              alt="speciality-img"
              className="object-cover"
            />
          </div>
        </motion.div>

      </motion.div>
    ))}
  </motion.div>

</section>

  );
};

export default ThirdSection;

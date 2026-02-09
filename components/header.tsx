"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;

    if (latest > previous && latest > 80) {
      setHidden(true); 
    } else {
      setHidden(false); 
    }
  });

  return (
    <>
      <motion.header
        initial={{ y: 0 }}
        animate={{ y: hidden ? -100 : 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 w-full h-18 bg-foreground  z-40 flex items-center justify-between px-6 lg:px-18"
      >
        <button
          onClick={() => setOpen(true)}
          className="lg:hidden"
        >
          <Menu size={28} />
        </button>

        <h1 className="font-medium text-xl lg:text-3xl text-primary font-semibold">
          Dr.Maya Reynolds
        </h1>

        <div className="hidden lg:flex items-center gap-10 text-xl">
          <p>Blog</p>
          <p>Contact</p>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center"
          >
            <button
              onClick={() => setOpen(false)}
              className="absolute top-6 left-6"
            >
              <X size={28} />
            </button>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col items-center gap-10 text-5xl font-medium"
            >
              <p onClick={() => setOpen(false)}>Blog</p>
              <p onClick={() => setOpen(false)}>Contact</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;

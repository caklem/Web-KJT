"use client";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import Image from "next/image";

const partnerLogos = [
  "/Kontent/krisbow.png",
  "/Kontent/logo-jjlapp.png",
  "/Kontent/Mandiri.png",
  "/Kontent/Nestle.png",
  "/Kontent/SSJ.webp",
  "/Kontent/Surabayasakti.jpg",
  "/Kontent/Sutindo.png",
];

const Partner = () => {
  const ref = useRef(null);
  const inView = useInView(ref);

  const TopAnimation = {
    initial: { y: "-100%", opacity: 0 },
    animate: inView ? { y: 0, opacity: 1 } : { y: "-100%", opacity: 0 },
    transition: { duration: 1, delay: 0.4 },
  };

  const logoAnimation = (index: number) => ({
    initial: { scale: 0.8, opacity: 0 },
    animate: inView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 },
    transition: { duration: 0.5, delay: 0.2 + index * 0.1 },
  });

  return (
    <section className="dark:bg-darkmode py-14 overflow-x-hidden">
      <div className="container lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) px-4 mx-auto">
        <div
          ref={ref}
          className="dark:bg-midnight_text bg-heroBg rounded-3xl md:py-20 py-10 2xl:pr-14 2xl:pl-20 sm:px-14 px-6"
        >
          <motion.div {...TopAnimation} className="items-start mb-12">
            <h2 className="font-semibold md:text-35 sm:text-28 text-24 text-midnight_text dark:text-white text-center">
              Partner{" "}
              <span className="text-primary">Kami</span>
            </h2>
            <p className="text-center mt-4 text-base text-muted dark:text-white dark:text-opacity-70">
              Perusahaan terpercaya yang telah bekerja sama dengan kami
            </p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-8">
            {partnerLogos.map((logo, index) => (
              <motion.div
                key={index}
                {...logoAnimation(index)}
                className="flex items-center justify-center p-6 bg-white dark:bg-midnight_text rounded-xl border border-border dark:border-dark_border shadow-sm hover:shadow-md transition-all hover:scale-105"
              >
                <Image
                  src={logo}
                  alt={`Partner logo ${index + 1}`}
                  width={150}
                  height={100}
                  className="object-contain max-h-20 w-auto"
                  unoptimized
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partner;


"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { Icon } from "@iconify/react";
import { Heroimage } from "@/app/api/data";
import { useEffect, useState } from "react";

const Hero = () => {
  const sliderImages = ["/Kontent/Gambar 1.jpg", "/Kontent/Gambar 2.jpg", "/Kontent/Gambar 3.jpg"];
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [sliderImages.length]);

  const leftAnimation = {
    initial: { x: "-100%", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: "-100%", opacity: 0 },
    transition: { duration: 1 },
  };

  const rightAnimation = {
    initial: { x: "100%", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: "100%", opacity: 0 },
    transition: { duration: 1 },
  };
  return (
    <section className="relative pt-28 mb-10 bg-cover bg-center dark:bg-darkmode">
      <div className="w-full h-full absolute z-0 bg-heroBg rounded-b-[119px] -left-1/4 top-0 dark:bg-midnight_text"></div>
      <div className="container mx-auto lg:max-w-(--breakpoint-xl) relative z-1 md:max-w-(--breakpoint-md) px-4">
        <div className="grid grid-cols-12 items-start">
          <motion.div {...leftAnimation} className="lg:col-span-6 col-span-12">
            <h1 className="md:text-50 sm:text-40 text-28 text-midnight_text lg:text-start mb-9 lg:w-full w-3/4">
              CV. Kurnia Jaya Teknik
              <br />
              <span className="bg-border dark:bg-darkHeroBg  md:text-50 text-36 rounded-lg lg:text-start text-primary max-w-max">
                Penyedia Peralatan Listrik Terpercaya
              </span>
              <br />
              di Jawa Timur.
            </h1>
            <p className="sm:text-19 text-16 text-muted dark:text-white dark:text-opacity-70 text-start lg:max-w-full sm:max-w-75%">
              Kami adalah penyedia peralatan listrik profesional di Jawa Timur dengan pengalaman bertahun-tahun. Melayani kebutuhan peralatan listrik untuk berbagai proyek dengan kualitas terbaik dan pelayanan yang memuaskan.
            </p>
            <div className="flex items-center mt-12 gap-11">
              <div>
                <Link
                  href="/contact"
                  className="text-17 flex gap-2 items-center bg-primary text-white py-3 px-8 rounded-lg border border-primary hover:text-primary hover:bg-transparent"
                >
                  Hubungi Kami
                  <Icon
                    icon="solar:alt-arrow-right-linear"
                    width="13"
                    height="13"
                  />
                </Link>
              </div>
            </div>

            <div className="lg:my-28 my-12">
              <p className="text-20 text-muted dark:text-white dark:text-opacity-70 text-start mb-7">
                Trusted by
              </p>
              <div className="flex space-x-6 justify-start w-full items-center flex-wrap gap-4">
                {Heroimage.map((item, index) => (
                  <div key={index} className="flex items-center justify-center">
                    <Image
                      src={item.lightimage}
                      alt={`Trusted partner ${index + 1}`}
                      width={120}
                      height={60}
                      className="object-contain opacity-80 hover:opacity-100 transition-opacity"
                      style={{ maxHeight: "60px", maxWidth: "150px", width: "auto", height: "auto" }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
          <motion.div
            {...rightAnimation}
            className="lg:col-span-6 col-span-12 pl-0 lg:block hidden flex items-start"
          >
            <div className="relative w-full max-w-[420px] aspect-[16/9] mx-auto flex items-center justify-center">
              <Image
                src={sliderImages[currentSlide]}
                alt={`Gambar ${currentSlide + 1}`}
                width={420}
                height={236}
                className="rounded-2xl object-cover w-full h-full"
                style={{ width: "100%", height: "100%" }}
              />
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {sliderImages.map((_, index) => (
                  <span
                    key={index}
                    className={`h-2 w-8 rounded-full transition-all ${
                      currentSlide === index ? "bg-primary" : "bg-white/40"
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

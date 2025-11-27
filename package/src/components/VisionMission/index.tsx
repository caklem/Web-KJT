"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import React from "react";

const VisionMission = () => {
  const sectionRef = useRef(null);

  // Animasi hanya berjalan saat elemen masuk viewport
  const inView = useInView(sectionRef, {
    once: true,          // animasi hanya 1x
    amount: 0.2,         // 20% bagian muncul → trigger
  });

  return (
    <div
      ref={sectionRef}
      className="bg-white dark:bg-midnight_text text-dark dark:text-white px-4 py-20 mb-16"
    >
      <div className="max-w-5xl mx-auto">

        {/* TITLE */}
        <motion.div
          initial={{ y: -40, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-2 text-center">
            <span className="text-black dark:text-white">Visi, Misi, </span>
            <span className="text-primary">& Motto</span>
          </h2>
        </motion.div>

        {/* GRID */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {/* Visi */}
          <div className="bg-white dark:bg-midnight_text rounded-2xl shadow-md p-6 flex flex-col items-center text-center">
            <div className="flex justify-center mb-4">
              <span className="w-14 h-14 rounded-full bg-primary flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="white">
                  <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </span>
            </div>
            <h3 className="text-lg font-bold mb-2 text-black dark:text-white">Visi Kami</h3>
            <p className="text-gray-500 dark:text-white/70 text-base text-justify">
              Menjadi perusahaan yang dapat dihandalkan dan dipercaya dengan komitmen untuk selalu tumbuh berkembang guna memberikan pelayanan yang prima.
            </p>
          </div>

          {/* Misi */}
          <div className="bg-white dark:bg-midnight_text rounded-2xl shadow-md p-6 flex flex-col items-center text-center">
            <div className="flex justify-center mb-4">
              <span className="w-14 h-14 rounded-full bg-primary flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="white">
                  <circle cx="12" cy="12" r="8" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </span>
            </div>
            <h3 className="text-lg font-bold mb-2 text-black dark:text-white">Misi Kami</h3>
            <ul className="text-gray-500 dark:text-white/70 text-base space-y-2 text-left max-w-xs mx-auto list-disc pl-5">
              <li>Membangun dan menjaga kerjasama profesional dan kompeten.</li>
              <li>Pengembangan berkelanjutan demi kualitas layanan.</li>
              <li>Menjaga kepercayaan mitra demi bisnis berkelanjutan.</li>
              <li>After sales service cepat & responsif.</li>
            </ul>
          </div>

          {/* Motto */}
          <div className="bg-white dark:bg-midnight_text rounded-2xl shadow-md p-6 flex flex-col items-center text-center">
            <div className="flex justify-center mb-4">
              <span className="w-14 h-14 rounded-full bg-primary flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="white">
                  <polygon points="12 2 15 10 23 10 17 14 19 22 12 17 5 22 7 14 1 10 9 10" />
                </svg>
              </span>
            </div>
            <h3 className="text-lg font-bold mb-2 text-black dark:text-white">Motto Kami</h3>
            <p className="text-gray-500 dark:text-white/70 text-base italic text-justify">
              “Good Plan, Good Results.”
            </p>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default VisionMission;

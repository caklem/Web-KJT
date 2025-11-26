"use client";
import React, { FC, useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView } from "motion/react";

const Spend: FC = () => {
  const ref = useRef(null);
  const inView = useInView(ref);

  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  const TopAnimation = {
    initial: { y: -50, opacity: 0 },
    animate: inView ? { y: 0, opacity: 1 } : {},
    transition: { duration: 0.8 },
  };

  const BottomAnimation = {
    initial: { y: 50, opacity: 0 },
    animate: inView ? { y: 0, opacity: 1 } : {},
    transition: { duration: 0.8, delay: 0.2 },
  };

  return (
    <section className="dark:bg-darkmode overflow-hidden py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <div ref={ref}>

          {/* Heading */}
          <motion.div {...TopAnimation} className="text-center mb-14">
            <h2 className="md:text-36 text-28 font-semibold text-midnight_text dark:text-white leading-tight">
              Legalitas <span className="text-primary">Perusahaan</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mt-2 text-sm md:text-base">
              Informasi resmi terkait legalitas dan perizinan perusahaan.
            </p>
          </motion.div>

          {/* MAIN GRID 50 : 50 */}
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 items-start">

            {/* LEFT CARD */}
            <motion.div {...BottomAnimation} className="w-full">
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700 
                max-w-[400px] sm:max-w-[480px] lg:max-w-[520px] mx-auto">

                <div className="space-y-8 text-gray-700 dark:text-gray-200 text-[16px] sm:text-[18px] lg:text-[20px] leading-relaxed">

                  <div>
                    <p className="font-bold text-gray-900 dark:text-white mb-2 text-[20px]">Akta Pendirian</p>
                    <p>Notaris: Achmad Haris Hidayat, SH., M.KN.</p>
                    <p>Nomor & Tanggal: 08 – 12 Maret 2019</p>
                  </div>

                  <div>
                    <p className="font-bold text-gray-900 dark:text-white mb-2 text-[20px]">Nomor Induk Berusaha (NIB) & TDP</p>
                    <p>Lokasi: Kabupaten Pasuruan</p>
                    <p>Ditetapkan: 18 Juli 2019</p>
                    <p>Nomor: 9120005771586</p>
                  </div>

                  <div>
                    <p className="font-bold text-gray-900 dark:text-white mb-2 text-[20px]">Pajak</p>
                    <p>NPWP: 90.855.105.4-624.000</p>
                    <p>SPPKP: S-869PKP/WPJ.12/KP.0503/2019</p>
                  </div>

                  <div>
                    <p className="font-bold text-gray-900 dark:text-white mb-2 text-[20px]">Bank</p>
                    <p>Bank BCA - KCP Pasuruan</p>
                    <p>No. Rekening: 0893465755</p>
                    <p>Atas Nama: Kurnia Jaya Teknik CV</p>
                  </div>

                </div>
              </div>
            </motion.div>

            {/* RIGHT IMAGE GRID */}
            <motion.div {...BottomAnimation} className="w-full">

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 place-items-center">

                {[1, 2, 3, 4].map((num, index) => (
                  <motion.div
                    key={num}
                    initial={{ scale: 0.85, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6, delay: index * 0.15 }}
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 10px 32px rgba(0,0,0,0.15)",
                    }}
                    onClick={() => setSelectedImg(`/Kontent/L${num}.png`)}
                    className="cursor-pointer bg-white dark:bg-gray-900 rounded-xl overflow-hidden 
                    shadow-md border border-gray-200 dark:border-gray-700 
                    w-full max-w-[480px] h-[540px] sm:max-w-[400px] sm:h-[440px] lg:max-w-[240px] lg:h-[270px] flex items-center justify-center"
                  >
                    <Image
                      src={`/Kontent/L${num}.png`}
                      alt={`Legalitas ${num}`}
                      width={240}
                      height={270}
                      className="object-contain p-2 w-full h-full"
                    />
                  </motion.div>
                ))}

              </div>

              {/* Button */}
              <div className="mt-10 text-center">
                <button
                  onClick={() => (window.location.href = "/lisensi")}
                  className="bg-primary text-white font-semibold px-8 py-3 rounded-xl shadow-lg hover:bg-red-700 
                  transition-all duration-200 hover:scale-105 active:scale-95"
                >
                  Lihat Selengkapnya
                </button>
              </div>

            </motion.div>

          </div>
        </div>
      </div>

      {/* ===========================
            POPUP IMAGE MODAL
          =========================== */}
      {selectedImg && (
        <div
          className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImg(null)}
        >
          <div
            className="relative bg-white dark:bg-gray-800 p-3 rounded-xl shadow-2xl max-w-3xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute -top-3 -right-3 bg-red-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-lg shadow-lg hover:bg-red-700"
              onClick={() => setSelectedImg(null)}
            >
              ✕
            </button>

            <Image
              src={selectedImg}
              alt="Preview Legalitas"
              width={900}
              height={900}
              className="w-full h-auto rounded-lg object-contain"
            />
          </div>
        </div>
      )}

    </section>
  );
};

export default Spend;

"use client";
import Image from "next/image";
import { Icon } from "@iconify/react";
import Link from "next/link";

const About = () => {
  return (
    <section className="dark:bg-darkmode overflow-x-hidden py-14">
      <div className="container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) px-4">
        {/* Company Overview */}
        <div className="bg-heroBg dark:bg-midnight_text rounded-3xl lg:px-16 px-4 py-12 mb-12">
          <div className="grid lg:grid-cols-2 items-center gap-12">
            <div>
              <h2 className="md:text-35 sm:text-28 text-24 font-semibold text-midnight_text dark:text-white mb-6">
                Tentang <span className="text-primary">Kami</span>
              </h2>
              <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center gap-1">
                  <Icon
                    icon="solar:star-bold"
                    width="24"
                    height="24"
                    className="text-yellow-500"
                  />
                  <span className="text-20 font-semibold text-midnight_text dark:text-white">
                    5,01
                  </span>
                </div>
                <span className="text-18 text-muted dark:text-white dark:text-opacity-70">
                  ulasan Google
                </span>
              </div>
              <p className="text-base text-muted dark:text-white dark:text-opacity-70 mb-6 leading-relaxed">
                CV. Kurnia Jaya Teknik adalah penyedia peralatan listrik terpercaya di Jawa Timur dengan pengalaman bertahun-tahun dalam melayani kebutuhan peralatan listrik untuk berbagai proyek. Kami berkomitmen untuk menyediakan produk berkualitas tinggi dan pelayanan yang memuaskan bagi setiap pelanggan.
              </p>
              <p className="text-base text-muted dark:text-white dark:text-opacity-70 mb-6 leading-relaxed">
                Sebagai perusahaan yang fokus pada Mechanical, Electrical & Automation System, kami memahami pentingnya kualitas dan keandalan dalam setiap produk yang kami tawarkan. Tim profesional kami siap membantu Anda menemukan solusi terbaik untuk kebutuhan peralatan listrik Anda.
              </p>
              <Link
                href="/contact"
                className="lg:text-17 flex gap-4 w-fit items-center bg-primary text-white py-2 px-4 lg:py-3 lg:px-8 rounded-lg mt-6 border border-primary hover:text-primary hover:bg-transparent transition-all"
              >
                Hubungi Kami
                <Icon
                  icon="solar:alt-arrow-right-linear"
                  width="13"
                  height="13"
                />
              </Link>
            </div>
            <div className="flex justify-center">
              <div className="relative w-full max-w-md">
                <Image
                  src="/Kontent/LOGO 2.png"
                  alt="CV. Kurnia Jaya Teknik Logo"
                  width={500}
                  height={300}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Company Values */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-heroBg dark:bg-midnight_text rounded-2xl p-6 text-center">
            <div className="flex justify-center mb-4">
              <Icon
                icon="solar:medal-ribbons-star-bold"
                width="48"
                height="48"
                className="text-primary"
              />
            </div>
            <h3 className="text-22 font-semibold text-midnight_text dark:text-white mb-3">
              Kualitas Terjamin
            </h3>
            <p className="text-base text-muted dark:text-white dark:text-opacity-70">
              Kami hanya menyediakan produk peralatan listrik dengan kualitas terbaik dan terpercaya untuk memastikan kepuasan pelanggan.
            </p>
          </div>

          <div className="bg-heroBg dark:bg-midnight_text rounded-2xl p-6 text-center">
            <div className="flex justify-center mb-4">
              <Icon
                icon="solar:hand-stars-bold"
                width="48"
                height="48"
                className="text-primary"
              />
            </div>
            <h3 className="text-22 font-semibold text-midnight_text dark:text-white mb-3">
              Pelayanan Profesional
            </h3>
            <p className="text-base text-muted dark:text-white dark:text-opacity-70">
              Tim profesional kami siap memberikan pelayanan terbaik dan solusi yang tepat untuk setiap kebutuhan peralatan listrik Anda.
            </p>
          </div>

          <div className="bg-heroBg dark:bg-midnight_text rounded-2xl p-6 text-center">
            <div className="flex justify-center mb-4">
              <Icon
                icon="solar:map-point-bold"
                width="48"
                height="48"
                className="text-primary"
              />
            </div>
            <h3 className="text-22 font-semibold text-midnight_text dark:text-white mb-3">
              Melayani Jawa Timur
            </h3>
            <p className="text-base text-muted dark:text-white dark:text-opacity-70">
              Kami melayani seluruh wilayah Jawa Timur dengan komitmen untuk memberikan akses mudah terhadap peralatan listrik berkualitas.
            </p>
          </div>
        </div>

        {/* Services Overview */}
        <div className="bg-heroBg dark:bg-midnight_text rounded-3xl lg:px-16 px-4 py-12">
          <h2 className="md:text-35 sm:text-28 text-24 font-semibold text-midnight_text dark:text-white text-center mb-8">
            Bidang <span className="text-primary">Keahlian</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <Icon
                icon="solar:plug-circle-bold"
                width="64"
                height="64"
                className="text-primary mx-auto mb-4"
              />
              <h3 className="text-20 font-semibold text-midnight_text dark:text-white mb-2">
                Electrical System
              </h3>
              <p className="text-base text-muted dark:text-white dark:text-opacity-70">
                Sistem kelistrikan lengkap untuk berbagai kebutuhan proyek
              </p>
            </div>

            <div className="text-center">
              <Icon
                icon="solar:settings-bold"
                width="64"
                height="64"
                className="text-primary mx-auto mb-4"
              />
              <h3 className="text-20 font-semibold text-midnight_text dark:text-white mb-2">
                Mechanical System
              </h3>
              <p className="text-base text-muted dark:text-white dark:text-opacity-70">
                Peralatan mekanik berkualitas untuk mendukung operasional
              </p>
            </div>

            <div className="text-center">
              <Icon
                icon="solar:cpu-bolt-bold"
                width="64"
                height="64"
                className="text-primary mx-auto mb-4"
              />
              <h3 className="text-20 font-semibold text-midnight_text dark:text-white mb-2">
                Automation System
              </h3>
              <p className="text-base text-muted dark:text-white dark:text-opacity-70">
                Sistem otomasi modern untuk efisiensi dan produktivitas
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;


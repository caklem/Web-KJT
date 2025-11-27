import Link from "next/link";
import { Icon } from "@iconify/react";
import Image from "next/image";

const Solution = () => {
  return (
    <section className="dark:bg-darkmode overflow-x-hidden py-14">
      <div className="container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) px-4">
        <div className="bg-heroBg dark:bg-midnight_text rounded-3xl lg:px-16 px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-8">
            {/* Left image */}
            <div className="flex justify-center">
              <Image
                src="/Kontent/Gambar 6.jpg"
                alt="Gambar 6"
                width={250}
                height={250}
                className="rounded-xl object-cover"
              />
            </div>
            {/* Center paragraph */}
            <div className="flex flex-col items-center text-center">
              <h1 className="md:text-35 sm:text-28 text-24 font-semibold text-midnight_text dark:text-white mb-4">
                Tentang <span className="text-primary">Kami</span>
              </h1>
              <p className="mt-2 text-base text-muted dark:text-white dark:text-opacity-70 max-w-md text-justify">
                CV. Kurnia Jaya Teknik adalah penyedia peralatan listrik terpercaya di Jawa Timur dengan pengalaman bertahun-tahun. Kami melayani kebutuhan peralatan listrik untuk berbagai proyek dengan kualitas terbaik dan pelayanan yang memuaskan.
              </p>
              <Link
                href="/about"
                className="lg:text-17 flex gap-4 w-fit items-center bg-primary text-white py-2 px-4 lg:py-3 lg:px-8 rounded-lg mt-8 border border-primary hover:text-primary hover:bg-transparent mx-auto"
              >
                Pelajari Lebih Lanjut
                <Icon
                  icon="solar:alt-arrow-right-linear"
                  width="13"
                  height="13"
                />
              </Link>
            </div>
            {/* Right image */}
            <div className="flex justify-center">
              <Image
                src="/Kontent/Gambar 7.jpg"
                alt="Gambar 7"
                width={250}
                height={250}
                className="rounded-xl object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;

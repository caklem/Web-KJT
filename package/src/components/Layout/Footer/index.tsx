import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { footerLinks } from "@/app/api/data";

const Footer = () => {
  return (
    <footer className="pt-12 mt-14 bg-midnight_text relative">
      <div className="container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) px-2">

        {/* ===================== LOGO + ABOUT US ===================== */}
        <div className="flex flex-col items-center text-center mb-12">
          <Image
            src="/images/logo/logo.svg"
            alt="Company Logo"
            width={120}
            height={120}
            className="mb-4"
          />
          <p className="text-foottext text-16 max-w-xl">
            Kami adalah perusahaan yang bergerak di bidang produksi dan inovasi
            teknologi, berkomitmen memberikan kualitas terbaik dan layanan profesional
            untuk setiap pelanggan kami.
          </p>
        </div>

        {/* ===================== CONTACT + SOCIAL ===================== */}
        <div className="flex flex-col border-b border-dark_border pb-14 mb-16">
          <div className="flex flex-col gap-6 items-center text-center max-w-4xl mx-auto">
            
            {/* Address */}
            <div className="flex items-start justify-center gap-3 text-foottext text-16">
              <Icon icon="weui:location-outlined" className="w-7 h-7 flex-shrink-0 mt-1" />
              <Link 
                href="https://maps.app.goo.gl/rHXcn3mr2hpYdCLc7?g_st=ic"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                Dusun kemuning, RT.010/RW.004, Sawah, Gambir Kuning, Kraton, Pasuruan Regency, East Java
              </Link>
            </div>

            {/* Phone & Email */}
            <div className="flex flex-wrap gap-8 justify-center">
              <div className="flex items-center gap-2 text-foottext">
                <Icon icon="majesticons:phone-retro-line" className="w-6 h-6" />
                <Link href="tel:+6234356188810" className="text-16 hover:text-primary">
                  (0343) 5618810
                </Link>
              </div>

              <div className="flex items-center text-foottext gap-2">
                <Icon icon="clarity:email-line" className="w-6 h-6" />
                <Link 
                  href="https://mail.google.com/mail/?view=cm&to=kurniajayatek@gmail.com&su=Pesan%20dari%20Website%20Kurnia%20Jaya%20Teknik&body=Halo%20CV%20Kurnia%20Jaya%20Teknik,%20saya%20ingin%20menghubungi%20Anda%20melalui%20website."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-16 hover:text-primary"
                >
                  kurniajayatek@gmail.com
                </Link>
              </div>
            </div>
          </div>

          <div className="justify-center flex gap-4 mt-8">
            <Link href="#" className="text-muted hover:text-primary">
              <Icon icon="fe:facebook" width="32" height="32" />
            </Link>
            <Link href="#" className="text-muted hover:text-primary">
              <Icon icon="fa6-brands:square-twitter" width="32" height="32" />
            </Link>
            <Link href="#" className="text-muted hover:text-primary">
              <Icon icon="fa6-brands:linkedin" width="32" height="32" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
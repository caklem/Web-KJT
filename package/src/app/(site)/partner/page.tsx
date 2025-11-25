import React from "react";
import HeroSub from "@/components/SharedComponents/HeroSub";
import { Metadata } from "next";
import Partner from "@/components/Partner";

export const metadata: Metadata = {
  title: "Partner | CV. Kurnia Jaya Teknik",
  description: "Partner dan klien terpercaya CV. Kurnia Jaya Teknik - Penyedia peralatan listrik terpercaya di Jawa Timur",
};

const page = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Beranda" },
    { href: "/partner", text: "Partner" },
  ];
  return (
    <>
      <HeroSub
        title="Partner Kami"
        description="Perusahaan terpercaya yang telah bekerja sama dengan CV. Kurnia Jaya Teknik"
        breadcrumbLinks={breadcrumbLinks}
      />
      <Partner />
    </>
  );
};

export default page;


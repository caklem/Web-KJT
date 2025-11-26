import React from "react";
import HeroSub from "@/components/SharedComponents/HeroSub";
import { Metadata } from "next";
import Partner from "@/components/Partner";

export const metadata: Metadata = {
  title: "Client Kami | CV. Kurnia Jaya Teknik",
  description:
    "Client kami di bidang mekanikal, elektrikal, dan otomasi mempercayakan proyek kepada CV. Kurnia Jaya Teknik.",
};

const page = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Beranda" },
    { href: "/partner", text: "Client Kami" },
  ];
  return (
    <>
      <HeroSub
        title="Client Kami"
        description="Klien terpilih yang mempercayakan proyek mekanikal & elektrikal kepada kami"
        breadcrumbLinks={breadcrumbLinks}
      />
      <Partner />
    </>
  );
};

export default page;


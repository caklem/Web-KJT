import Image from "next/image";
import Link from "next/link";

const Logo: React.FC = () => {
  return (
    <Link href="/">
      <Image
        src="/Kontent/LOGO 2.png"
        alt="Kurnia Jaya Teknik Logo"
        width={200}
        height={60}
        quality={100}
        className="object-contain"
        priority
      />
    </Link>
  );
};

export default Logo;

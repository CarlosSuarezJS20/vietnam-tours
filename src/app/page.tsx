import SideNav from "./ui/components/sidenav";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <SideNav />
      <Image
        src='https://asiaeyestravel.com/uploads/source//banner/luxury-package-tours.png'
        width={1920}
        height={500}
        quality={70}
        alt='Cruises Halong Bay'
      />
    </main>
  );
}

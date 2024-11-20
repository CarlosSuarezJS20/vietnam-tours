import SideNav from "./ui/components/navbar";
import Image from "next/image";

const Home = () => {
  return (
    <main className='h-1'>
      <Image
        src='https://asiaeyestravel.com/uploads/source//banner/luxury-package-tours.png'
        width={1920}
        height={500}
        quality={70}
        alt='Cruises Halong Bay'
      />
    </main>
  );
};

export default Home;

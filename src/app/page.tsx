import Image from "next/image";
import HomeSearch from "./ui/components/home-search";

const Home = () => {
  return (
    <main className='z-0'>
      <div className='position: relative'>
        <HomeSearch />
        <Image
          src='https://asiaeyestravel.com/uploads/source//banner/luxury-package-tours.png'
          width={1920}
          height={500}
          quality={70}
          alt='Cruises Halong Bay'
        />
      </div>
    </main>
  );
};

export default Home;

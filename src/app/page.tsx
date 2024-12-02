import Image from "next/image";
import HomeSearch from "./ui/components/home-search";
import homeVietnamImg from "./img/home-vietnam.jpg";
import tripadvisor from "./img/tripadvisor-aard-150x150.png";
import pataAdventure from "./img/pata-adventure-travel-and-responsible-tourism-conference-1592882549718909933295-0-38-440-698-crop-15928829454531001057594.jpg";
import vietTours from "./img/vietnam timeless charm.png";

const Home = () => {
  return (
    <main className='relative z-0 min-w-px'>
      <div className='position: relative'>
        <HomeSearch />
        <Image
          src={homeVietnamImg}
          width={1920}
          height={500}
          quality={70}
          alt='Cruises Halong Bay'
          className='w-full h-1/5 object-cover'
        />
        <div
          className='z-30 md:absolute bottom-0 right-0
         w-3/4 md:w-2/3 m-auto bg-white py-2'>
          <div className='p-4'>
            <h2 className='text-center sm:text-md text-xl md:text-3xl font-bold'>
              Our Rewards & Achievements
            </h2>
          </div>
          <div className='flex justify-around'>
            <div className='flex items-center py-1 justify-center gap-2 w-16'>
              <Image
                src={tripadvisor}
                height={500}
                width={500}
                quality={80}
                alt='tripadvisor logo'
              />
              <span className='text-sm'>Travellers Choice</span>
            </div>
            <div className='flex items-center py-1 justify-center gap-2 w-16'>
              <Image
                className='rounded-md'
                src={pataAdventure}
                height={500}
                width={500}
                quality={80}
                alt='Pata logo'
              />

              <span className='text-sm'>Travel Association Members</span>
            </div>
            <div className='flex items-center py-1 justify-center gap-2 w-16'>
              <Image
                src={vietTours}
                height={500}
                width={500}
                quality={80}
                alt='Timeless logo'
              />

              <span className='text-sm'>Timeless Charm</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;

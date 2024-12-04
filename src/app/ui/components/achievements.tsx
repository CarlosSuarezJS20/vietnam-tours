import Image, { StaticImageData } from "next/image";

interface AchievementProps {
  src: StaticImageData;
  height: number;
  width: number;
  quality: number;
  alt: string;
  spanText: string;
}

const Achievement: React.FC<AchievementProps> = ({
  src,
  height,
  width,
  quality,
  alt,
  spanText,
}) => {
  return (
    <div className='flex items-center py-1 justify-center gap-2 w-16'>
      <Image
        src={src}
        height={height}
        width={width}
        quality={quality}
        alt={alt}
      />
      <span className='text-sm'>{spanText}</span>
    </div>
  );
};

export default Achievement;

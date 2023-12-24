'use client';

import Image from 'next/image';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from 'react-icons/io';

export default function Carousel() {
  const images = [
    'https://nos.jkt-1.neo.id/artikular-asset/main/bg_jps_3.png',
    'https://nos.jkt-1.neo.id/artikular-asset/main/jps-all.png',
  ];

  return (
    <Slide
      duration={1500}
      transitionDuration={1000}
      pauseOnHover={false}
      prevArrow={
        <button className='pl-4 text-gray-300'>
          <IoIosArrowDropleftCircle size={40} />
        </button>
      }
      nextArrow={
        <button className='pr-4 text-gray-300'>
          <IoIosArrowDroprightCircle size={40} />
        </button>
      }
    >
      {images.map((image, key) => (
        <div className='flex w-full items-center justify-center' key={key}>
          <Image
            src={image}
            alt='jps-all'
            sizes='100vw'
            style={{ width: '100%', height: 'auto' }}
            width={1920}
            height={1080}
          />
        </div>
      ))}
    </Slide>
  );
}

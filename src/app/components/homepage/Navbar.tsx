'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const [prevScroll, setPrevScroll] = useState<number>(0);
  const [visible, setVisible] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const isVisible = currentScrollPos < 18;

      setPrevScroll(currentScrollPos);
      setVisible(isVisible);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.addEventListener('scroll', handleScroll);
    };
  }, [prevScroll]);

  return (
    <nav
      className={`fixed z-[2] flex w-full flex-col items-center ${
        visible ? 'bg-transparent' : 'bg-white'
      } transition-all duration-700 ease-in-out`}
    >
      <div className={`relative flex ${visible ? 'w-[128px]' : 'w-20'} transition-[width] duration-700 ease-in-out`}>
        <Image
          src={'/main_jps_bg.png'}
          alt='logo'
          width={70}
          height={70}
          style={{ width: '100%', height: 'auto' }}
        />
      </div>
      <div
        className={`${
          visible ? '' : 'hidden'
        } flex w-2/4 flex-row justify-evenly`}
      >
        <Link href={'#'} className='font-semibold'>
          Home
        </Link>
        <Link href={'#'} className='font-semibold'>
          Workshop
        </Link>
        <Link href={'#'} className='font-semibold'>
          Gallery
        </Link>
        <Link href={'#'} className='font-semibold'>
          About
        </Link>
      </div>
    </nav>
  );
}

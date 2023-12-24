import Image from 'next/image';
import Link from 'next/link';
import Navbar from './components/homepage/Navbar';
import Carousel from './components/homepage/Carousel';
import Main from './components/homepage/Main';
import Footer from './components/homepage/Footer';

export default function Home() {
  return (
    <main className='relative flex min-h-screen flex-col items-center'>
      <Navbar />
      <div className='min-h-screen w-full pt-[155px]'>
        <Carousel />

        <div className='relative min-h-32'>
          <div className='absolute -top-20 flex w-full items-center justify-evenly gap-6'>
            <div className='flex min-h-48 max-w-60 flex-col justify-evenly rounded border-2 bg-gray-300 p-4'>
              <p>International Fluoroscopy Exam Preparation Course</p>
              <p>tanggal</p>
              <p>price</p>
            </div>
            <div className='flex min-h-48 max-w-60 flex-col justify-evenly rounded border-2 bg-gray-300 p-4'>
              <p>COMSK certification usg guided</p>
              <p>tanggal</p>
              <p>price</p>
            </div>
            <div className='flex min-h-48 max-w-60 flex-col justify-evenly rounded border-2 bg-gray-300 p-4'>
              <p>
                brawijaya outreach program orthopaedic department dan resident
              </p>
              <p>tanggal</p>
              <p>price</p>
            </div>
          </div>
        </div>
      </div>

      <Main />
      <Footer />
    </main>
  );
}

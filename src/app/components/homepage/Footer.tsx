import Image from 'next/image';

export default function Footer() {
  return (
    <div className='flex w-full items-center justify-center gap-8'>
      <div className='relative'>
        <Image src={'/main_jps_bg.png'} alt='logo' width={200} height={200} />
      </div>
      <div className='flex flex-col'>
        <p className='mb-2'>
          Jl. Radio Dalam Raya No.40,
          <br />
          Gandaria Utara, Kec. Kby. Baru, Kota Jakarta Selatan,
          <br />
          Daerah Khusus Ibukota Jakarta 12140
        </p>
        <p className='mb-2'>admin@jakartapainschool.com</p>
        <p className='mb-2'>087813582250</p>
      </div>
    </div>
  );
}

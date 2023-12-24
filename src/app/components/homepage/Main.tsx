import Image from 'next/image';

export default function Main() {
  return (
    <div className='relative mb-8 min-h-screen w-full'>
      <div className='flex items-center justify-center gap-4 p-4'>
        <div className='max-w-1/2 flex flex-col gap-4'>
          <h4>Watch Our Courses</h4>
          <p className='w-3/4'>
            Problems trying to resolve the conflict between the two major realms
            of Classical physics
          </p>
          <div className=''>
            <button className='rounded bg-gray-300 p-1'>Learn More</button>
          </div>
        </div>
        <div className='max-w-1/2'>
          <Image src={'/main_jps_bg.png'} alt='logo' width={300} height={300} />
        </div>
      </div>

      <div className='flex flex-col items-center gap-4'>
        <div className='grid grid-cols-4 items-center gap-4 px-8'>
          {[1, 2, 3, 4, 5, 6, 7, 8].map((el, key) => (
            <div
              className='flex flex-col justify-center gap-2 rounded border p-2'
              key={key}
            >
              <div className='flex w-full justify-center'>
                <Image
                  src={'/main_jps_bg.png'}
                  alt='logo'
                  width={200}
                  height={200}
                />
              </div>
              <div className='flex items-start'>
                <p className='text-lg font-bold'>Lorem ipsum dolor {el}</p>
              </div>
              <p className='text-justify'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                est, ut qui tenetur fugiat corrupti provident porro
              </p>
            </div>
          ))}
        </div>
        <div className='relative'>
          <button className='rounded border-2 p-3'>See More</button>
        </div>
      </div>
    </div>
  );
}

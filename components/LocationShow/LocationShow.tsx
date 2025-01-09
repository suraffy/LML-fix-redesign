import { Separator } from '@/components/ui/separator';
import Image from 'next/image';
import React from 'react';
import logo from '@/public/lml_logo.png';
import { LocationInfo } from '@/types/Location';

export default function LocationShow({ location }: { location: LocationInfo }) {
  return (
    <div>
      <div className='flex flex-col items-center gap-10 mt-16'>
        <Image
          src={logo}
          width={100}
          height={100}
          alt='logo_lml_fix'
          className='rounded-2xl hover:scale-110 hover:delay-150 hover:duration-150 transition-all cursor-pointer'
        />
        <Separator />
        <h1 className='text-4xl font-bold text-center'>
          Call Us Now To Get $10 Off
        </h1>
      </div>
      <div className='gap-2'>
        <div className='flex flex-col items-center'>
          <h1 className='text-3xl font-bold mt-8 mb-3'>{location.name}</h1>
          <p className='text-yellow-500 underline underline-offset-1'>
            ({location.number})
          </p>
        </div>
        <div className='flex flex-col items-center text-center space-y-2'>
          <p>8am - 7pm Everyday</p>
          <p>{location.address}</p>
          <div className='w-full overflow-hidden p-3 sm:p-8 md:20'>
            <iframe
              src={location.position}
              className='w-full h-96 border-0 rounded-xl'
              aria-hidden='false'
              title='Shop Location'
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

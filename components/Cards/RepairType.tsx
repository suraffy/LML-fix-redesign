import { CirclePlus } from 'lucide-react';
import React from 'react';
import Image, { StaticImageData } from 'next/image';

export type RepairTypeProps = {
  logo: StaticImageData;
  title: string;
  description: string;
};

export default function RepairType({
  logo,
  title,
  description,
}: RepairTypeProps) {
  return (
    <div className='h-full w-[300px] bg-white text-black p-6 py-8  rounded-lg hover:shadow-lg flex flex-col items-center border transition-all duration-300'>
      <div>
        <Image
          src={logo}
          width={100}
          height={100}
          alt='logo_lml_fix'
          className='rounded-2xl'
        />
      </div>
      <p className='text-2xl font-bold my-3 text-center'>{title}</p>
      <p className='text-center font-semibold text-gray-600'>{description} </p>
    </div>
  );
}

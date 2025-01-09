import React from 'react';
import logo from '@/public/lml_logo.png';
import bg from '@/public/broken-iphone.png';
import quick from '@/public/add.png';
import quality from '@/public/app-development.png';
import fast from '@/public/clock.png';
import Image from 'next/image';
import PrimaryButton from '../Buttons/PrimaryButton';
import { PhoneCall, Send, Signpost } from 'lucide-react';

import EntranceHelp from './EntranceHelp';
import RepairType, { RepairTypeProps } from '../Cards/RepairType';
import Link from 'next/link';

export type LocationLandingProps = {
  location: string;
  address: string;
  near: string;
  building: string;
  floor: string;
  number: string;
  steps: string[];
  position: string;
  direction: string;
};

export default function LocationLanding({
  data,
}: {
  data: LocationLandingProps;
}) {
  const repairType: RepairTypeProps[] = [
    {
      title: 'Quick Diagnostic',
      logo: quick,
      description:
        "Need a service? Save time and find out what's wrong with your device.",
    },
    {
      title: 'Fast Turnaround',
      logo: fast,
      description:
        'Our techs are here to deliver high-quality and service so you don’t have to wait long.',
    },
    {
      title: 'Premium Quality Parts',
      logo: quality,
      description:
        'For the best quality services, we use premium quality and replacement parts.',
    },
  ];
  return (
    <div
      className='min-h-screen bg-center bg-cover bg-fixed relative text-white'
      style={{
        backgroundImage: `url(${bg.src})`,
      }}
    >
      <div className='min-h-[90vh] gap-2.5 flex flex-col justify-center items-center px-5 sm:px-14 bg-black/55'>
        <p className='text-4xl sm:text-5xl font-bold px-10 text-center'>
          Issues With Your <span className='text-red-600'>Devices?</span>
        </p>
        <p className='text-2xl font-semibold'>We Got You Covered!</p>
        <p className='font-bold text-sm'>{data.address}</p>
        <div className='gap-3 text-black flex flex-wrap items-center justify-center'>
          <Link href={`tel: ${data.number}`}>
            <PrimaryButton
              title='Call Us'
              icon={<PhoneCall size={23} aria-label='Call Us' />}
            />
          </Link>
          <Link href={`sms: ${data.number}`}>
            <PrimaryButton
              title='Text Us'
              icon={<Send aria-label='Text Us' />}
            />
          </Link>
          <Link href={data.direction} target='blank'>
            <PrimaryButton
              title='Get Direction'
              icon={<Signpost aria-label='Get Directions' />}
            />
          </Link>
        </div>
      </div>

      <div className='bg-white p-5 py-14 flex flex-col items-center text-black font-bold text-2xl'>
        <p>GET $10 OFF YOUR SERVICE</p>
        <div className='border-2 rounded-md w-full mt-5'></div>
      </div>
      <div className='flex justify-center items-center py-8 bg-white'>
        <div className='grid md:grid-cols-3 gap-5'>
          {repairType.map((item, index) => (
            <RepairType
              key={index}
              title={item.title}
              logo={item.logo}
              description={item.description}
            />
          ))}
        </div>
      </div>

      <div className='rounded-md w-full p-5 bg-white'></div>

      <div className='bg-white gap-5 text-black grid sm:grid-cols-2 p-5'>
        <div className='sm:border-r-4 flex flex-col items-center'>
          <p className='text-2xl font-bold my-3'>{data.location}</p>
          <div>
            <div className='flex items-center gap-2'>
              <p className='font-semibold'>Business Hours:</p>
              <div>
                <p>8am - 7pm Everyday.</p>
              </div>
            </div>
            <div className='flex items-center gap-2'>
              <p className='font-semibold'>Location:</p>
              <div>
                <p>{data.near}</p>
              </div>
            </div>
            <div className='flex items-center gap-2'>
              <p className='font-semibold'>Building:</p>
              <div>
                <p>{data.building}</p>
              </div>
            </div>
            <div className='flex items-center gap-2'>
              <p className='font-semibold'>Floor:</p>
              <div>
                <p>{data.floor}</p>
              </div>
            </div>
            {/* <EntranceHelp steps={data.steps} /> */}

            <div className='space-y-1 mt-4'>
              {data.steps.map((data, index) => (
                <div key={index} className='flex items-start'>
                  <p className='font-semibold min-w-20'>Step {index + 1}:</p>
                  <p className='text-pretty truncate'>{data}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className='flex flex-col'>
          <p className='text-xl font-semibold text-center'>Our Location</p>
          <div className='mt-5'>
            <iframe
              src={data.position}
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

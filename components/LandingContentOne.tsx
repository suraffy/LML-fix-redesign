'use client';
import { useRouter } from 'next/navigation';
import { Separator } from '@/components/ui/separator';
import logo from '@/public/lml_logo.png';
import svg from '@/public/takein.svg';
import Image from 'next/image';
import { Card } from './ui/card';
import Link from 'next/link';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from './ui/select';

function LandingContentOne() {
  const router = useRouter();

  const handleProviderSelect = (value: string) => {
    // Navigate to the selected route
    router.push(value);
  };

  return (
    <div className='flex flex-col items-center justify-center gap-10 mt-16 sm:px-5'>
      <Image
        src={svg}
        width={120}
        height={120}
        alt='logo_lml_fix'
        className='rounded-2xl border hover:scale-110 hover:delay-150 hover:duration-150 transition-all mt-10 cursor-pointer'
      />
      <div className='flex flex-col items-center justify-center gap-2'>
        <div className='p-3 space-y-6'>
          <h1 className='text-3xl font-bold text-center'>
            Find Authorized Service Locations -{' '}
            <span className='text-red-600'>Get $10 Off</span>
          </h1>
          <div className='px-4 sm:px-10 mb-10'>
            <Select onValueChange={handleProviderSelect}>
              <SelectTrigger className='w-full'>
                <SelectValue
                  placeholder='Select a Provider'
                  className='text-center text-lg font-semibold'
                />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value='/seattle'>
                  <span className='text-base font-semibold'>Seattle</span>
                </SelectItem>
                <SelectItem value='/westseattle'>
                  <span className='text-base font-semibold'>West Seattle</span>
                </SelectItem>
                <SelectItem value='/northseattle'>
                  <span className='text-base font-semibold'>North Seattle</span>
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <Separator />
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-1 mt-10 w-full'>
          <Card className='p-7 bg-[#f2f2f2]'>
            <Link href='/westseattle'>
              <div className='flex flex-col items-center gap-2'>
                <h1 className='text-xl font-bold'>West Seattle</h1>
                <p className='text-yellow-500'>(206-832-5834)</p>
                <div className='flex flex-col items-center text-center space-y-2'>
                  <p>8am - 7pm Everyday</p>
                  <p>3400 Harbor Ave SW STE #301, Seattle, WA 98126, USA</p>
                  <div className='w-full overflow-hidden'>
                    <iframe
                      src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d86135.66264469302!2d-122.52284050273434!3d47.572857500000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5490435d141069cd%3A0x8949cfda1da34803!2sLML%20Repair%20-%20Same%20Day%20Phone%20%26%20Tablet%20Repair!5e0!3m2!1sen!2sus!4v1722519680294!5m2!1sen!2sus'
                      className='w-full h-96 border-0 rounded-xl'
                      aria-hidden='false'
                      title='Shop Location'
                    ></iframe>
                  </div>
                </div>
              </div>
            </Link>
          </Card>

          <Card className='p-7 bg-[#f2f2f2]'>
            <Link href='/seattle'>
              <div className='flex flex-col items-center gap-2'>
                <h1 className='text-xl font-bold'>Seattle</h1>
                <p className='text-yellow-500 underline underline-offset-1'>
                  (206-745-2002)
                </p>
                <div className='flex flex-col items-center text-center space-y-2'>
                  <p>8am - 7pm Everyday</p>
                  <p>700 NW 42nd St STE #333, Seattle, WA 98107, USA</p>
                </div>
                <div className='w-full overflow-hidden'>
                  <iframe
                    src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2687.3589847913568!2d-122.36782272360401!3d47.65802217119456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5490154fe786c23b%3A0x4ebd3ad31cbb95ee!2sLML%20Repair%20-%20Ballard!5e0!3m2!1sen!2sus!4v1694732382875!5m2!1sen!2sus'
                    className='w-full h-96 border-0 rounded-xl'
                    aria-hidden='false'
                    title='Shop Location'
                  ></iframe>
                </div>
              </div>
            </Link>
          </Card>

          <Card className='p-7 bg-[#f2f2f2]'>
            <Link href='northseattle'>
              <div className='flex flex-col items-center gap-2'>
                <h1 className='text-xl font-bold'>North Seattle</h1>
                <p className='text-yellow-500'>(206-745-2977)</p>
                <div className='flex flex-col items-center text-center space-y-2'>
                  <p>8am - 7pm Everyday</p>
                  <p>10015 Lake City Way NE STE #231, Seattle WA, 98125, USA</p>
                </div>
                <div className='w-full overflow-hidden'>
                  <iframe
                    src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d86029.7856478836!2d-122.41901626540476!3d47.63719469918059!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x549013a42b28bdbf%3A0xddf67a8bb8f93d1e!2sLML%20Repair%20-%20North%20Seattle!5e0!3m2!1sen!2sso!4v1707896875796!5m2!1sen!2sso'
                    className='w-full h-96 border-0 rounded-xl'
                    aria-hidden='false'
                    title='Shop Location'
                  ></iframe>
                </div>
              </div>
            </Link>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default LandingContentOne;

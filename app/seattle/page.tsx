import type { Metadata } from 'next';
import LocationDetails from '@/components/Location/LocationDetails';

export const metadata: Metadata = {
  title: 'Seattle | LML Fix',
  description: 'Near Fred Meyer on Leary Wy NW',
};

const page = () => {
  const data = {
    location: 'Seattle',
    address: '700 NW 42nd St STE #333, Seattle, WA 98107, United States',
    near: 'Near Fred Meyer on Leary Wy NW',
    building: 'Big red/white building',
    floor: '3rd floor',
    number: '206-745-2002',
    steps: [
      'Go to the front of the building',
      'Find the elevator behind the leasing office',
      "Enter '00333' on the callbox; we will buzz you in",
      'Go to the 3rd floor',
      'Walk straight and turn right down the hallway',
      'Located in Suite #333',
    ],
    position:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2687.3589847913568!2d-122.36782272360401!3d47.65802217119456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5490154fe786c23b%3A0x4ebd3ad31cbb95ee!2sLML%20Repair%20-%20Ballard!5e0!3m2!1sen!2sus!4v1694732382875!5m2!1sen!2sus',
    direction:
      'https://www.google.com/maps/place/LML+Repair+-+Same+Day+Phone+,+iPad+,+MacBook+Repair/@47.658022,-122.365248,16z/data=!4m6!3m5!1s0x5490154fe786c23b:0x4ebd3ad31cbb95ee!8m2!3d47.6580222!4d-122.3652478!16s%2Fg%2F11v53rzsyt?hl=en&entry=ttu&g_ep=EgoyMDI0MTEwNi4wIKXMDSoASAFQAw%3D%3D',
  };

  return <LocationDetails data={data} />;
};

export default page;

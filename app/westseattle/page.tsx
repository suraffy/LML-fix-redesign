import LocationDetails from '@/components/Location/LocationDetails';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'West Seattle | LML Fix',
  description: 'Near the West Seattle Bridge on Harbor Ave',
};

const page = () => {
  const data = {
    location: 'West Seattle',
    address: '3400 Harbor Ave SW STE #301, Seattle, WA 98126, United States',
    near: 'Near the West Seattle Bridge on Harbor Ave',
    building: 'Big red/white building',
    floor: '3rd floor',
    number: '206-832-5834',
    steps: [
      'Go to the back of the building',
      'Find the elevator across from the main office',
      "Enter '00301' on the callbox; we will buzz you in",
      'Go to the 3rd floor',
      'Turn left and walk down the hallway',
      'Located in Suite #301',
    ],
    position:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d86135.66264469302!2d-122.52284050273434!3d47.572857500000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5490435d141069cd%3A0x8949cfda1da34803!2sLML%20Repair%20-%20Same%20Day%20Phone%20%26%20Tablet%20Repair!5e0!3m2!1sen!2sus!4v1722519680294!5m2!1sen!2sus',
    direction:
      'https://www.google.com/maps?ll=47.572857,-122.370405&z=11&t=m&hl=en&gl=US&mapclient=embed&cid=9892666592203065347',
  };

  return <LocationDetails data={data} />;
};

export default page;

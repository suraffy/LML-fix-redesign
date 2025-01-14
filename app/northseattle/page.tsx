import LocationDetails from '@/components/Location/LocationDetails';

const page = () => {
  const data = {
    location: 'North Seattle',
    address: '10015 Lake City Way NE STE #231, Seattle, WA 98125, United States',
    near: 'Near Les Schwab on Lake City Way NE',
    building: 'Big red/white building',
    floor: '2nd floor',
    number: '206-745-2977',
    steps: [
      'Go to the front of the building',
      'Find the elevator behind the leasing office',
      "Enter '00231' on the callbox; we will buzz you in",
      'Go to the 2nd floor',
      'Walk straight and turn right down the hallway',
      'Located in Suite #231',
    ],
    position:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d86029.7856478836!2d-122.41901626540476!3d47.63719469918059!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x549013a42b28bdbf%3A0xddf67a8bb8f93d1e!2sLML%20Repair%20-%20North%20Seattle!5e0!3m2!1sen!2sso!4v1707896875796!5m2!1sen!2sso',
    direction:
      'https://www.google.com/maps?ll=47.70166,-122.302661&z=11&t=m&hl=en&gl=SO&mapclient=embed&cid=15994105867175279902',
  };

  return <LocationDetails data={data} />;
};

export default page;

import React, { ReactElement } from 'react';

export default function PrimaryButton({
  title,
  icon,
}: {
  title: string;
  icon: ReactElement<any, any>;
}) {
  return (
    <div>
      <button className='p-3 px-5 justify-between flex gap-2 items-center bg-white rounded-lg font-semibold'>
        {icon}
        {title}
      </button>
    </div>
  );
}

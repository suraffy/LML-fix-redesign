import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog';
import { MessageCircleQuestion } from 'lucide-react';

export default function EntranceHelp({ steps }: { steps: string[] }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <p className='text-blue-600 cursor-pointer underline font-semibold flex items-center gap-2'>
          Entrance Help
          <MessageCircleQuestion size={16} />
        </p>
      </DialogTrigger>
      <DialogContent className='h-fit mx-auto my-auto'>
        <DialogHeader>
          <DialogTitle>Entrance Help</DialogTitle>
          <DialogDescription>How to Enter the Seattle Shop</DialogDescription>
        </DialogHeader>
        <div className='space-y-1 mt-4'>
          {steps.map((data, index) => (
            <div key={index} className='flex items-start gap-2'>
              <p className='font-semibold w-16'>Step {index + 1}:</p>
              <p>{data}</p>
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}

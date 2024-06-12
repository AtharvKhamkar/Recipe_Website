import { Heart, HeartPulseIcon, Soup } from 'lucide-react';
import React from 'react';

const RecipeCard = () => {
  return (
    <div className='flex flex-col rounded-md bg-[#ecf7d4] overflow-hidden p-3 relative'>
      <a href='#' className='relative h-32'>
        <img
          src='/1.jpg'
          alt='recipe 1'
          className='rounded-md w-full h-full object-cover cursor-pointer'
        />
        <div className='absolute bottom-2 left-2 bg-white rounded-full p-1 cursor-pointer flex items-center gap-1 text-sm'>
          <Soup size={'16'} /> 4 Servings
        </div>
        <div className='absolute top-1 right-2 bg-white p-1 cursor-pointer rounded-full'>
          <Heart
            size={'20'}
            className='hover:fill-red-500 hover:text-red-500'
          />
        </div>
      </a>
      <div className='flex flex-col p-1'>
        <p className='text-slate-800 font-semibold text-md tracking-wide'>
          Rostisserie Chicken Recipe
        </p>
        <p className='text-sm text-gray-500 mb-2'>Mexican Kitchen</p>
        <div className='flex p-1 gap-2'>
          <div className='flex rounded-lg gap-1 justify-center items-center bg-[#d6f497] p-1'>
            <HeartPulseIcon size={'16'} color='gray' />
            <span className='text-sm text-gray-500'>Sugar Conscious</span>
          </div>
          <div className='flex rounded-lg gap-1 justify-center items-center bg-[#d6f497] p-1'>
            <HeartPulseIcon size={'16'} color='gray' />
            <span className='text-sm text-gray-500'>Keto friendly</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;

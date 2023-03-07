import React from 'react';

type Props = {};

function Navbar({}: Props) {
  return (
    <div className='w-3/4 h-20 mb-4 mx-auto flex justify-between px-12 items-center font-normalFont '>
      <h1 className='text-white text-4xl hover:text-red-400 tracking-wider'>
        OKEY GAME
      </h1>

      <ul className='text-white text-2xl flex justify-between tracking-wider gap-6'>
        <li className='hover:text-red-400'>PLAY</li>
        <li className='hover:text-red-400'>ABOUT</li>
        <li className='hover:text-red-400'>TUTORIAL</li>
      </ul>
    </div>
  );
}

export default Navbar;

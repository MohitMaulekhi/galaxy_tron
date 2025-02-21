import { Rocket } from 'lucide-react';
import React, { useState } from 'react';

function Navbar() {
  const [nav, setNav] = useState(false);
  return (
    <nav className="flex justify-between p-5 px-10 text-white bg-black shadow-[0_3px_10px_rgb(0,0,0,0.2)] w-full">
      <h1 className="text-3xl flex"><span>Galaxy Store &nbsp;</span><Rocket className="h-8 w-8 text-blue-500" /></h1>
      <ul className="hidden md:flex gap-6 ">
        <li className="text-2xl hover:text-blue-500">
          <a href="#home" className="cursor-pointer">Home</a>
        </li>
        <li className="text-2xl hover:text-blue-500">
          <a href="#about" className="cursor-pointer">About</a>
        </li>
        <li className="text-2xl hover:text-blue-500">
          <a href="#catalogue" className="cursor-pointer">Catalogue</a>
        </li>
        <li className="text-2xl hover:text-blue-500">
          <a href="#reviews" className="cursor-pointer">Reviews</a>
        </li>
      </ul>
      <div className="md:hidden">
        <button onClick={() => setNav(!nav)} className="pl-16 text-xl">
          {nav ? '✖️' : '☰'}
        </button>
        <ul className={`${nav ? 'translate-x-0' : '-translate-x-full'} md:hidden flex flex-col absolute left-0 top-20 text-center h-fit w-full transition-transform duration-300 bg-black text-white p-4`}>
          <li className="text-xl hover:text-blue-500">
            <a href="#home" className="cursor-pointer">Home</a>
          </li>
          <li className="text-xl hover:text-blue-500">
            <a href="#about" className="cursor-pointer">About</a>
          </li>
          <li className="text-xl hover:text-blue-500">
            <a href="#catalogue" className="cursor-pointer">Catalogue</a>
          </li>
          <li className="text-xl hover:text-blue-500">
            <a href="#reviews" className="cursor-pointer">Reviews</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

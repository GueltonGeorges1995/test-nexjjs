import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../public/Images/Logo_Test_Next.png';

export default function Navbar() {
  return (
    <nav className="font-sans flex flex-col text-center sm:flex-row sm:text-left sm:justify-between py-4 px-6 sm:items-baseline w-full border-b bg-black">
      <div className="mb-2 sm:mb-0">
        <Image src={Logo} alt="logo" className="w-20 h-20 border border-white" priority />
      </div>
      <div>
        <Link href='/' className='text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2 text-white'>Home</Link>
        <Link href='/about' className='text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2 text-white'>About</Link>
        <Link href='/lists' className='text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2 text-white'>List</Link>
      </div>
    </nav>
  )
};

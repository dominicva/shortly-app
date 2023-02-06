'use client';

import Image from 'next/image';
import { useState } from 'react';
import logo from '@/assets/images/logo.svg';
import { Menu } from 'react-feather';
import Link from 'next/link';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="mb-16 flex justify-between">
      <div>
        <Image src={logo} alt="logo" className="h-8 w-32" />
      </div>
      <button onClick={() => setMenuOpen(!menuOpen)} className="relative z-10">
        <Menu />
      </button>
      <nav
        className={`absolute top-0 left-0 w-full p-6 transition duration-500 ease-in-out ${
          menuOpen ? 'translate-y-24' : '-translate-y-full'
        }`}
      >
        <ul className="flex w-full flex-col items-center gap-7 rounded-lg bg-space-cadet px-6 py-10 text-lg font-bold text-white">
          <li className="hover:cursor-pointer">Features</li>
          <li className="hover:cursor-pointer">Pricing</li>
          <li className="hover:cursor-pointer">Resources</li>
          <hr className="w-full border-manatee" />
          <button>Login</button>
          <Link
            href="/auth"
            className="w-full rounded-full bg-dark-turqoise py-3 text-center"
          >
            <button>Signup</button>
          </Link>
        </ul>
      </nav>
    </header>
  );
}

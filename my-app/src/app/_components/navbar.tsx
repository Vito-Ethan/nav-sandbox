'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import NavLinks from './nav-dropdown';

//all icons are provided by react icons library
export default function Navbar() {
  return (
    <header className="py-2 relative">
      <div className="flex justify-between items-center mx-auto max-w-2xl lg:max-w-7xl">
        <Link href="/">
          <h1 className="text-2xl font-bold hover:opacity-60">Text</h1>
        </Link>
        <NavLinks />
        <div className="flex gap-x-5 items-center">
          <Link href="/login" className="text-lg">
            Text
          </Link>
          <Link href="#">Text</Link>
          <Link href="#">Text</Link>
        </div>
      </div>
    </header>
  );
}

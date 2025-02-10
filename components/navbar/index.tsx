'use client';

import { FaWpforms } from "react-icons/fa6";
import { TbReportMoney } from "react-icons/tb";
import { SlPeople } from "react-icons/sl";
import { PiFilesLight } from "react-icons/pi";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const NavBar = () => {
  const pathname: string = usePathname();
  return (
    <nav className='fixed w-full h-12 bottom-0 p-1'>
      <ul className='flex gap-3 justify-center items-center bg-zinc-900 text-3xl h-full rounded-md'>
        <li>
          <Link 
            href={'/generator'}
            className={pathname === '/generator' ? 'text-indigo-500' : 'text-indigo-900'}	
          >
            <FaWpforms />
          </Link>
        </li>
        <li>
          <Link 
            href={'/quotes'}
            className={pathname === '/quotes' ? 'text-indigo-500' : 'text-indigo-900'}
          >
            <TbReportMoney/>
          </Link>
        </li>
        <li>
          <Link 
            href={'/clients'}
            className={pathname === '/clients' ? 'text-indigo-500' : 'text-indigo-900'}
          >
            <SlPeople/>
          </Link>
        </li>
        <li>
          <Link 
            href={'/files'}
            className={pathname === '/files' ? 'text-indigo-500' : 'text-indigo-900'}
          >
            <PiFilesLight/>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
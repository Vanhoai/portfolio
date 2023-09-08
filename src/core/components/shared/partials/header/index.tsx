import Link from 'next/link'
import React from 'react'
import { SearchNormal1 } from 'iconsax-react'
import './style.css'

const Header: React.FC = () => {
  return (
    <header className="header flex justify-between items-center px-20">
      <h2 className="text-5xl font-black">DF</h2>
      <nav className="">
        <ul className="flex">
          <li className="text-2.5xl mx-8 hover:opacity-50">
            <Link className="text-black" href="/">
              Home
            </Link>
          </li>
          <li className="text-2.5xl mx-8 hover:opacity-50">
            <Link className="text-black" href="/about">
              About
            </Link>
          </li>
          <li className="text-2.5xl mx-8 hover:opacity-50">
            <Link className="text-black" href="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <SearchNormal1 />
    </header>
  )
}

export default Header

import Link from 'next/link'
import React from 'react'

const Header: React.FC = () => {
  return (
    <header className="bg-slate-900 flex">
      <h4 className="">DepFow</h4>

      <nav className="">
        <ul className="">
          <li className="">
            <Link href="/">Home</Link>
          </li>
          <li className="">
            <Link href="/about">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header

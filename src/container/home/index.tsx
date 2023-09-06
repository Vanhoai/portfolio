import { HomeProps } from '@/app/page'
import Link from 'next/link'
import React from 'react'

const HomeContainer: React.FC<HomeProps> = () => {
  return (
    <div>
      <Link href="/about">About</Link>
    </div>
  )
}

export default HomeContainer

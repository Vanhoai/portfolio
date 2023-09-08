'use client'
import { HomeProps } from '@/app/page'
import React from 'react'
import './style.css'

const HomeContainer: React.FC<HomeProps> = () => {
  return (
    <div className="flex justify-center min-h-[500px] items-center">
      <h1 className="text-9xl font-bold">Welcome to DepFow</h1>
    </div>
  )
}

export default HomeContainer

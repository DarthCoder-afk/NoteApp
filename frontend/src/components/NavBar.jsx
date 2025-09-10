import React from 'react'
import { Link } from 'react-router'
import { PlusIcon } from 'lucide-react'

const NavBar = () => {
  return (
    <header className='bg-base-300 border-b border-base-content/20'>
        <div className='mx-auto max-w-6xl p-4'>
            <div className='flex items-center justify-between'>
                <h1 className='text-3xl font-bold text-primary font-mono tracking-tighter'>Note App</h1>
                <div className='flex items-center gap-4'>
                    <Link to={'/frontend/src/pages/CreatePage.jsx'} className='btn btn-primary text-white'>
                        <PlusIcon  className='h-5 w-5' /> <span>Create Note</span>
                    </Link>
                </div>
            </div>
        </div>
    </header>
  )
}

export default NavBar

import React from 'react'
import { AlertTriangle } from 'lucide-react'

const RateLimit = () => {
  return (
    <div className = 'max-w-6xl mx-auto px-4 py-8'>
      <div className='bg-yellow-500 border border-bg-yellow-500 shadow-md rounded-lg'>
        <div className='flex flex-col md:flex-row items-center p-6'>
            <div className='flex-shrink-0 bg-orange-400 p-4 rounded-full mb-4 md:mb-0 md:mr-6'>
                <AlertTriangle className='size-10 text-black'/>
            </div>
          

            <div className='flex-1 text-center md:text-left'>
                <h3 className='text-lg font-bold mb-2 text-black'>Rate Limit Reached !</h3>
                <p className='text-black mb-1'>You created too many requests in a short period of time.</p>
                <p className='text-sm text-black/70'>Try again in a few seconds.</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default RateLimit

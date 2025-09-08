import React from 'react'
import { toast } from 'react-hot-toast' 

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <button className="px-4 py-2 border border-gray-300 rounded-md drop-shadow hover:bg-gray-200" 
      onClick={() => toast.success("Nicely done")}>Click Me</button>
    </div>
  )
}

export default HomePage

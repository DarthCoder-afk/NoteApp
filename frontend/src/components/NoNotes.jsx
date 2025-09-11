import { NotebookIcon } from 'lucide-react'
import { Link } from 'react-router'

const NoNotes = () => {
  return (
    <div className='flex flex-col items-center justify-center py-16 space-y-6 mx-w-md mx-auto text-center'>
      <div className='bg-primay/10 rounded-full p-8'>
        <NotebookIcon className='size-10 text-primary'/>
      </div>
      <h3 className='text-2xl font-bold'>No Notes Yet</h3>
      <p className='text-base-content/70'>
        Organize your thoughts by creating your first note!
      </p>
      <Link to={'/create'} className='btn btn-primay'> Create your first note</Link>
    </div>
  )
}

export default NoNotes

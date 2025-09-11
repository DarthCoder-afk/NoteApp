import { ArrowBigLeft } from 'lucide-react';
import { toast } from 'react-hot-toast';
import { useState } from 'react'
import { Link, useNavigate } from 'react-router'
import api from '../libs/axios';

const CreatePage = () => {
  const [isTitle, setIsTitle] = useState("");
  const [isContent, setIsContent] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await api.post('/notes',{
        title: isTitle,
        content: isContent
      });
      toast.success("Note created successfully!")
      navigate('/');

      
    } catch (error) {
      console.error("Failed to create note:", error);
      toast.error("Failed to create note. Please try again.")
      
    }finally {
      setIsLoading(false);
    }
  }

  return (
    <div className='min-h-screen '>
      <div className='absolute inset-0 -z-20 bg-gradient-to-b from-[#282928] to-[#4fa584] opacity-50'></div>
      <div className='container mx-auto px-4 py-8'>
        <div className='max-w-2xl mx-auto'>
        <Link to={'/'} className='btn btn-ghost mb-6'>
          <ArrowBigLeft className='size-5 mr-1' /> Back to Home
        </Link>

        <div className='card bg-base-100'>
          <div className='card-body'>

            <h2 className='card-title text-2xl font-bold mb-4'>
              Create a New Note
            </h2>

            <form action="" onSubmit={handleSubmit}>

              <div className='form-control mb-4'>
                <label className="label">
                  <span className='label-text'>Title</span>
                </label>
                <input type="text" placeholder='Enter a title...' className='input input-bordered'
                  value={isTitle} onChange={(e) => setIsTitle(e.target.value)} required/>
              </div>

              <div className='form-control mb-4'>
                <label className="label">
                  <span className='label-text'>Content</span>
                </label>
                <textarea placeholder='Write your content here..' className='textarea textarea-bordered h-32'
                  value={isContent} onChange={(e) => setIsContent(e.target.value)} required/>
              </div>

              <div className='card-actions justify-end'>
                <button type="submit" className='btn btn-primary text-white' disable={isLoading}>
                  {isLoading ? 'Saving...' : 'Add Note'}
                </button>
              </div>

            </form>
          </div>
        </div>
        </div> 
      </div>
    </div>
  )
}

export default CreatePage

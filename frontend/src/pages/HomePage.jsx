import React, { useState, useEffect } from 'react'
import { toast } from 'react-hot-toast' 
import NavBar from '../components/NavBar'
import RateLimit from '../components/RateLimit'
import axios from 'axios';
import NoteCard from '../components/NoteCard';

const HomePage = () => {
  const [isRateLimited, setIsRateLimited] = useState(false);
  const [isNotes, setNotes] = useState([]);
  const [isLoading, setIsLoading]= useState([]);

  useEffect (() => {
    const fetchNotes = async () => {
      try {
        const response = await axios.get('http://localhost:5001/api/notes');
        const data = response.data;
        console.log(data);
        setNotes(data);
        setIsRateLimited(false);
      } catch (error) {
        console.error('Error fetching notes:', error);
        if (error.response.status === 429){
           setIsRateLimited(true);
        } else {
          toast.error("Failed to fetch notes");
        }
      } finally {
        setIsLoading(false);
      }
    }
    fetchNotes();
  }, []);
  return (

    
    <div className='min-h-screen'> 
        <NavBar />
        {isRateLimited && <RateLimit />}

        <div className='max-w-6xl mx-auto px-4 py-8'>
          {isLoading && <div className='text-center text-primary py-10'>Loading data...</div>}

          {isNotes.length > 0 && !isRateLimited && (
             <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6'>
               {isNotes.map((note) => (
                  <NoteCard key={note._id} note={note}/>
               ))}
             </div>
          )}
        </div>
    </div> 
  )
}

export default HomePage

import React, { useState, useEffect } from 'react'
import { toast } from 'react-hot-toast' 
import NavBar from '../components/NavBar'
import RateLimit from '../components/RateLimit'
import axios from 'axios';

const HomePage = () => {
  const [isRateLimited, setIsRateLimited] = useState(true);
  const [isNotes, setNotes] = useState([]);
  const [isLoading, setIsLoading]= useState([]);

  useEffect (() => {
    const fetchNotes = async () => {
      try {
        const response = await axios.get('http://localhost:5001/api/notes');
        const data = response.data;
        console.log(data);
      } catch (error) {
        console.error('Error fetching notes:', error);
      }
    }
    fetchNotes();
  }, []);
  return (

    
    <div className='min-h-screen'> 
        <NavBar />
        {isRateLimited && <RateLimit />}
    </div>
  )
}

export default HomePage

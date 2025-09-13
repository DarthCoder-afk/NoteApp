import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router";
import api from "../libs/axios";
import toast from "react-hot-toast";
import { ArrowLeftIcon, Loader2Icon, Trash2Icon } from "lucide-react";
import ConfirmAlert from "../components/ConfirmAlert";


const NotePage = () => {
  const [isNote, SetIsNote] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);

  const nav = useNavigate();

  const {id} = useParams();

// console.log({id});

  const [confirmDelete, setConfirmDelete] = useState(null);

  const handleDelete = async (id) => {
     try {
            await api.delete(`/notes/${id}`);
            toast.success("Note deleted successfully!");
            nav('/');
            setConfirmDelete(null);
        } catch (error) {
            toast.error("Failed to delete note. Please try again.")
            console.error("Failed to delete note:", error);
        } 
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if(!isNote.title.trim() || !isNote.content.trim()){
      toast.error('Add data on fields.');
      return;
    }


    setIsSaving(true);

    try {
      await api.put(`/notes/${id}`,{
        title: isNote.title,
        content: isNote.content
        
      });
      toast.success('Note updated successfully!')
      nav('/');

      
    } catch (error) {
      toast.error("Failed to update note. Please try again");
      console.log("Error: ", error)
      
    } finally {
      setIsSaving(false);
    }
  };

  useEffect(() => {
    const fetchNote = async( ) => {
      try {
        const res =  await api.get(`/notes/${id}`)
        SetIsNote(res.data);
        console.log(res)
         
      } catch (error) {
        console.log("Error:", error)
        toast.error("Failed to fetch note")
        
      } finally {
        setIsLoading(false);
      }
    }

    fetchNote();
  },[id])

  if(isLoading){
    return(
      <div className="min-h-screen bg-base-200 flex items-center justify-center">
        <Loader2Icon className="animate-spin size-10"/>
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      <div className='absolute inset-0 -z-20 bg-gradient-to-b from-[#282928] to-[#4fa584] opacity-50'></div>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
            <div className="flex items-center justify-between mb-6">
              <Link to={'/'} className="btn btn-ghost">
                <ArrowLeftIcon className="size-5"/>
                Back to Home
              </Link>
              <button onClick={(e) => {e.preventDefault; setConfirmDelete(isNote._id)}} className="btn btn-error btn-outline">
                  <Trash2Icon className="size-5"/>
              </button>
            </div>

            <div className='card bg-base-100'>
              <div className='card-body'>

                <h2 className='card-title text-2xl font-bold mb-4'>
                  Update your Note
                </h2>

                <form action="" onSubmit={handleSubmit}>

                  <div className='form-control mb-4'>
                    <label className="label">
                      <span className='label-text'>Title</span>
                    </label>
                    <input type="text" placeholder='Enter a title...' className='input input-bordered'
                      value={isNote.title} required onChange={(e) => SetIsNote({...isNote, title: e.target.value})} />
                  </div>

                  <div className='form-control mb-4'>
                    <label className="label">
                      <span className='label-text'>Content</span>
                    </label>
                    <textarea placeholder='Write your content here..' className='textarea textarea-bordered h-32'
                      value={isNote.content} required onChange={(e) => SetIsNote({...isNote, content: e.target.value})} />
                  </div>

                  <div className='card-actions justify-end'>
                    <button type="submit" className='btn btn-primary text-white' disabled={isSaving}  
                    onClick={handleSubmit}>
                      {isSaving ? 'Updating...' : 'Update Note'}
                    </button>
                  </div>

                </form>
              </div>
          </div>
        </div>
      </div>

      {confirmDelete && (
            <ConfirmAlert
            message={"Are you sure you want to delete this note?"}
            onCancel = {() => setConfirmDelete(null)}
            onConfirm={() => handleDelete(confirmDelete)}
            />
    )}
    </div>
  )
}

export default NotePage

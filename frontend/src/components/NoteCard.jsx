import { PenSquareIcon, Trash2Icon } from "lucide-react"
import { Link } from "react-router"
import toast from "react-hot-toast"
import { useState } from "react"
import api from "../libs/axios"
import { formatDate } from "../libs/utils"
import ConfirmAlert from '../components/ConfirmAlert.jsx'

const NoteCard = ({note, setNotes}) => {

    const [confirmDelete, setConfirmDelete] = useState(null);

    const handleDelete = async (id) => {
        try {
            await api.delete(`/notes/${id}`);
            setNotes((prev) => prev.filter((note) => note._id !== id));
            toast.success("Note deleted successfully!");
            setConfirmDelete(null);
        } catch (error) {
            toast.error("Failed to delete note. Please try again.")
            console.error("Failed to delete note:", error);
        } 
    }
return <div>
    <Link to={`/notes/${note._id}`}
    className="card bg-base-100 hover:shadow-lg transition-all duration-200 ease-in-out border-b-4 border-l-4
    border-solid border-[#00FD9D] hover:scale-105">
        <div className="card-body ">
            <h3 className="card-title text-base-content ">{note.title}</h3>
            <p className="text-base-content/70 line-clamp-3">{note.content}</p>
            <div className="card-actions justify-between items-center mt-4">
                <span className="text-sm text-base-content/60">{formatDate(note.createdAt)}</span>
                <div className="flex items-center gap-1">
                    <PenSquareIcon className="size-4 stroke-blue-500"/>
                    <button className="btn btn-ghost btn-xs text-error" onClick = { (e) => {e.preventDefault();setConfirmDelete(note._id);}}>
                       <Trash2Icon className="size-4"/>
                    </button>
                </div>
            </div>
        </div>

    </Link>

    {confirmDelete && (
            <ConfirmAlert
            message={"Are you sure you want to delete this note?"}
            onCancel = {() => setConfirmDelete(null)}
            onConfirm={() => handleDelete(confirmDelete)}
            />
    )}
</div> 
} 

export default NoteCard

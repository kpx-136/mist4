import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useEffect, useState } from "react";

const Note = () => {

    const {id} = useParams();
    const [note, setNote] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const history = useHistory();

    useEffect(() => {
        fetch('http://localhost:8001/notes/'+id)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setNote(data);
                setIsPending(false);
            })
    }, [id])

    const handleDelete = () => {
        fetch('http://localhost:8001/notes/' + note.id, {
            method: 'DELETE'
        }).then(() => {
            history.push('/');
        })
    }

    return ( 
        <div className = "note">
            {isPending && <div>loading...</div>}
            {note && (
                <div>
                    <h2>{note.title}</h2>
                    <p>{note.body}</p>
                    <button onClick = {handleDelete}>Delete</button>
                </div>
            )}
        </div>
     );
}
 
export default Note;
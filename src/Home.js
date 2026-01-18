import { useEffect, useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Home = () => {

    const [notes, setNotes] = useState(null);

    useEffect(() => {
        fetch('http://localhost:8001/notes')
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setNotes(data);
            })
    }, [])

    return ( 
        <div>
            {notes && <div className="note-list">
                <h2>NOTES: </h2>
                <div className = "note-grid">
                    {notes.map((note) => (
                        <Link to={`/notes/${note.id}`}>
                            <div className = "note-preview" key = {note.id}>
                                <h2>{note.title}</h2>
                                <p>{note.body.length > 17 ? note.body.slice(0,17)+"..." : note.body}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>}
            {!notes && <p>Loading...</p>}
        </div>
     );
}
 
export default Home;
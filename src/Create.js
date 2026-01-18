import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Create = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (event) => {
        event.preventDefault();
        const note = {title, body};
        setIsPending(true);

        fetch('http://localhost:8001/notes', {
            method: 'POST', 
            headers: {"Content-Type": "application/json"}, 
            body: JSON.stringify(note)
        }).then(() => {
            setIsPending(false);
            history.push('/');
        })
    }

    return ( 
        <div className = "create">
            <b><h2>Add a new note</h2></b>
            <form onSubmit = {handleSubmit}>
                <label for="title">Title</label>
                <input 
                    id="title"
                    type = "text"
                    required
                    value = {title}
                    onChange={(event) => setTitle(event.target.value)}
                />
                <label for="body">Body</label>
                <textarea 
                    id="body"
                    required
                    value = {body}
                    onChange={(event) => setBody(event.target.value)}
                ></textarea>
                <button onClick = {handleSubmit}>Add note</button>
            </form>
        </div>
    );
}
 
export default Create;
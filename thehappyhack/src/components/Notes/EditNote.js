import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {useParams, useNavigate} from 'react-router-dom'

export default function EditNote({match}) {
    const [note, setNote] = useState({
        title: '',
        content: '',
        date: '',
        id: ''
    })
    const params = useParams();

    const navigate = useNavigate();
    useEffect(() => {
     async function fetchData() {
       const id = params.id.toString();
       const response = await fetch(`http://localhost:4000/record/${params.id.toString()}`);
        if (!response.ok) {
         const message = `An error has occurred: ${response.statusText}`;
         window.alert(message);
         return;
       }
        const record = await response.json();
       if (!record) {
         window.alert(`Record with id ${id} not found`);
         //navigate("/");
         return;
       }
        setNote(record);
     }
      fetchData();
      return;
    }, [params.id, navigate]);
    // These methods will update the state properties.
   function updateForm(value) {
     return setNote((prev) => {
       return { ...prev, ...value };
     });
   }
    async function onSubmit(e) {
     e.preventDefault();
     const editedNote = {
       title: note.title,
       content: note.content,
       date: note.date,
     };
      // This will send a post request to update the data in the database.
     await fetch(`http://localhost:4000/update/${params.id}`, {
       method: "POST",
       body: JSON.stringify(editedNote),
       headers: {
         'Content-Type': 'application/json'
       },
     });
      navigate("/");
   }

 

    return (
        <div className="create-note">
            <h2>Edit Note</h2>
            <form onSubmit={onSubmit} autoComplete="off">
                <div className="row">
                    <label htmlFor="title">Title</label>
                    <input type="text" value={note.title} id="title"
                    name="title" required onChange={(e) => updateForm({ title: e.target.value })} />
                </div>

                <div className="row">
                    <label htmlFor="content">Content</label>
                    <textarea type="text" value={note.content} id="content"
                    name="content" required rows="10" onChange={(e) => updateForm({ content: e.target.value })} />
                </div>

                <label htmlFor="date">Date: {note.date} </label>
                <div className="row">
                    <input type="date" id="date"
                    name="date" onChange={(e) => updateForm({ date: e.target.value })} />
                </div>

                <button type="submit">Save</button>
            </form>
        </div>
    )
}
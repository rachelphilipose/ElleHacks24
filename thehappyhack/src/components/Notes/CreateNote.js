import React, {useState} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

export default function CreateNote() {
    const [note, setNote] = useState({
        title: '',
        content: '',
        date: ''
    })
    //const navigate = useNavigate()

    function updateForm(value) {
        return setNote((prev) => {
          return { ...prev, ...value };
        });
      }

    const onChangeInput = e => {
        const {name, value} = e.target;
        setNote({...note, [name]:value})
    }

    // This function will handle the submission.
    async function onSubmit(e) {
        e.preventDefault();
        // When a post request is sent to the create url, we'll add a new record to the database.
        const newNote = { ...note };
        await fetch("http://localhost:4000/record/add", {
        method: "POST",
        mode: 'cors',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newNote),
        })
        .catch(error => {
        window.alert(error);
        return;
        });
        setNote({ title: "", content: "", date: "" });
        //navigate("/");
    }

    return (
        <div className="create-note">
            <h2>Create Note</h2>
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
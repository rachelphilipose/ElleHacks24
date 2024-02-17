import React from 'react'
import Header from './Notes/Nav'
import Home from './Notes/NoteWrapper'
import CreateNote from './Notes/CreateNote'
import EditNote from './Notes/EditNote'
import {BrowserRouter as Router, Route, BrowserRouter, Routes} from 'react-router-dom'

export default function Notes({setIsLogin}) {
    return (
        <BrowserRouter>
        <Header setIsLogin={setIsLogin} />
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/create" element={<CreateNote/>} />
            <Route path="/edit/:id" element={<EditNote/>} />
                
        </Routes>
        </BrowserRouter>
    )
}
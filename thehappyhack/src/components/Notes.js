import React from 'react'
import Header from './Notes/Nav'
import Home from './Notes/NoteWrapper'
import CreateNote from './Notes/CreateNote'
import EditNote from './Notes/EditNote'
import {BrowserRouter as Router, Route, BrowserRouter, Routes} from 'react-router-dom'

 // We import all the components we need in our app
 import Navbar from './Notes/Nav'
 import RecordList from './Notes/NoteWrapper'
 import Edit from './Notes/EditNote'
 import Create from './Notes/CreateNote'


export default function Notes({setIsLogin}) {
    return (
        <div>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<RecordList />} />
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="/create" element={<Create />} />
        </Routes>
      </div>
    )
}
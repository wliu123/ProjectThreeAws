import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
///////////////////////////////////////////////////////////////////////////////
import WelcomePage from './WelcomePage';
import ErrorPage from './ErrorPage';
import SignUp from './SignUp';
import AppBar from './AppBar';
import Notebooks from './Notebooks';
import OneNotebook from './OneNotebook';
import MainDisplay from './MainDisplay';


function App() {

  const [currentUser, setCurrentUser] = useState([])
  const [notebooks, setNotebooks] = useState([])
  const [currentNotebook, setCurrentNotebook] = useState("")
  const [notes, setNotes] = useState([])
  const [activeNote, setActiveNote] = useState(false)
  const [newNotebook, setNewNotebook] = useState({})
  const [open, setOpen] = useState(false)

    useEffect(() => {
      if (currentUser.id) {
      fetch(`http://localhost:9292/users/notebooks/${currentUser.id}`)
      .then(req => req.json())
      .then(data => setNotebooks(data))
      }
  }, [currentUser])

  const onAddNote = () => {
    fetch ('http://localhost:9292/new_note', {
      method: "POST",
      headers: {
        "Content-Type":"application/json"
      },
      body: JSON.stringify({
        title: "Untitled",
        body: "",
        user_id: currentUser.id,
        notebook_id: currentNotebook.id,
        updated_at: Date.now()
      })
    })
    .then (res => res.json())
    .then (data => setNotes([...notes, data]))
    
  }

  const onDeleteNote = (idToDelete) => {
    fetch (`http://localhost:9292/notes/${idToDelete}`,{
      method: "DELETE"
    })
    setNotes(notes.filter((note) => note.id !== idToDelete))
  }

  const getActiveNote = () => {
    return notes.find(note => note.id === activeNote)
  }

  const onUpdateNote = (updatedNote) => {
    fetch (`http://localhost:9292/notes/${activeNote}`, {
      method: "PATCH",
      headers: {
        "Content-Type":"application/json"
      },
      body: JSON.stringify({
        title: updatedNote.title,
        body: updatedNote.body,
        updated_at: updatedNote.updated_at
      })
    })
    .then (res => res.json())
    .then (data => {
      const updatedNotes = notes.map(note => {
        if (note.id === activeNote) {
          return data
        }
        return note
      })
      setNotes(updatedNotes)
    })
  }

  const addNewNotebook = (e) => {
    e.preventDefault()
    fetch ('http://localhost:9292/new_notebook', {
      method: "POST",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify({
        title: newNotebook.title,
        created_at: newNotebook.created_at,
        updated_at: newNotebook.updated_at
      })
    })
    .then(res => res.json())
    .then (data => {
      setNotebooks([
        ...notebooks, 
        {...data, notes:[]}
      ])
    })
    setOpen(false)
  }
 
    
  return (
    <div className="App">
    <BrowserRouter>
          <Routes>

            <Route path="/" element={<WelcomePage setCurrentUser={setCurrentUser} />}/> 
            <Route 
            path=":id/home" 
            element={
              <>
              <AppBar currentUser={currentUser} addNewNotebook={addNewNotebook} setNewNotebook={setNewNotebook} open={open} setOpen={setOpen}/> 
              <Notebooks currentUser={currentUser} notebooks={notebooks} setCurrentNotebook={setCurrentNotebook}/> 
              </>
            } 
            />
            <Route 
            path="/notebooks/notes" 
            element={
              <>
              <AppBar currentUser={currentUser} addNewNotebook={addNewNotebook} setNewNotebook={setNewNotebook} open={open} setOpen={setOpen}/> 
              <OneNotebook activeNote={activeNote} setActiveNote={setActiveNote} onDeleteNote={onDeleteNote} currentNotebook={currentNotebook} notes={notes} setNotes={setNotes} onAddNote={onAddNote}/> 
              <MainDisplay onUpdateNote={onUpdateNote} activeNote={getActiveNote()}/>
              </>
            } 
            />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="*" element={<ErrorPage />} />

          </Routes>
    </BrowserRouter>
    </div>
   
    );
}

export default App;

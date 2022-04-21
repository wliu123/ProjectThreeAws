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

    useEffect(() => {
      if (currentUser.id) {
      fetch(`http://localhost:9292/users/notebooks/${currentUser.id}`)
      .then(req => req.json())
      .then(data => setNotebooks(data))
      }
  }, [currentUser])

  const onAddNote = () => {
    const newNote = {
      id: 1,
      title: "Untitled",
      body: "",
      lastModified: Date.now()
    }
    setNotes([...notes, newNote])
  }
  const onDeleteNote = (idToDelete) => {
    setNotes(notes.filter((note) => note.id !== idToDelete))
  }
  const getActiveNote = () => {
    return notes.find(note => note.id === activeNote)
  }
  const onUpdateNote = (updatedNote) => {
    const updatedNotes = notes.map(note => {
      if (note.id === activeNote) {
        return updatedNote
      }
      return note
    })
    setNotes(updatedNotes)
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
              <AppBar currentUser={currentUser}/> 
              <Notebooks currentUser={currentUser} notebooks={notebooks} setCurrentNotebook={setCurrentNotebook}/> 
              </>
            } 
            />
            <Route 
            path="/notebooks/notes" 
            element={
              <>
              <AppBar currentUser={currentUser}/> 
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

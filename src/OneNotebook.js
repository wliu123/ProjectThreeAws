import { useEffect, useState } from "react"


const OneNotebook = ({notes, setNotes, onAddNote, onDeleteNote, activeNote, setActiveNote, currentNotebook}) => {
    
    useEffect(() => {
        fetch(`http://localhost:9292/notebook/${currentNotebook}`)
        .then(res => res.json())
        .then (receivedData => setNotes(receivedData.notes))
    }, [currentNotebook])
    
    return (
      
        
        <div className="app-sidebar">
            <div className="app-sidebar-header">
                <h1>{currentNotebook}</h1>
                <button onClick={onAddNote}>Add</button>
            </div>
            <div className="app-sidebar-notes">
                {notes.map(note => (
                    
                    <div className={`app-sidebar-note ${note.id === activeNote && "active"}`} onClick={() => setActiveNote(note.id)}>
                        <div className="sidebar-note-title">
                            <strong>{note.title}</strong>
                            <button onClick={() => onDeleteNote(note.id)}>Delete</button>
                        </div>
                        <p>{note.body && note.body.substr(0, 100) + "..."}</p>
                        <small className="note-meta">
                            Last modified {new Date(note.lastModified).toLocaleDateString("en-US", {
                                hour: "2-digit",
                                minute: "2-digit"
                            })}
                        </small>
                    </div>

                ))}
            </div>

        </div>
       
    )
    
}
export default OneNotebook
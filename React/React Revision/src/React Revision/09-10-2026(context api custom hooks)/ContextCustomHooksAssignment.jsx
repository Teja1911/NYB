import { createContext,useContext,useState } from "react";

const NotesContext=createContext()

function useNotes(){
    return useContext(NotesContext)
}

function NoteForm(){
    const { addNote }=useNotes()
    const [text,setText]=useState("")
    function handleSubmit(e){
        e.preventDefault()
        if(!text.trim()) return
        addNote(text.trim())
        setText("")
    }
    return(
        <form onSubmit={handleSubmit}>
            <input value={text} onChange={(e)=>setText(e.target.value)} placeholder="Write a note" />
            <button>Add Note</button>
        </form>
    )
}

function NoteList(){
    const {notes,deleteNote}=useNotes()
    if(notes.length===0) return <p>No notes yet.</p>
    return(
        <ul>
            {notes.map((note)=>(
                <li key={note.id}>
                    {note.text}
                    <button onClick={()=>deleteNote(note.id)}>Delete</button>
                </li>
            ))}
        </ul>
    )
}

function ContextCustomHooksAssignment(){
    const [notes,setNotes]=useState([])
    const [dark,setDark]=useState(false)
    function addNote(text){
        setNotes((current)=>[
            ...current,
            {id:Date.now(),text,}
        ])
    }
    function deleteNote(id){
        setNotes((current)=>current.filter((n)=>n.id !== id))
    }
    const value={notes,addNote,deleteNote}
    return(
        <NotesContext.Provider value={value}>
            <main style={{padding:20,background:dark ?"#222":"#fff",color:dark?"#fff":"#222"}}>
                <h1>Team Notes</h1>
                <button onClick={()=>setDark((current)=>!current)}>Change Theme</button>
                <NoteForm/>
                <NoteList/>
            </main>
        </NotesContext.Provider>
    )
}
export default ContextCustomHooksAssignment
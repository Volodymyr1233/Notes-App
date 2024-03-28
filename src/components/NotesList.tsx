import React from "react";
import NoteCard from "./NoteCard";
import "./styles.css";
import AddNoteCard from "./AddNoteCard";
import Note from "../model";

interface Props {
    notes: Note[];
    setNotes: React.Dispatch<React.SetStateAction<Note[]>>;
}

const NotesList = ({notes, setNotes}: Props) => {

    const deleteNote = (id: number) => {
        setNotes(notes.filter((note) => note.id !== id));
    }

    return (
        <div className="notesList">
            <AddNoteCard/>
            {notes.map((note) => (
                <NoteCard note={note} deleteNote={deleteNote}/>
            ))}
            
        </div>
    )
}

export default NotesList;
import React, { useContext } from "react";
import { MdDeleteForever } from "react-icons/md";
import "./NoteCard.css";
import Note from "../model";
import { DisplayNoteSearch } from "../App";

interface Props {
    note: Note,
    deleteNote: (id: number) => void,
}

const NoteCard = ({note, deleteNote}: Props) => {

    const searchValue = useContext(DisplayNoteSearch);

    const showNotes = note.heading.includes(searchValue);
    
    return (
        <>
        {showNotes ? (
            <section className="noteCard">
                <p className="heading">{note.heading}</p>
                <p className="date">{note.date}</p>
                <span className="deleteIcon" onClick={() => deleteNote(note.id)}><MdDeleteForever/></span>
            </section>
        ) : (
            <></>
        )}
        </>
        
    )
}

export default NoteCard;
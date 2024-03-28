import React, { useContext, useState } from "react";
import "./AddNoteCard.css";
import { ValuesToAddNote } from "../App";
import { ColorRing } from "react-loader-spinner";


const AddNoteCard = () => {
    const {addNoteValue, setAddNoteValue, addNote, loading} = useContext(ValuesToAddNote)!;
    const symbolsRemain = 200 - addNoteValue.length;


    return (
        <form className="addNoteForm" onSubmit={(e) => e.preventDefault()}>
            <input value={addNoteValue} onChange={(e) => setAddNoteValue(e.target.value)} className="addNoteInput" placeholder="Type to add a note..." maxLength={200}/>
            {loading ? (
            <div className="loading"><ColorRing height={60}/></div>
            ) : null}
            <div className="addContainer">
                <p className="headingLengthCount">{symbolsRemain} Remaining</p>
                <button className="saveNote">Save</button>
            </div>
            
            
        </form>
    )
}

export default AddNoteCard;
import React, { useState, useContext, createContext, useId, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import NotesList from './components/NotesList';
import Note from './model';

export const ValuesToAddNote = createContext<{
  addNoteValue: string;
  setAddNoteValue: React.Dispatch<React.SetStateAction<string>>;
  addNote: (e: React.FormEvent) => void;
  loading: boolean;
} | null>(null);

export const DisplayNoteSearch = createContext<string>("");



const App = () => {
  const savedNotes = localStorage.getItem("notes") ? JSON.parse(localStorage.getItem("notes")!) : [];

  const [themeButtClick, setThemeButtClick] = useState<boolean>(false);
  const [notes, setNotes] = useState<Note[]>(savedNotes); // this array will be to store our notes
  const [addNoteValue, setAddNoteValue] = useState<string>(""); // it is input value for our notes
  const [searchValue, setSearchValue] = useState <string>("");
  const [loading, setLoading] = useState<boolean>(false);


  useEffect(() => {
    const timer = setTimeout(() => {
      addNote();
    }, 500)

    return () => clearTimeout(timer)
  }, [addNoteValue]);

  useEffect(() => {
      localStorage.setItem('notes', JSON.stringify(notes)); // save elements to localStorage when notes array changed
  }, [notes]);

  useEffect(() => {
    if (addNoteValue.length > 0) {
      setLoading(true);
    }
  }, [addNoteValue]);

  useEffect(() => {
     themeButtClick ? document.body.style.backgroundColor = "black": document.body.style.backgroundColor = "";
  }, [themeButtClick])


  const addNote = () => {

    if (addNoteValue) {
      const id = Date.now();
      const dateObject = new Date();
      const date = `${dateObject.getDate()}/0${dateObject.getMonth() + 1}/${dateObject.getFullYear()}`
      const addNote = {
        id,
        heading: addNoteValue,
        date, 
      };

      setNotes([addNote, ...notes]);
      setAddNoteValue("");
      setLoading(false);
    };

    
  };
    

  return (
    <ValuesToAddNote.Provider value={{addNoteValue, setAddNoteValue, addNote, loading}}>
      <DisplayNoteSearch.Provider value={searchValue}>
        <div className="App">
          <div className="Main">
            <Header themeButtClick={themeButtClick} setThemeButtClick={setThemeButtClick}/>
            <SearchBar searchValue={searchValue} setSearchValue={setSearchValue}/>
            <NotesList notes={notes} setNotes={setNotes}/>
          </div>
        </div>
        </DisplayNoteSearch.Provider>
    </ValuesToAddNote.Provider>
  );
}

export default App;

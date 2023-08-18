import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(noteBody) {
    setNotes((prevVal) => {
      return [...prevVal, noteBody];
    });
  }

  function delNote(id) {
    setNotes((prevVal) => {
      return prevVal.filter((note, index) => {
        return index !== id;
      });
    });
  }

  // console.log(notes);

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((note, ind) => {
        return (
          <Note
            key={ind}
            id={ind}
            title={note.title}
            content={note.content}
            delNote={delNote}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;

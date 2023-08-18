import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {
  const [state, setState] = useState(false) // state for isExpanded functionality

  const [noteBody, setNoteBody] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setNoteBody((preVal) => {
      return { ...preVal, [name]: value };
    });
  }

  function handleButton(event) {

    props.onAdd(noteBody);
    setNoteBody({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  function handleClick(){
    setState(true);
  }

  return (
    <div>
      <form className="create-note">
        {state && <input
          onChange={handleChange}
          name="title"
          placeholder="Title"
          value={noteBody.title}
        />}

        <textarea
          onClick={handleClick}
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={noteBody.content}
        />
        <Zoom in ={state}>
          <Fab onClick={handleButton}><AddIcon /></Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;

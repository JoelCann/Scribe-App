import React, { useState } from "react";
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';


function CreateArea(props) {

  //Declaration of state and state functions
  const [noteClicked, setNoteClicked] = useState(false);
  const [noteItems, setNoteItems] = useState({
    title: "",
    textArea: ""
  });

  function handleTextChange(e) {

    //Destructuring of 'event.target' object, to enable easy
    //access to contained values in setState functions
    //(ie. Avoiding synthetic ... issues).
    const { name: inputName, value: newValue } = e.target;

    //  Storing user input as objects in our state variable (noteItems).
    if (inputName === "title") {
      setNoteItems((prevValue) => {
        return ({
          title: newValue,
          textArea: prevValue.textArea
        })
      });
    }
    else if (inputName === "content") {
      setNoteItems((prevValue) => {
        return ({
          title: prevValue.title,
          textArea: newValue
        })
      });
    }
  }

  function handleTextAreaClick() {
    setNoteClicked(true);
  }


  return (
    <div>
      <form className="create-note">
        {noteClicked && <input
          style={{ fontWeight: "300" }}
          name="title"
          value={noteItems.title}
          placeholder="Title"
          onChange={handleTextChange}
        />}

        <textarea
          name="content"
          value={noteItems.textArea}
          placeholder="Take a note..."
          rows={noteClicked ? "3" : "1"}
          onClick={handleTextAreaClick}
          onChange={handleTextChange}
        />
        <Zoom in={noteClicked ? true : false} >
          <Fab onClick={(e) => {
            props.onAddbtnClick(noteItems);
            e.preventDefault();
            setNoteItems(() => {
              return {
                title: "",
                textArea: ""
              }
            });
          }}>
            <AddRoundedIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;


//This Component returns the input fields/form where the data entry is made. 
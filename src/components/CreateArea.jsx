import React, { useState, useRef } from "react";
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {
  const [noteClicked, setNoteClicked] = useState(false);
  const [noteItems, setNoteItems] = useState({
    title: "",
    textArea: ""
  });
  // Creating a ref for the input field
  const titleRef = useRef(null);
  const contentRef = useRef(null);

  function handleTextChange(e) {
    const { name: inputName, value: newValue } = e.target;

    if (inputName === "title") {
      setNoteItems((prevValue) => ({
        ...prevValue,
        title: newValue
      }));
    } else if (inputName === "content") {
      setNoteItems((prevValue) => ({
        ...prevValue,
        textArea: newValue
      }));
    }
  }

  function handleTextAreaClick() {
    setNoteClicked(true);
  }

  function validate(e) {
    if (noteItems.title === "") {
      alert(`Ooops! You forgot to add your title.`);
      // Focus on the title input field
      titleRef.current.focus();
    } else if (noteItems.textArea === "") {
      // Open the alert
      alert(`Ooops! You forgot to add your content.`);
      // Focus on the textarea
      contentRef.current.focus();
    } else {
      props.onAddbtnClick(noteItems);
      e.preventDefault();
      setNoteItems({
        title: "",
        textArea: ""
      });
      // Focus on the title input field after successful submission
      titleRef.current.focus();
    }
  }

  return (
    <div>
      <form className="create-note">
        {noteClicked && (
          <input
            ref={titleRef}
            style={{ fontWeight: "300" }}
            name="title"
            value={noteItems.title}
            placeholder="Title"
            onChange={handleTextChange}
          />
        )}

        <textarea
          ref={contentRef}
          name="content"
          value={noteItems.textArea}
          placeholder="Take a note..."
          rows={noteClicked ? "3" : "1"}
          onClick={handleTextAreaClick}
          onChange={handleTextChange}
        />
        <Zoom in={noteClicked}>
          <Fab onClick={validate}>
            <AddRoundedIcon />
          </Fab>
        </Zoom>
      </form>


    </div>
  );
}

export default CreateArea;

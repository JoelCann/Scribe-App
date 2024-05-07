import React, { useState } from "react";

function CreateArea(props) {

  //Declaration of state and state functions
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


  return (
    <div>
      <form>
        <input
          name="title"
          value={noteItems.title}
          placeholder="Title"
          onChange={handleTextChange}
        />
        <textarea
          name="content"
          value={noteItems.textArea}
          placeholder="Take a note..."
          rows="3"
          onChange={handleTextChange}
        />
        <button onClick={(e) => {
          props.onAddbtnClick(noteItems);
          e.preventDefault();
          setNoteItems(() => {
            return {
              title: "",
              textArea: ""
            }
          });
        }}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;


//This Component returns the input fields/form where the data entry is made. 
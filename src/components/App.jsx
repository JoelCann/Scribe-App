import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  //Decalaration of states.
  const [noteArray, setNoteArray] = useState([]);

  //Function to be triggered by the Add button in the 'CreateArea' component.
  //This function stores each user input(the objects created from CreateArea component)
  //in an array
  function onAdd(noteItems) {
    setNoteArray((prevNote) => {
      return [...prevNote, noteItems]
    })
  }

  //This function is called when the delete button on a note is clicked.
  //It deletes that particular entry from from the array, hence the screen.
  function onDelete(targetId) {
    setNoteArray((prevNote) => {
      return prevNote.filter((items, index) => {
        return index !== targetId;
      })
    })

  }




  return (
    <div>
      <Header />
      <CreateArea
        onAddbtnClick={onAdd}
      />

      {/*Javascript statement below loops through the created array
      and creates a note card with details/values from each array entry*/}
      {noteArray.map((card, index) => {
        return (
          <Note
            key={index}
            targetId={index}
            heading={card.title}
            content={card.textArea}
            delete={onDelete}
          />
        )
      })}
      <Footer />
    </div>
  );
}

export default App;


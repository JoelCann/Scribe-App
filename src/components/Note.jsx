import React from "react";

function Note(props) {
  return (
    <div className="note">
      <h1>{props.heading}</h1>
      <p>{props.content}</p>
      <button onClick={() => {
        props.delete(props.targetId)
      }}>DELETE</button>
    </div>
  );
}

export default Note;


//This component returns the notecards upon user entry submission.
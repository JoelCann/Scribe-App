import React from "react";
import DeleteForeverSharpIcon from '@mui/icons-material/DeleteForeverSharp';

function Note(props) {
  return (
    <div className="note">
      <h1>{props.heading}</h1>
      <p>{props.content}</p>
      <button onClick={() => {
        props.delete(props.targetId)
      }}><DeleteForeverSharpIcon /></button>
    </div>
  );
}

export default Note;


//This component returns the notecards upon user entry submission.
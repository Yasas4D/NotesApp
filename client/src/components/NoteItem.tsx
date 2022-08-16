import React from "react";

type Props = NoteProps & {
  deleteNote: (_id: string) => void;
};

const Note: React.FC<Props> = ({ note, deleteNote }) => {
  const checkNote: string = note.status ? `line-through` : "";
  return (
    <div className="Card">
      <div className="Card--text">
        <h1 className={checkNote}>{note.name}</h1>
        <span className={checkNote}>{note.description}</span>
      </div>
      <div className="Card--button">
        <button
          onClick={() => deleteNote(note._id)}
          className="Card--button__delete"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Note;

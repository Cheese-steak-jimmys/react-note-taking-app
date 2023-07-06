// import { useEffect } from "react";
import { useNoteData } from "../contexts/NotesContext";

export default function NoteDisplay(props) {
  const { id } = props;
  let note = {};

  const globalNotesData = useNoteData();

  // on start, find the note in globalNotesData
  // that has an ID matching props.id

  note = globalNotesData.filter((note) => {
    return note.id === id;
  });

  return (
    <div>
      {/*
                - ID (number)
                - title (string)
                - description (string)
                - isCompleted (boolean)
                - due date (JS Date)
                - created at date (JS Date)
                */}
      <h4>{note.title}</h4>
      <p>{note.description}</p>
      <p>{note.isComplete ? "COMPLETED" : "NOT YET DONE"}</p>

      {/* makes a read-only checkbox */}
      <input
        type="checkbox"
        disabled="disabled" // <--- user cannot click the checkbox
        readOnly
        value={note.isComplete}
      />
      <h5>Due Date: {new Date(note.dueDate).toLocaleDateString()}</h5>
      {/* <input type="date" readOnly value={note.dueDate} /> */}
      <h5>Created At: {new Date(note.createdAtDate).toLocaleDateString()}</h5>
      {/* <input type="datetime-local" readOnly value={note.createdAtDate} /> */}
    </div>
  );
}

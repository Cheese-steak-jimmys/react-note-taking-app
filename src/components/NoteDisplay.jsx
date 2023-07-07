import { useEffect, useState } from "react";
import { useNoteData } from "../contexts/NotesContext";

export default function NoteDisplay(props) {
  const { id } = props;
  const [localNote, setLocalNote] = useState({});

  const globalNotesData = useNoteData();

  useEffect(() => {
    // on start, find the note in globalNotesData
    // that has an ID matching props.id

    setLocalNote(
      globalNotesData.find((globalSpecificNote) => {
        return globalSpecificNote.id === id;
      })
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [globalNotesData, id]);

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
      <h4>{localNote.title}</h4>
      <p>{localNote.description}</p>
      <p>{localNote.isComplete ? "COMPLETED" : "NOT YET DONE"}</p>

      {/* makes a read-only checkbox */}
      <input
        type="checkbox"
        disabled="disabled" // <--- user cannot click the checkbox
        readOnly={true}
        value={localNote.isComplete}
      />
      <h5>Due Date: {new Date(localNote.dueDate).toLocaleDateString()}</h5>
      {/* <input type="date" readOnly value={note.dueDate} /> */}
      <h5>
        Created At: {new Date(localNote.createdAtDate).toLocaleDateString()}
      </h5>
      {/* <input type="datetime-local" readOnly value={note.createdAtDate} /> */}
    </div>
  );
}

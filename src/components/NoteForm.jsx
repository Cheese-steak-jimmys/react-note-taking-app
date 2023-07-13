/*
- ID (number)
- title (string)
- Description (string)
- IsCompleted (boolean)
- due date (JS Date)
- created at date (JS Date)
*/

import { useEffect, useState } from "react";
import { useNoteData, useNoteDispatch } from "../contexts/NotesContext";
import Button from "react-bootstrap/Button";

export default function NoteForm(props) {
  // If this is null/no prop provided, we are creating a note
  // If id has value, we are editing a note.
  const { id } = props;

  // this is to read the global notes data:
  const globalNotesData = useNoteData();
  // The dispatch is our reducer, can edit global notes data:
  const globalNotesDispatch = useNoteDispatch();

  //   const [localId, setLocalId] = useState("");
  const [localTitle, setLocalTitle] = useState("");
  const [localDescription, setLocalDescription] = useState("");
  const [localIsCompleted, setLocalIsCompleted] = useState("");
  const [localDueDate, setLocalDueDate] = useState(
    new Date().setDate(new Date().getDate() + 1)
  );
  const [localCreatedAtDate, setLocalCreatedAtDate] = useState(Date.now());

  useEffect(() => {
    let tempNote = globalNotesData.find((globalSpecificNote) => {
      return globalSpecificNote.id === id;
    });

    if (tempNote) {
      // We found a note!!!
      setLocalTitle(tempNote.title);
      setLocalDescription(tempNote.description);
      setLocalIsCompleted(tempNote.isCompleted);
      setLocalDueDate(tempNote.dueDate);
      setLocalCreatedAtDate(tempNote.localCreatedAtDate);
    }
  }, [globalNotesData, id]);

  const saveNoteToGlobal = () => {
    let tempNewNote = {
      id: id || globalNotesData.length + 1,
      title: localTitle,
      description: localDescription,
      isComplete: localIsCompleted,
      dueDate: localDueDate,
      createdAtDate: localCreatedAtDate,
    };

    if (id) {
      globalNotesDispatch({ type: "update", updatedNote: tempNewNote });
    } else {
      globalNotesDispatch({ type: "create", newNote: tempNewNote });
    }
  };

  return (
    <div id="form-box">
      <form id="note-box">
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={localTitle}
          onChange={(event) => setLocalTitle(event.target.value)}
        />

        <label>Description:</label>
        <input
          type="text"
          name="description"
          value={localDescription}
          onChange={(event) => setLocalDescription(event.target.value)}
        />

        <label>Is Completed:</label>
        <input
          type="checkbox"
          name="isCompleted"
          value={localIsCompleted}
          checked={localIsCompleted}
          onChange={(event) => setLocalIsCompleted(!localIsCompleted)}
        />

        <label>Due Date:</label>
        <input
          type="date"
          name="dueDate"
          value={new Date(localDueDate).toISOString().split("T")[0]}
          onChange={(event) => {
            console.log(event.target.value);
            setLocalDueDate(event.target.value);
          }}
        />

        {/* NOTE- this will be handled by the reducer, not the human: */}
        {/* <label>Created At:</label>
        <input
          type="text"
          name="createdAtDate"
          value={localCreatedAtDate}
          onChange={setLocalCreatedAtDate}
        /> */}
      </form>
      <Button variant="primary" onClick={saveNoteToGlobal}>
        Save Note
      </Button>
    </div>
  );
}

// timestamp

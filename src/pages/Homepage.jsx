import NoteForm from "../components/NoteForm";
import NoteParent from "../components/NoteParent";
import { useNoteData } from "../contexts/NotesContext";

export default function Homepage(props) {
  const globalNotesData = useNoteData();

  return (
    <div>
      <h1>Note Taking Application</h1>

      {/* Note Count Component */}
      <h3>We have {globalNotesData.length} notes in storage!</h3>

      {/* Note Form Component */}
      <h3>Create A New Note:</h3>
      <NoteForm />

      {/* List Of All Notes Component */}
      <h2>List of all notes:</h2>
      {globalNotesData.map((note) => {
        return (
          <div key={note.id}>
            {/* <NoteDisplay id={note.id} /> */}
            <NoteParent id={note.id} />
          </div>
        );
      })}
    </div>
  );
}

import { useNoteData } from "../contexts/NotesContext";

export default function Homepage(props) {
  const globalNotesData = useNoteData();

  return (
    <div>
      <h1>Note Taking Application</h1>

      {/* Note Count Component */}
      <h3>We have {globalNotesData.length} notes in storage!</h3>

      {/* Note Form Component */}

      {/* List Of All Notes Component */}
    </div>
  );
}

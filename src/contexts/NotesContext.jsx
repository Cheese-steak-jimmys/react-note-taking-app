import {createContext, useContext, useReducer } from "react";

const initialNotesData = [
    {
        id: 1, 
        title: "Welcome to the \nNotation Station!",
        description: "Make some notes, people!",
        isCompleted: false,
        dueDate: new Date().setDate(new Date().getDate() + 1), // Current date plus one day (in future.)
        createdAtDate: Date.now()
    }
]

const notesReducer = (previousState, instructions) => {
    let stateEditable = [...previousState];

    switch (instructions.type){
        case "create":
            console.log("ToDo: Create note and add to state");
            break;
        case "update":
            console.log("ToDo: Update specific note and add overwrite in state");
            break;
        case "delete":
            console.log("ToDo: Delete note from state");
            break;
        case "sortByuDueDate":
            console.log("Sorted state data by due date");
            break;
        case "sortByCreatedDate":
            console.log("Sorted state data by created date");
            break;
        case "sortById":
            console.log("Sort by ID, default ordering.");
            break;
        default:
            console.log("invalid instruction type given, it was: " + instructions.type);
            return previousState;
    }
}

export const NoteDataContext = createContext(null);
export const NoteDispatchContext = createContext(null);

export function useNoteData(){
    return useContext(NoteDataContext);
}

export function useNoteDispatch(){
    return useContext(NoteDispatchContext);
}

export default function NotesProvider(props){
    const [notesData, notesDispatch] = useReducer(notesReducer, initialNotesData);

    return (
        <NoteDataContext.Provider  value={notesData}>
            <NoteDispatchContext.Provider value={notesDispatch}>
                {props.children}
            </NoteDispatchContext.Provider>
        </NoteDataContext.Provider>
    )
}
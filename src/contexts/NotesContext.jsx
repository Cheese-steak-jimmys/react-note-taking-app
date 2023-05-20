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
    
}
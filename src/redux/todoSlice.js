import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: "todo",
    initialState: [
        { id: 1, title: "todo1", completed: false },
        { id: 2, title: "todo2", completed: false },
        { id: 3, title: "todo3", completed: false },
    ],
    reducers: {
        addTodo: (state, action) => {
            const newTitle = action.payload.title.trim();
            if (newTitle == "") {
                alert("You shouldn't leave it blank") 
                 } else {
            const newTodo = {
                id: Date.now(),
                title: action.payload.title,
                completed: false
            };
            state.push(newTodo);
            action.payload.resetInput();
            }
        },
        toggleComplete: (state, action) => {
            const index = state.findIndex(
                (todo) => todo.id === action.payload.id);
            state[index].completed = action.payload.completed;
        },
        deleteTodo: (state, action) => {
           return state.filter((todo) => todo.id !== action.payload.id);
        },
        editTodo: (state, action) => {
            const newTitle = action.payload.title.trim();
            if (newTitle == "") {
                alert("You shouldn't leave it blank") 
                 } else {
            const index = state.findIndex(
                (todo) => todo.id === action.payload.id);
            state[index].title = action.payload.title;
        }
        }
    },
});

export const { addTodo, toggleComplete, deleteTodo, editTodo } = todoSlice.actions;

export default todoSlice.reducer;
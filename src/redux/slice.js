import { createSlice } from "@reduxjs/toolkit";

let initState = {
  filter: { q: "" },
  todos: [{ name: "Học react" }, { name: "Học JS" }],
};
export const todoSlice = createSlice({
  name: "counter",
  initialState: initState,
  reducers: {
    addTodo: (state, action) => {
      let todo = { name: action.payload };
      state.todos = [...state.todos, todo];
    },
  },
});

export const { addTodo } = todoSlice.actions;

export default todoSlice.reducer;

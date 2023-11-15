let initState = {
  filter: { q: "" },
  todos: [{ name: "Học react" }, { name: "Học JS" }],
};

function reducer(state = initState, action) {
  switch (action.type) {
    case "ADD":
      let todo = action.payload;
      //{name: "hoc css"}
      return {
        ...state,
        todos: [...state.todos, todo],
      };
    case "DELETE":
      break;
    default:
      return state;
  }
}

export default reducer;

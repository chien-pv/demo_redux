export function addTodo(name) {
  let todo = { name };
  return {
    type: "ADD",
    payload: todo,
  };
}

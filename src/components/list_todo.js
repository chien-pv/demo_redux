import Item from "./item";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
// import { addTodo } from "../redux/action";
import { addTodo } from "../redux/slice";

function ListTodo() {
  let [text, setText] = useState("");
  let dispatch = useDispatch();
  let todos = useSelector((state) => state.todos);
  console.log(todos);
  let datas = todos.map((item, index) => {
    return <Item key={index} {...item} />;
  });

  function handleAdd() {
    dispatch(addTodo(text));
  }

  return (
    <>
      <label>Name:</label>
      <input
        onChange={(e) => {
          setText(e.target.value);
        }}
        className="form-control"
      />
      <br />
      <button
        onClick={handleAdd}
        type="button"
        className="btn btn-outline-primary"
      >
        ADD
      </button>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>{datas}</tbody>
      </table>
    </>
  );
}

export default ListTodo;

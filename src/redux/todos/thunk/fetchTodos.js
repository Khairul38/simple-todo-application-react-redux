import { loaded } from "../action";

const fetchTodos = async (dispatch, getState) => {
  const response = await fetch("https://fake--json-server.herokuapp.com/todos");
  const todos = await response.json();

  dispatch(loaded(todos));
};

export default fetchTodos;

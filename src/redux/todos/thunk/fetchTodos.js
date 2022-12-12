import { loaded } from "../action";

const fetchTodos = async (dispatch, getState) => {
  const response = await fetch(
    "https://fake-product-api-json-server.vercel.app/todos"
  );
  const todos = await response.json();

  dispatch(loaded(todos));
};

export default fetchTodos;

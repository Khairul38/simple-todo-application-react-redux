import { deleted } from "../action";

const deleteTodo = (todoId) => {
  return async (dispatch, getState) => {
    await fetch(
      `https://fake-product-api-json-server.vercel.app/todos/${todoId}`,
      {
        method: "DELETE",
      }
    );

    dispatch(deleted(todoId));
  };
};

export default deleteTodo;

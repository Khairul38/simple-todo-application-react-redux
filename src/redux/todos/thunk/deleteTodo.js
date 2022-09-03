import { deleted } from "../action";

const deleteTodo = (todoId) => {
  return async (dispatch, getState) => {
    await fetch(`https://fake--json-server.herokuapp.com/todos/${todoId}`, {
      method: "DELETE",
    });

    dispatch(deleted(todoId));
  };
};

export default deleteTodo;

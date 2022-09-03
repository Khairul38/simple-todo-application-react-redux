import { toggled } from "../action";

const updateStatus = (todoId, currentStatus) => {
  return async (dispatch, getState) => {
    const response = await fetch(
      `https://fake--json-server.herokuapp.com/todos/${todoId}`,
      {
        method: "PATCH",
        body: JSON.stringify({
          completed: !currentStatus,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    );
    const todo = await response.json();

    dispatch(toggled(todo.id));
  };
};

export default updateStatus;

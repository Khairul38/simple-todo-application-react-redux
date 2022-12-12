import { colorSelected } from "../action";

const updateColor = (todoId, color) => {
  return async (dispatch, getState) => {
    const response = await fetch(
      `https://fake-product-api-json-server.vercel.app/todos/${todoId}`,
      {
        method: "PATCH",
        body: JSON.stringify({
          color: color,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    );
    const todo = await response.json();

    dispatch(colorSelected(todo.id, todo.color));
  };
};

export default updateColor;

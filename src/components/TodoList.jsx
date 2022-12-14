import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { destroy, selectTodos, getTodosAsync, toggleTodoAsync } from "redux/todos/todosSlice";
import Loading from "./Loading";
import Error from "./Error";

let filtered = [];

const TodoList = () => {
  const dispatch = useDispatch();
  const items = useSelector(selectTodos);
  const activeFilter = useSelector((state) => state.todos.activeFilter);
  const isLoading = useSelector((state) => state.todos.isLoading);
  const error = useSelector((state) => state.todos.error);

  useEffect(() => {
    dispatch(getTodosAsync());
  }, [dispatch]);

  const handleDestroy = (id) => {
    if (window.confirm("Are you sure ?")) {
      dispatch(destroy(id));
    }
  };
  filtered = items;
  if (activeFilter !== "all") {
    filtered = items.filter((todo) =>
      activeFilter === "active"
        ? todo.completed === false
        : todo.completed === true
    );
  }

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <Error message={error} />;
  }

  const handleToggle = async (id, completed) => {
    await dispatch(toggleTodoAsync({id, data: {completed}}))
  };

  return (
    <ul className="todo-list">
      {filtered.map((item) => (
        <li key={item.id} className={item.completed ? "completed" : ""}>
          <div className="view">
            <input
              className="toggle"
              type="checkbox"
              checked={item.completed}
              onChange={() => handleToggle(item.id, !item.completed)}
            />
            <label>{item.title}</label>
            <button
              onClick={() => handleDestroy(item.id)}
              className="destroy"
            ></button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;

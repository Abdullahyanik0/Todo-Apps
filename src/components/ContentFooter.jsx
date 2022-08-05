import React from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  clearCompleted,
  selectTodos,
  changeActiveFilter,
} from "redux/todos/todosSlice";

const ContentFooter = () => {
  const items = useSelector(selectTodos);
  const itemsLeft = items.filter((item) => !item.completed).length;
  const dispatch = useDispatch();

  return (
    <div>
      <footer className="footer">
        <span className="todo-count">
          <strong>{itemsLeft} </strong>
          {itemsLeft < 2 ? "item" : "items"}
        </span>

        <ul className="filters">
          <li>
            <a
              href="#/"
              className={`activeFilter ===  "all" ? "selected : ""`}
              onClick={() => dispatch(changeActiveFilter("all"))}
            >
              All
            </a>
          </li>
          <li>
            <a
              href="#/"
              className={`activeFilter ===  "active" ? "selected : ""`}
              onClick={() => dispatch(changeActiveFilter("active"))}
            >
              Active
            </a>
          </li>
          <li>
            <a
              href="#/"
              className={`activeFilter ===  "completed" ? "selected : ""`}
              onClick={() => dispatch(changeActiveFilter("completed"))}
            >
              Completed
            </a>
          </li>
        </ul>

        <button
          onClick={() => dispatch(clearCompleted())}
          className="clear-completed"
        >
          Clear completed
        </button>
      </footer>
    </div>
  );
};

export default ContentFooter;

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodoAsync } from "redux/todos/todosSlice";
import Loading from "./Loading";

const Form = () => {
  const [title, setTitle] = useState("");

  const dispatch = useDispatch();

  const isLoading = useSelector((state) => state.todos.addNewTodoIsLoading);

  const handleSubmit = async (e) => {
    if (!title) return;
    e.preventDefault();
    

    await dispatch(addTodoAsync({ title }));
    setTitle("");
  };

  const clear = () =>{
    
  }
 
  return (
    <form
      style={{
        display: "flex",
        alignItems: "center",
        paddingRight: "10px",
      }}
      onSubmit={handleSubmit}
    >
      <input
        disabled={isLoading}
        className="new-todo"
        placeholder="What needs to be done?"
        autoFocus
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      {isLoading && <span><Loading /></span>}
     
    </form>
  );
};

export default Form;

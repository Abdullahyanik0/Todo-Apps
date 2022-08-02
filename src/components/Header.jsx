import React from "react";
import Form from "./Form";

const Header = () => {
  return (
    <header className="header">
      <h1>todos</h1>
      {/* <form>
			<input className="new-todo" placeholder="What needs to be done?" autoFocus />
		</form> */}
      <Form />
    </header>
  );
};

export default Header;

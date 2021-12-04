import React from "react";
import "./TodoItem.css";

import Checkbox from "@material-ui/core/Checkbox";

const label = { inputProps: { "aria-label": "Checkbox demo" } };
const handleCheck = (params) => {};

const TodoItem = ({ name, done, id }) => {
  return (
    <div className="todoItem">
      <Checkbox
        checked={done}
        color="primary"
        onChange={handleCheck}
        inputProps={{ "aria-label": "primary checkbox" }}
      />
      <p className={done && "todoItem--done"}>{name}</p>
    </div>
  );
};

export default TodoItem;

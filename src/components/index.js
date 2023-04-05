import React, { useState } from "react";
import "../App.css";
import Header from "./Header";
import List from "./List";

function İndex() {

  const [todos, setTodos] = useState([
    { text: "Learn JavaScript", done: true },
    { text: "Learn React", done: false },
    { text: "Have a Life!", done: false },
  ]);

  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState(todos);
  const [inputValue, setInputValue] = useState("");

  return (
    <div>
      <section className="todoapp">

        <Header
          todos={todos}
          setTodos={setTodos}
          inputValue={inputValue}
          setInputValue={setInputValue}
        />

        <List
          filteredTodos={filteredTodos}
          setFilteredTodos={setFilteredTodos}
          todos={todos}
          status={status}
          setTodos={setTodos}
          setStatus={setStatus}
        />
      </section>
      <footer className="info">
      <p>Click to edit a todo</p>
      <p>
        Created by <a href="https://d12n.me/">Dmitry Sharabin</a>
      </p>
      <p>
        Part of <a href="http://todomvc.com">TodoMVC</a>
      </p>
    </footer>
    </div>
  );
}

export default İndex;
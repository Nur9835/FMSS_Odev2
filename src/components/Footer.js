import React from "react";

function Footer({ todos, setTodos, setStatus }) {

//  tamamlanmamış todo sayısı
 const unComplatedTodosCount= todos.filter((todo) =>!todo.done).length;

//  tamamlanmış todo sayısı
 const complatedTodosCount= todos.filter((todo) =>todo.done).length;

  const handleClick = (status) => {
    if (status === "all")   setStatus(status);
    else if (status === "active") setStatus(status);
    else if (status === "completed")  setStatus(status);

  };

  //tamamlanmış todo'ları siler
  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.done));
  };

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>
          {unComplatedTodosCount }
         </strong>
        {} items left
      </span>

      <ul className="filters">
        <li>
          <button onClick={() => handleClick("all")} className="all">
            All
          </button>
        </li>
        <li>
          <button onClick={() => handleClick("active")} className="active">
            Active
          </button>
        </li>
        <li>
          <button
            onClick={() => handleClick("completed")}
            className="completed"
          >
            Completed
          </button>
        </li>
      </ul>
      {/* tamamlanmış en az 1 todo varsa butonu göster */}
      {complatedTodosCount > 0 && (
        <button onClick={clearCompleted} className="clear-completed">
          Clear completed
        </button>
      )} 
    </footer>
  );
}

export default Footer;
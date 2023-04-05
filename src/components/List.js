import React, { useState, useEffect } from "react";
import Footer from "./Footer";
function Main({ todos, setTodos, status, filteredTodos, setFilteredTodos,setStatus }) {

  const [isToDoMark, setIsTodDotMark] = useState(false);

    //tüm todoları complated/uncomplated yapma 
  const changeComplete = () => {
    setIsTodDotMark(!isToDoMark);
   if (!isToDoMark) {
     filteredTodos.map((item) => {
       item.done = true;
      });

    } else {
      filteredTodos.map((item) => {
       item.done = false;
     
      });
    }
  };

  // todolardaki checkboxa tıklandığında 
  const handleCheck = (item) => {
    setFilteredTodos(filteredTodos.map((todo) => {
      if (todo === item) {
        todo.done = !todo.done;
      }
      return todo;
    }));
  };

  // her status veya todo durumlarında değişiklik olduğunda çalışacak
  useEffect(() => {

    if (status == "all") {
      // tüm todolar
      setFilteredTodos(todos);
    }
   else if (status == "completed") {
    // tamamlanmış todolar
      setFilteredTodos(todos.filter((item) => {
        return item.done == true;
      }));
    }
   else {
    //tamamlanmamış todolar
      setFilteredTodos( todos.filter((item) => {
        return item.done == false;
      }));
    }

  }, [status, todos]);


  //delete todo
  const deleteTodo = (item) => {
    setFilteredTodos(filteredTodos.filter((todo) => todo !== item));
    setTodos(todos.filter((todo) => todo !== item));
  };

  return (
    <section className="main">
      <input
        id="mark-all"
        className="toggle-all"
        type="checkbox"
        onChange={changeComplete}
      />
      <label htmlFor="mark-all">Mark all as complete</label>
      <ul className="todo-list">

        {filteredTodos.map((item, index) => (

          <li key={index} className={item.done ? "completed" : ""}>
            <input
              className="toggle"
              type="checkbox"
              checked={item.done}
              onChange={() => handleCheck(item)}
            />
            <label>{item.text}</label>
            <button
              className="destroy"
              onClick={() => {
                deleteTodo(item);
              }}
            ></button>
          </li>
        ))}
      </ul>

      {todos.length > 0 &&(

      <Footer
         todos={todos}
         setStatus={setStatus}
         setTodos={setTodos}

         />)

}

    </section>
  );
}

export default Main;
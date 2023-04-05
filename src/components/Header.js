import React from "react";
function Header({todos, setTodos,inputValue,setInputValue}) {


  //input girildiğinde 
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  }

  // submit olduğunda
  const handleSubmit = (e) => {
    e.preventDefault();
    if(inputValue){
      setTodos([
        ...todos, 
        { text: inputValue, done: false}, // Burada obje oluşturulur ve bu obje önceki todolara eklenir.
      ]);
      setInputValue("");
    }
  }
  return (
    <header className="header">
      <h1>TODOS</h1>
      <form onSubmit={handleSubmit}>
        <input
         value={inputValue}
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
          onChange={handleInputChange}
        />
      </form>
    </header>
  );
}

export default Header;
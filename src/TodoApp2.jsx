// import { useState } from "react";
// import "./TodoApp.css";
// import TodoInput from "./components/TodoInput/TodoInput";
// import AddedTodo from "./components/AddedTodo/AddedTodo";
// import  "./components/AddedTodo/AddedTodo.css";

// function TodoApp() {
//   const [list, setList] = useState([]);

//   const addTodo = (newTodo) => {
//     setList((prevList) => [...prevList, newTodo]);
//   };

//   const handleEdit = (id, updatedTodo) => {
//     const updatedList = list.map((todo) =>
//       todo.id === id ? { ...todo, ...updatedTodo } : todo
//     );
//     setList(updatedList);
//   };

 

//   return (
//     <main className="TodoAppContainer">
//       <section className="TodoAppInnerContainer">
//         <h1 className="TodoAppTitle">To-do App Tracker</h1>
//         <TodoInput addTodo={setList}/>
//         {/* <AddedList/>
//         <AddedList/> */}
//            <div className="TodoListHolder">
//                 {
//                     list.map((e)=>(
//                         <div key={e.id}>
//                             <AddedTodo todo={e.todo} desc={e.desc} id={e.id} setList={setList} list={list} onEdit={handleEdit}/>
//                         </div>
//                     ))
//                 }
//             </div>
//         <p className="TodoAppDescription" style={{fontSize:"14px"}}>
//           A simple todo app built with ❤️ By Koisochukwu Emmanuel using React.js
//         </p>
//         <p className="TodoAppDescription">
//           <a href="https://github.com/sage-hex/react-todo-app">
//             View on Github
//           </a>
//         </p>
//       </section>
//     </main>
//   );
// }

// export default TodoApp;

import './App.css';
import TodoItem from './TodoItem';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import { useState } from 'react';

function App() {


  const TASKS =
[
/*   {id:1  , name:"Salma" , date:"12-10-2023" , completed:false},
  {id:2  , name:"Malak" , date:"12-10-2023" , completed:true},
  {id:3  , name:"Nour" , date:"12-10-2023" , completed:true} */
];


const INITIALVALUE={id:0 , name:"" , date:"" , completed:false};
  
const [todoList, setTodoList] = useState(TASKS); 
const [todoObject, setTodoObject] = useState(INITIALVALUE);

const generateNextId =() => {
  let maxId = 0;
  for(let i = 0; i < todoList.length ; i++ )
  {
    if(todoList[i].id > maxId)
    {
      maxId= todoList[i].id;
    }
  }
  return ++maxId;
}

const submitTodoHandler = (e) => {
  e.preventDefault();
  
  if (!todoObject.name || !todoObject.date) {
      return;
  }

  if(todoObject.id!==0){
    const modifiedList=todoList.map(todoItem=>{
    
      if(todoItem.id===todoObject.id)
      {
       todoItem.name=todoObject.name
       todoItem.date=todoObject.date
      }
      return todoItem
  
    });
    setTodoList(modifiedList);
  }

  else{
  setTodoList([...todoList, { ...todoObject, id: generateNextId() }]);
  } 

  setTodoObject(INITIALVALUE);

};


const deleteTodo = (todo) => {
  const modifiedList = todoList.filter(todoItem => todoItem.id !== todo.id);
  setTodoList(modifiedList);
};

const completedTodo=(todo)=>{
/*   const completedTodo = todoList.filter(todoItem => todoItem.id === todo.id);
  completedTodo.completed=!completedTodo.completed;
  completedTodo.name=todo.name
  completedTodo.date=todo.date
  completedTodo.id=todo.id
  setTodoList([...todoList, { ...completedTodo}]);
  const modifiedList = todoList.filter(todoItem => todoItem.id !== todo.id && todoItem.completed===false)
  setTodoList(modifiedList) */

  const modifiedList=todoList.map(todoItem=>{
    
    if(todoItem.id===todo.id)
    {
      todoItem.completed=!todoItem.completed;
    }
    return todoItem

  });

    setTodoList(modifiedList);

  }


  
  return (
    <div className="mainContainer">
      <div>
      <h3 className="text-center">ToDo Application</h3>
      </div>

      <form onSubmit={submitTodoHandler}>
      <TodoForm label="Add a new task" type="text"  todoObject={todoObject} setTodoObject={setTodoObject} />
      <TodoForm label="Due Date" type="date" todoObject={todoObject} setTodoObject={setTodoObject}/>

      <div className="mt-4">
      <div class="col-md-4 offset-md-4">
      <button type="submit" class="btn btn-primary mt-2" onClick={submitTodoHandler}>Add task</button>
      </div>
      </div>

      </form>

      <TodoList tasks={todoList} deleteTodo={deleteTodo} completedTodo={completedTodo} setTodo={setTodoObject}/>

      </div>
  );
}

export default App;

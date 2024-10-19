import React from 'react';
import TodoItem from "./TodoItem";

const TodoList = (props) => {
    const { tasks , deleteTodo ,completedTodo , setTodo } = props;
    return (
        <div>
            <div>
            <h3 className="mt-4 col-md-4 offset-md-4">Pending Tasks</h3>                
            <ul className="list-group">
                    {tasks.filter(task => task.completed === false ).map(task => (
                     <TodoItem key={task.id} todo={task} deleteTodo={deleteTodo} completedTodo={completedTodo}  setTodo={setTodo}/>
                    ))}
                </ul>
            </div>

            <div>
                <h3 className="mt-4 col-md-4 offset-md-4">Completed Tasks</h3>
                <ul className="list-group">
                    {tasks.filter(task => task.completed === true ).map(task => (
                        <TodoItem key={task.id} todo={task} deleteTodo={deleteTodo} completedTodo={completedTodo} setTodo={setTodo}/>
                    ))}
                </ul>
            </div>
        </div>
        
    );
}

export default TodoList;

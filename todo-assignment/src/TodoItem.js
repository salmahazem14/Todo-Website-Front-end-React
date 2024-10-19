const TodoItem=(props)=>{

    const{todo , deleteTodo , completedTodo , setTodo}=props;

    return(
        <div className="me-4">
        <div className="col-md-4 offset-md-4">
        <li className="list-group-item todo-item">
            <div className={todo.completed ? "text-decoration-line-through" : "title"}>
            <span>{todo.id}. {todo.name} {todo.date}</span>
                <div>
                    <button onClick ={() => completedTodo(todo)} type="button" class="btn btn-success btn-sm me-2 ">{todo.completed ? "Undo" :"Complete"}</button>
                    <button onClick={()=> setTodo(todo)} disabled={todo.completed} type="button" class="btn btn-warning btn-sm me-2">Edit</button>
                    <button onClick = {()=>deleteTodo(todo)} type="button" class="btn btn-danger btn-sm me-2">Delete</button>
                </div>
            </div>  
        </li>

        </div>
        </div>
    )
}

export default TodoItem;
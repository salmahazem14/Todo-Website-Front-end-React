const TodoForm = (props) =>
{
    const { label , type , todoObject , setTodoObject } = props;

    const changeInputHandler =(field,value) => {
        if(field=== "name")
        {
            setTodoObject({...todoObject, name : value})
        }
        else if(field === "date")
        {
            setTodoObject({...todoObject, date : value})
        }
    }

    return (

            <div className="mt-4">
                <div class="col-md-4 offset-md-4">
                <label> {label} </label>
                <input required onChange={(event) => changeInputHandler(type === "text" ? "name" : "date", event.target.value)}  value={type === "text" ? todoObject.name : todoObject.date} className="form-control" type={type} placeholder="Task name"
/>                </div>
            </div>

    )
}

export default TodoForm;
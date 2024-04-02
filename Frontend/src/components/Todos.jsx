export function Todos({todos}){
    return <div>
        {todos.map(function(todo){
            return <div>
                <h3>{todo.title}</h3>
                <p>{todo.description}</p>
                <p>{todo.importance}</p>
                <button>{todo.completed == true ? "Completed" : "Mark as Complete"}</button>
            </div>
        })}
    </div>
}
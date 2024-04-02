export function  CreateTodo(){
    return <div>
        <input style={{
            padding: 10,
            margin: 10
        }} type="text" placeholder="title"></input>
        <input style={{
            padding: 10,
            margin: 10
        }} type="text" placeholder="description"></input>
        <input style={{
            padding: 10,
            margin: 10
        }} type="number" placeholder="importance"></input>

        <button style={{
            padding: 10,
            margin: 10
        }} onClick={() => {
            fetch("http://localhost:3000/todos")
                .then(async function(res){
                    const json = await res.json();
                    alert("Todo added");
                })
        }}>Add a todo</button>
    </div>
}


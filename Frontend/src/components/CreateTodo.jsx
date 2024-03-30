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
        }}>Add a todo</button>
    </div>
}


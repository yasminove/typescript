// function showTodo(todo: {title:string, text: string}){
//     console.log(todo.title+ '' + todo.text);
    
// }

// let myTodo = {
//     title: 'learn', 
//     text: 'learn ts'
// }

// showTodo(myTodo)


interface Todo {
    title: string, 
    text: string
}

function showTodo(todo: Todo){
    console.log(todo.title, 'todo.title');
    console.log(todo.text, 'todo.text');
}

let myTodo = {
    title: 'install', 
    text: 'install updates'
}

showTodo(myTodo)
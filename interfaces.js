// function showTodo(todo: {title:string, text: string}){
//     console.log(todo.title+ '' + todo.text);
function showTodo(todo) {
    console.log(todo.title, 'todo.title');
    console.log(todo.text, 'todo.text');
}
var myTodo = {
    title: 'install',
    text: 'install updates'
};
showTodo(myTodo);

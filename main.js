var todolist = [];
const ul = document.querySelector('ul');

document.querySelector('form').addEventListener('submit',function(event) {
    event.preventDefault();
    addtodo = document.querySelector('input').value;
    if(addtodo !== '') {
    todolist.push(addtodo);
    };
    const template = todolist.map(todo => `
    <li>${todo}</li>
    `);
    ul.innerHTML = template.join("");
});


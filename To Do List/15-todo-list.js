/* 
Steps: 
- 1. Crete the array
- 2. when tab on add, 
- 3. get the text from the input
- 4. add the text to array
- 5. console.log(array)
*/
const todoArray = [];
function addToDo () {
    const userInput = document.querySelector('.js-input');
    const nameOfTodo = userInput.value;
    todoArray.push(nameOfTodo);
    console.log(todoArray);

}

function addToDoKeyDown(event){
    if (event.key === 'Enter') {
        addToDo();
    }
}
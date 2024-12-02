import "./styles.css";

const makeToDo = () => {
    if (!localStorage.todo) {
        localStorage.setItem("todo", "{}");
        console.log(localStorage.todo);
    } else {
        return;
    }
};

makeToDo();
console.log(localStorage);
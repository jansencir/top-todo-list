import "./styles.css";
import { addToDoHandler } from "./modules/modal.js";

const makeToDo = () => {
    if (!localStorage.myTodo) {
        localStorage.setItem("myTodo", "[]");
        console.log(localStorage.myTodo);
    } else {
        return;
    }
};

makeToDo();
addToDoHandler();
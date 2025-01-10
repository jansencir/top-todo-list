import "./styles.css";
import { addToDoHandler } from "./modules/modal.js";

const makeToDo = () => {
    if (!localStorage.todo) {
        localStorage.setItem("todo", "{}");
        console.log(localStorage.todo);
    } else {
        return;
    }
};

makeToDo();
addToDoHandler();
const addToDoHandler = () => {
    let addProjectBtn = document.getElementById("add-project-btn");
    let projectModal = document.getElementById("project-modal");
    let addTaskBtn = document.getElementById("add-task-btn");
    let taskModal = document.getElementById("task-modal");
    let closeModalBtn = document.querySelectorAll(".form-close-btn");
    addProjectBtn.addEventListener("click", openProjectModal);
    addTaskBtn.addEventListener("click", openTaskModal);
    closeModalBtn.forEach((button) => button.addEventListener("click", closeModal));
    projectModal.addEventListener("click", clickOutsideModal);
    taskModal.addEventListener("click", clickOutsideModal);

    function openProjectModal() {
        projectModal.style.display = "block";
    };

    function openTaskModal() {
        taskModal.style.display = "block";
    };

    function closeModal() {
        if (projectModal.style.display = "block") {
            projectModal.style.display = "none"
        }
        if (taskModal.style.display = "block") {
            taskModal.style.display = "none"
        }
    }

    function clickOutsideModal(e) {
        if ((e.target == projectModal) || (e.target == taskModal)) {
            closeModal();
        }
    }
};

export { addToDoHandler };
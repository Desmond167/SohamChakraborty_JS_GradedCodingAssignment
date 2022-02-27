var task_list = [];

function displayTaskList() {
    ul_html = "";

    for(var i=0; i<task_list.length; i++) {

        let snippet = "<div class='card m-2 shadow'><div class='card-body'><h5 class='card-title'>" + task_list[i] + "</h5><a href='#' id='" + i + "' class='btn btn-success m-1'>Edit</a><button id='" + i + "' onClick='removeTaskFromList(this)' class='btn btn-danger m-1'>Delete</button></div></div>";

        // console.log(snippet)
        var ul_html = ul_html + snippet;
    }

    // console.log(ul_html)

    let element = document.getElementById("task-list");

    element.innerHTML = ul_html;
}

function removeTaskFromList(e) {
    task_list.splice(e.id, 1);
    displayTaskList();

}

function addTaskToList() {
    let task_text = document.getElementById("task").value;

    if (task_text === "") {
        alert("Sorry cannot add empty task");
    }

    else {
        task_list.push(task_text);
    }

    console.log(task_text);
    console.log(task_list);

    displayTaskList();
}

document.getElementById("button-addon2").addEventListener("click", addTaskToList);
// document.getElementById("btn-danger").addEventListener("click", removeTaskFromList(e));
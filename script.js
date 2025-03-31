document.getElementById("addtaskbtn").addEventListener("click",function() {
    let taskinput = document.getElementById("taskinput");
    let tasktext = taskinput.ariaValueMax.trim();

    if(taskText) {
        let tasklist = document.getElementById("taskList");

        let li = document.createElement("li");
        li.textcontent = tasktest;

        li.addEventListener("click", function() {
            li.classList.toggle("completed");

        });

        tasklist.appendChild(li);
        taskinput.value = "";

    }

});
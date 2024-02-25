const input_box = document.getElementById("input_box")
const list_container = document.getElementById("list-container")

function addTask(){
    if(input_box.value === ''){
        alert("Message cannot be Empty!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = input_box.value;
        list_container.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span)
    }
    input_box.value = "";
    save_data();
}


list_container.addEventListener("click", function(e){
    if (e.target.tagName === "LI"){
        e.target.classList.toggle("selected")
        save_data();
    }

    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        save_data();
    }
}, false);

function save_data(){
    localStorage.setItem("data", list_container.innerHTML);
}

function showtask(){
    list_container.innerHTML = localStorage.getItem("data");
}
showtask();
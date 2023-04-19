let bgContainer = document.getElementById("bgContainer");
bgContainer.classList.add("p-3","text-center");
document.body.appendChild(bgContainer);

let heading = document.createElement("h1");
heading.textContent = "Tell Your Story Here";
heading.classList.add("mb-3","font-weight-bold");
bgContainer.appendChild(heading);

let textareaEl = document.createElement("textarea");
textareaEl.placeholder = "Type Your Here";
textareaEl.classList.add("w-100","mb-3");
textareaEl.rows = "10";
textareaEl.cols = "50";
bgContainer.appendChild(textareaEl);

let saveBtn = document.createElement("button");
saveBtn.classList.add("btn","btn-primary");
saveBtn.textContent = "Save";
bgContainer.appendChild(saveBtn);

saveBtn.onclick = () => {
        localStorage.setItem("yourStory", textareaEl.value)
}

let stored = localStorage.getItem("yourStory");

if (stored === null){
    textareaEl.value = ""
}else{
    textareaEl.value = stored
}
const groups = document.querySelector("#groups");
BuildGroup();

function RemoveSection(e) {
    e.path[2].remove()
}
function RemoveName(e) {
    e.path[1].nextElementSibling.remove();
    e.path[1].remove();
}
function BuildGroup() {
    let section = document.createElement("section");
    let box = document.createElement("div");
    box.className = "box";
    section.appendChild(box);

    let removeBtn = AddController("- odebrat skupinu");
    removeBtn.addEventListener("click", function (e) {
        RemoveSection(e)
    });
    section.appendChild(removeBtn);

    section.appendChild(AddFunction());

    let addNameBtn = AddController("+ přidat jméno");
    addNameBtn.addEventListener("click", function (e) {

        let removeNameBtn = AddController("- odebrat jméno");
        removeNameBtn.addEventListener("click", function (e) {
            RemoveName(e);
        });
        section.appendChild(removeNameBtn);
        section.appendChild(AddName());

    });
    section.appendChild(addNameBtn);
    section.appendChild(AddName());

    groups.appendChild(section);
}
function AddFunction(section) {
    let inputTextFunction = document.createElement("input");
    inputTextFunction.type = "text";
    inputTextFunction.className = "funkce";
    inputTextFunction.value = "Lékař";
    return inputTextFunction;
}
function AddName(section) {
    let inputTextName = document.createElement("input");
    inputTextName.type = "text";
    inputTextName.className = "jmeno";
    inputTextName.value = "Jméno Příjmení";
    return inputTextName;
}
function AddController(text) {
    let controller = document.createElement("div");
    controller.className = "ovladac";

    let controlBtn = document.createElement("a");
    controlBtn.innerText = text;
    controlBtn.href = "#";

    if (text.includes("-")) {
        controlBtn.style.color = "red";
    }

    controller.appendChild(controlBtn);

    return controller;
}
const addSectionBtn = document.querySelector("#addSection");
addSectionBtn.addEventListener("click", function (e) { BuildGroup() });

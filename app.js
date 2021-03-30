const groups = document.querySelector("#groups");
const footer = document.querySelector("footer");
const lastBtn = document.querySelector("#pridatSkupinu");
BuildGroup();

function RemoveSection(e) {
    e.path[2].remove();
    e.preventDefault(); 
    CheckSize();
}
function RemoveName(e) {
    e.path[1].nextElementSibling.remove();
    e.path[1].remove();
    e.preventDefault(); 
    CheckSize();
}
function BuildGroup() {
    // struktura
    let section = document.createElement("section");
    let box = document.createElement("div");
    box.className = "box";
    section.appendChild(box);

    // tlačítko na odebrání skupiny
    let removeBtn = AddController("- odebrat skupinu");
    removeBtn.addEventListener("click", function (e) {
        RemoveSection(e);
    });
    section.appendChild(removeBtn);

    // přidání input funkce
    section.appendChild(AddFunction());

    // tlačítko na přidání jména
    let addNameBtn = AddController("+ přidat jméno");
    addNameBtn.addEventListener("click", function (e) {
        let removeNameBtn = AddController("- odebrat jméno");
        removeNameBtn.addEventListener("click", function (e) {
            RemoveName(e);
        });
        section.appendChild(removeNameBtn);
        e.preventDefault();
        section.appendChild(AddName());
        CheckSize();

    });
    section.appendChild(addNameBtn);

    // přidání input jméno
    section.appendChild(AddName());

    // předání kompletu do stránky
    groups.appendChild(section);
    CheckSize();
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

    controller.addEventListener("click", function () {
        CheckSize();
    });

    controller.appendChild(controlBtn);
    return controller;
}
function CheckSize() {
    const allAdders = document.querySelectorAll(".ovladac a");
    if (lastBtn.offsetTop > 933) {
        console.log("stop jmena i sekce");
        for (const a of allAdders) {
            if (a.innerText.includes("+")) {
                a.style.display = "none";
            }
        }
    } else if (lastBtn.offsetTop > 819) {
        console.log("stop sekce");
        for (const a of allAdders) {
            if (a.innerText.includes("+")) {
                a.style.display = "block";
            }
        }
        addSectionBtn.style.display = "none";
    } else {
        console.log("ok");
        for (const a of allAdders) {
            if (a.innerText.includes("+")) {
                a.style.display = "block";
            }
        }
        // addSectionBtn.style.visibility = "hidden";
    }
    console.dir(lastBtn.offsetTop);

}
const addSectionBtn = document.querySelector("#addSection");
addSectionBtn.addEventListener("click", function (e) { 
    BuildGroup();
    e.preventDefault(); 
 });

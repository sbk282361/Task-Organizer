// 1. Define Element Selectors :33 (this was TEDIOUYS also i forgot like at least 4 things the first time i wrote trhis) 
const categoryView = document.getElementById('category-view');
const allTasksView = document.getElementById('all-tasks-view');
const btnAll = document.getElementById('btnAll');
const btnCat = document.getElementById('btnCat');
const masterTable = document.getElementById('masterTable');

const physicsInput = document.getElementById('physicsInput');
const physicsDeadline = document.getElementById('physicsDeadline');
const physicsList = document.getElementById('physicsList');
const addPhysicsBtn = document.getElementById('addPhysicsBtn');

const insInput = document.getElementById('insInput');
const insDeadline = document.getElementById('insDeadline');
const insList = document.getElementById('insList');
const addInsBtn = document.getElementById('addInsBtn');

const mathInput = document.getElementById('mathInput');
const mathDeadline = document.getElementById('mathDeadline');
const mathList = document.getElementById('mathList');
const addMathBtn = document.getElementById('addMathBtn');

const biologyInput = document.getElementById('biologyInput');
const biologyDeadline = document.getElementById('biologyDeadline');
const biologyList = document.getElementById('biologyList');
const addBiologyBtn = document.getElementById('addBiologyBtn');

const spanishInput = document.getElementById('spanishInput');
const spanishDeadline = document.getElementById('spanishDeadline');
const spanishList = document.getElementById('spanishList');
const addSpanishBtn = document.getElementById('addSpanishBtn');

const artsInput = document.getElementById('artsInput');
const artsDeadline = document.getElementById('artsDeadline');
const artsList = document.getElementById('artsList');
const addArtsBtn = document.getElementById('addArtsBtn');

// 2. Define Event Handlers le lele func6ions

function addPhysicsTask() {
    const taskVal = physicsInput.value;
    const dateVal = physicsDeadline.value;
    if (taskVal == "") {
        alert("Please type a task first!");
        return;
    }
    
    physicsList.innerHTML += "<div class='task-card' oncontextmenu='event.preventDefault(); if(confirm(\"delete task?\")){this.remove(); saveData();}'><span>" + taskVal + "</span></div>";
    masterTable.innerHTML += "<tr><td><span class='table-badge physics-badge'>Physics</span></td><td>" + taskVal + "</td><td><div class='deadline-box'>" + dateVal + "</div></td><td><input type='checkbox' onclick='if(this.checked){this.setAttribute(\"checked\", \"\")}else{this.removeAttribute(\"checked\")}; saveData();'><span class='del-btn' onclick='this.parentElement.parentElement.remove(); saveData();'>×</span></td></tr>";
    physicsInput.value = "";
    physicsDeadline.value = "";
    saveData();
}

function addInsTask() {
    const taskVal = insInput.value;
    const dateVal = insDeadline.value;
    if (taskVal == "") {
        alert("You didn't input any task :((");
        return;
    }
    insList.innerHTML += "<div class='task-card' oncontextmenu='event.preventDefault(); if(confirm(\"delete task?\")){this.remove(); saveData();}'><span>" + taskVal + "</span></div>";
    masterTable.innerHTML += "<tr><td><span class='table-badge ins-badge'>INS</span></td><td>" + taskVal + "</td><td><div class='deadline-box'>" + dateVal + "</div></td><td><input type='checkbox' onclick='if(this.checked){this.setAttribute(\"checked\", \"\")}else{this.removeAttribute(\"checked\")}; saveData();'><span class='del-btn' onclick='this.parentElement.parentElement.remove(); saveData();'>×</span></td></tr>";
    insInput.value = "";
    insDeadline.value = "";
    saveData();
}

function addMathTask() {
    const taskVal = mathInput.value;
    const dateVal = mathDeadline.value;
    if (taskVal == "") {
        alert("please type out a task first!! ");
        return;
    }
    mathList.innerHTML += "<div class='task-card' oncontextmenu='event.preventDefault(); if(confirm(\"delete task?\")){this.remove(); saveData();}'><span>" + taskVal + "</span></div>";
    masterTable.innerHTML += "<tr><td><span class='table-badge math-badge'>Math</span></td><td>" + taskVal + "</td><td><div class='deadline-box'>" + dateVal + "</div></td><td><input type='checkbox' onclick='if(this.checked){this.setAttribute(\"checked\", \"\")}else{this.removeAttribute(\"checked\")}; saveData();'><span class='del-btn' onclick='this.parentElement.parentElement.remove(); saveData();'>×</span></td></tr>";
    mathInput.value = "";
    mathDeadline.value = "";
    saveData();
}

function addBiologyTask() {
    const taskVal = biologyInput.value;
    const dateVal = biologyDeadline.value;
    if (taskVal == "") {
        alert("You should type out a task first hehe");
        return;
    }
    biologyList.innerHTML += "<div class='task-card' oncontextmenu='event.preventDefault(); if(confirm(\"delete task?\")){this.remove(); saveData();}'><span>" + taskVal + "</span></div>";
    masterTable.innerHTML += "<tr><td><span class='table-badge biology-badge'>Biology</span></td><td>" + taskVal + "</td><td><div class='deadline-box'>" + dateVal + "</div></td><td><input type='checkbox' onclick='if(this.checked){this.setAttribute(\"checked\", \"\")}else{this.removeAttribute(\"checked\")}; saveData();'><span class='del-btn' onclick='this.parentElement.parentElement.remove(); saveData();'>×</span></td></tr>";
    biologyInput.value = "";
    biologyDeadline.value = "";
    saveData();
}

function addSpanishTask() {
    const taskVal = spanishInput.value;
    const dateVal = spanishDeadline.value;
    if (taskVal == "") {
        alert("Type out a task first please! :))");
        return;
    }
    spanishList.innerHTML += "<div class='task-card' oncontextmenu='event.preventDefault(); if(confirm(\"delete task?\")){this.remove(); saveData();}'><span>" + taskVal + "</span></div>";
    masterTable.innerHTML += "<tr><td><span class='table-badge spanish-badge'>Spanish</span></td><td>" + taskVal + "</td><td><div class='deadline-box'>" + dateVal + "</div></td><td><input type='checkbox' onclick='if(this.checked){this.setAttribute(\"checked\", \"\")}else{this.removeAttribute(\"checked\")}; saveData();'><span class='del-btn' onclick='this.parentElement.parentElement.remove(); saveData();'>×</span></td></tr>";
    spanishInput.value = "";
    spanishDeadline.value = "";
    saveData();
}

function addArtsTask() {
    const taskVal = artsInput.value;
    const dateVal = artsDeadline.value;
    if (taskVal == "") {
        alert("Please type a task first!");
        return;
    }
    artsList.innerHTML += "<div class='task-card' oncontextmenu='event.preventDefault(); if(confirm(\"delete task?\")){this.remove(); saveData();}'><span>" + taskVal + "</span></div>";
    masterTable.innerHTML += "<tr><td><span class='table-badge arts-badge'>Arts</span></td><td>" + taskVal + "</td><td><div class='deadline-box'>" + dateVal + "</div></td><td><input type='checkbox' onclick='if(this.checked){this.setAttribute(\"checked\", \"\")}else{this.removeAttribute(\"checked\")}; saveData();'><span class='del-btn' onclick='this.parentElement.parentElement.remove(); saveData();'>×</span></td></tr>";
    artsInput.value = "";
    artsDeadline.value = "";
    saveData();
}

// All views tab 
function showAllView() {
    allTasksView.style.display = "block";
    categoryView.style.display = "none";
    btnAll.classList.add('active');
    btnCat.classList.remove('active');
}
// Categirrt views tab
function showCategoryView() {
    allTasksView.style.display = "none";
    categoryView.style.display = "block";
    btnCat.classList.add('active');
    btnAll.classList.remove('active');
}

// local storagee YAY I FINALLY FINISHED 
function saveData() {
    localStorage.setItem("tableSave", masterTable.innerHTML);
    localStorage.setItem("physicsSave", physicsList.innerHTML);
    localStorage.setItem("insSave", insList.innerHTML);
    localStorage.setItem("mathSave", mathList.innerHTML);
    localStorage.setItem("bioSave", biologyList.innerHTML);
    localStorage.setItem("spanishSave", spanishList.innerHTML);
    localStorage.setItem("artsSave", artsList.innerHTML);
}

window.onload = function() {
    masterTable.innerHTML = localStorage.getItem("tableSave");
    physicsList.innerHTML = localStorage.getItem("physicsSave");
    insList.innerHTML = localStorage.getItem("insSave");
    mathList.innerHTML = localStorage.getItem("mathSave");
    biologyList.innerHTML = localStorage.getItem("bioSave");
    spanishList.innerHTML = localStorage.getItem("spanishSave");
    artsList.innerHTML = localStorage.getItem("artsSave");
};

// 3. Setting da Event Listenerssssss
addPhysicsBtn.addEventListener("click", addPhysicsTask);
addInsBtn.addEventListener("click", addInsTask);
addMathBtn.addEventListener("click", addMathTask);
addBiologyBtn.addEventListener("click", addBiologyTask);
addSpanishBtn.addEventListener("click", addSpanishTask);
addArtsBtn.addEventListener("click", addArtsTask);

btnAll.addEventListener("click", showAllView);
btnCat.addEventListener("click", showCategoryView);

// DONENNENENE (im glad i expereienced computerscience at some point in my hs life)
// completely horrible at it thooo :pensive:
// idek if Mr.Patrick can see this help  
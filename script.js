//Code for TodoList 
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
document.getElementById("addtaskButton").addEventListener("click", addTask);
function addTask()
{
    if(inputBox.value === ''){
        alert("You must write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span); 
    }
    inputBox.value = '';
    saveData();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
},false);


function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();


//Code for School work TodoList 
const inputBoxSchoolWork = document.getElementById("input-box-schoolwork");
const listContainerSchoolWork = document.getElementById("list-container-schoolwork");
document.getElementById("addschooltaskButton").addEventListener("click", addTaskSchoolWork);
function addTaskSchoolWork()
{
    if(inputBoxSchoolWork.value === ''){
        alert("You must write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBoxSchoolWork.value;
        listContainerSchoolWork.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span); 
    }
    inputBoxSchoolWork.value = '';
    saveDataSchoolWork();
}

listContainerSchoolWork.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveDataSchoolWork();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
},false);


function saveDataSchoolWork(){
    localStorage.setItem("dataSchoolWork", listContainerSchoolWork.innerHTML);
}

function showTaskSchoolWork(){
    listContainerSchoolWork.innerHTML = localStorage.getItem("dataSchoolWork");
}
showTaskSchoolWork();

//Code for School work TodoList 
const inputBoxOtherWork = document.getElementById("input-box-other");
const listContainerOtherWork = document.getElementById("list-container-other");
document.getElementById("addOthertaskButton").addEventListener("click", addTaskother);
function addTaskother()
{
    if(inputBoxOtherWork.value === ''){
        alert("You must write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBoxOtherWork.value;
        listContainerOtherWork.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span); 
    }
    inputBoxOtherWork.value = '';
    saveDataOtherWork();
}

listContainerOtherWork.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveDataOtherWork();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
},false);


function saveDataOtherWork(){
    localStorage.setItem("dataOtherWork", listContainerOtherWork.innerHTML);
}

function showTaskOtherWork(){
    listContainerOtherWork.innerHTML = localStorage.getItem("dataOtherWork");
}
showTaskOtherWork();


//timeline components to modify values according to my selected tech stack
const card1Description = document.getElementById("step1");
const card2Description = document.getElementById("step2");
const card3Description = document.getElementById("step3");
const card4Description = document.getElementById("step4");
const card5Description = document.getElementById("step5");
const card5Head = document.getElementById("step5Head");

document.getElementById("addtimelineButton").addEventListener("click", addTimeline);

function addTimeline()
{
    //Code for showing timeline
const techStack = document.getElementById('selectTechStack');
const selectedTechStack = techStack.value;
//show the timeline elements
if(selectedTechStack == "devops")
{
    card1Description.style.fontSize = "12px";
    card1Description.innerHTML  = "Learn Git<ul><li>Base Commands</li><li>Pull Request</li><li>Branching</li><li>Merging</li></p></ul><p>Learn Linux<ul><li>Shell commands</li><li>File System</li><li>Networking</li><li>Virtualization</li><li>POSIX</li></p>";
    card2Description.innerHTML = "<p>Learn Linux<ul><li>Shell commands</li><li>File System</li><li>Networking</li><li>Virtualization</li><li>POSIX</li></p>";
    card3Description.innerHTML =  "Learn Networking & Security<ul><li>OSI Model</li><li>DNS</li><li>HTTP</li><li>SSH</li><li>Security Tools</li></p></ul>";
    card4Description.innerHTML =  "Learn Server Management<ul><li>Reverse Proxy & caching server</li><li>Firewall & Web Server</li> Also Learn Containers<li>Running Containers</li><li>Docker Files</li><li>Docker-Compose</li></p></ul>";
    card5Description.innerHTML =  "Learn Container Orchestration<ul><li>Components & CLI</li><li>Namespaces & Administer</li> Also Learn Containers<li>Running Containers</li><li>Docker Files</li><li>Docker-Compose</li></p></ul>";
    saveDataTimeline();

}
else if(selectedTechStack == "webdevelopment")
{

    card1Description.innerHTML = "Learn These programming languages:<ul><li>HTML</li><li>CSS</li><li>Javascript</li></p></ul>";
    card2Description.innerHTML = "<p>For Front End Development <ul><li>Learn npm</li><li>Git</li><li>Github</li><li>React</li><li>Tailwind</li></p>";
    card3Description.innerHTML =  "For Back ENd Development<ul><li>Node JS</li><li>RESTfull APIs</li><li>JWT Auth</li><li>Redis</li><li>Linux Basic</li></p></ul>";
    card4Description.innerHTML =  "Learn some Devops<ul><li>Basic AWS services</li><li>Monit (for monitoring)</li> Github Actions (For CI/CD)<li>Ansible (for Automation)</li><li>Terraform (for Infrastructure)</li></p></ul>";
    card5Description.style.display =  "none";
    card5Head.style.display =  "none";
    saveDataTimeline();

}
else if(selectedTechStack == "machinelearning")
{

    card1Description.innerHTML = "Learn One of These programming languages:<ul><li>Python</li><li>R Programming</li></p></ul>";
    card2Description.innerHTML = "<p>For Machine Learning you have to learn python libraries <ul><li>SKlearn</li><li>Tensor Flow Module</li><li>Pytorch</li><li>OpenAI python package or transformmers package from hugging face</li><li>Tailwind</li></p>";
    card3Description.innerHTML =  "Learn<ul><li>Linear Algebra</li><li>Learn Statistics</li><li>Python libraris such as: </li><li>Pandas</li><li>Numpy</li></p></ul>";
    card4Description.innerHTML =  "Learn Core ML Algorithms<ul><li>Gradient Descent</li><li>Slope</li><li>Supervised vs Unsupervised learning</li><li>Reinforcement Learning</li><li>Basic Linear Regression</li><li>Working with alll such similar models</li><li>Clustering</li></p></ul>";
    card5Description.innerHTML =  "Learn Deplyment<ul><li>Learn Django and Flask</li><li>Streamlit and FastAPI</li> Docker and kubernetes</p></ul>";
    saveDataTimeline();

}
else if(selectedTechStack == "gamedevelopment")
{

    card1Description.innerHTML = "Learn One of These programming languages:<ul><li>C++</li><li>C#</li><li>Python</li></p></ul>";
    card2Description.innerHTML = "<p>Learn Some <ul><li>Game Mathematics</li><li>Game Physics</li></p>";
    card3Description.innerHTML =  "Learn a Game Engine<ul><li>Unity Engine</li><li>Unreal Engine</li><li>Learn graphics Pipleine of these engines</li><li>Learn Shader Graphs</li></p></ul>";
    card4Description.innerHTML =  "Learn To Make Enemy AI<ul><li>Learn Pathfinding</li><li>Learn Game Design</li> Learn level Design<li>Learn Gmae Marketing</li><li>Learn Advanced Graphics Rendering</li></p></ul>";
    card5Description.style.display =  "none";
    card5Head.style.display =  "none";
    saveDataTimeline();

}
}

function saveDataTimeline(){
    localStorage.setItem("data1", card1Description.innerHTML);
    localStorage.setItem("data2", card2Description.innerHTML);
    localStorage.setItem("data3", card3Description.innerHTML);
    localStorage.setItem("data4", card4Description.innerHTML);
    localStorage.setItem("data5", card5Description.innerHTML);

}

function showDataTimeline(){
    card1Description.innerHTML = localStorage.getItem("data1");
    card2Description.innerHTML = localStorage.getItem("data2");
    card3Description.innerHTML = localStorage.getItem("data3");
    card4Description.innerHTML = localStorage.getItem("data4");
    card5Description.innerHTML = localStorage.getItem("data5");

    
}
showDataTimeline();


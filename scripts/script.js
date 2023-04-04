
function darker(event)
{
    if((event.target.tagName === "BUTTON")&&(event.target.id === "darker"))
    {
    if(document.querySelector("#darker").textContent == "Dark Theme"){
        document.querySelector("#darker").textContent = "Ligher Theme"
    }
    else{
        document.querySelector("#darker").textContent = "Dark Theme"
    }

    document.querySelector("main").classList.toggle("darker1")
    document.querySelector("main h1").classList.toggle("darker1")
    document.querySelector("main h2").classList.toggle("darker1")
    document.querySelector("main div").classList.toggle("darker1")
    document.querySelector("aside").classList.toggle("darker2")
    }
}   

document.addEventListener("click",darker)

function hidden(event)
{
    if((event.target.tagName === "BUTTON")&&(event.target.id === "cancel"))
    {
        document.querySelector("#note").style.display = "none"
        document.querySelector("#save").style.display = "none"
        document.querySelector("#cancel").style.display = "none"
    }
}
document.addEventListener("click",hidden)

function display(event)
{
    if((event.target.tagName === "BUTTON")&&(event.target.id === "newnote")&&(document.querySelector("#note").style.display === "none"))
    {
        document.querySelector("#note").style.display = "initial"
        document.querySelector("#save").style.display = "initial"
        document.querySelector("#cancel").style.display = "initial"
        document.querySelector("#note").textContent = ""
    }
}
document.addEventListener("click",display)

var notesArray = [{title:"note one",body:"this is my first note"},{title:"note two",body:"this is my second note"}]

function save(event)
{
    if((event.target.tagName === "BUTTON")&&(event.target.id === "save")&&(document.querySelector("#note").value.trim() != ""))
    {
        let user_title = prompt("The title of the note")
        let user_body = document.querySelector("#note").value
        notesArray.push({title:user_title,body:user_body})
        let newnote = document.createElement("li")
        document.querySelector("aside ul").appendChild(newnote)
        newnote.textContent = notesArray[notesArray.length-1]["title"]
    }
}
document.addEventListener("click",save)

function search(event)
{   
        for(let notes of notesArray)
        {
            if(notes["title"] === event.target.textContent)
            {
                console.log(notes["body"])
            }
        }
}
document.querySelector("ul").addEventListener("click",search)
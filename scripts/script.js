
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
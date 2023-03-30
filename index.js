// toggle icon navbar 
let code = document.querySelector(".logo")
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
let navbarLinks = document.querySelectorAll('header nav a')


menuIcon.onclick = () => {
    menuIcon.classList.toggle("bx-x")
    navbar.classList.toggle("active")

}

// remove toggle icon and navbar when clicking navbar link


    navbarLinks.forEach(link => {
        link.onclick = () => {
        navbar.classList.remove("active")
    }
    })



    code.addEventListener("mouseover", function(){
        code.classList.add("btn");
        code.innerText = "code"
    })
    code.addEventListener("mouseleave", function(){
        code.classList.toggle("btn");
        code.innerText = "Check the Code"
    })
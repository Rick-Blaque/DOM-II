// Your code goes here


const welcomeHeading = document.querySelector('.intro h2')
welcomeHeading.addEventListener('mouseover', () => {
    welcomeHeading.style.transform = "scale(1.2)";
})
welcomeHeading.addEventListener('mouseenter', () => {
    welcomeHeading.style.color = "purple";
})


welcomeHeading.addEventListener("mouseleave", function() {
    welcomeHeading.style.transform = "scale(1.0)"
})
welcomeHeading.addEventListener("mouseleave", function() {
    welcomeHeading.style.color = "black"
})


const pTag = document.querySelectorAll("p")

pTag.forEach(el => {
    el.addEventListener("dblclick", () => {
        el.style.color = "yellow"
    })
})
const aTag = document.querySelectorAll("a")

aTag.forEach(el => {
    el.addEventListener("mouseover", () => {
        el.style.color = "red"
    })
})
aTag.forEach(el => {
    el.addEventListener("mouseleave", () => {
        el.style.color = "black"
    })
})
aTag.forEach(el => {
    el.addEventListener("mouseenter", () => {
        el.style.backgroundColor = "grey";
        
    })
})
aTag.forEach(el => {
    el.addEventListener("mouseenter", (event) => {
        el.style.backgroundColor = "white";
        event.stopPropagation()
    })
})
const navLogo = document.querySelector(".logo-heading")
navLogo.addEventListener("click", () => {
    navLogo.style.transform = 'scale(1.5)'
})
navLogo.addEventListener("mouseenter", () => {
    navLogo.style.color = "purple"
})
navLogo.addEventListener("mouseleave", () => {
    navLogo.style.color = "black"
})

window.addEventListener("scroll", () => {
    navLogo.style.color = "orange"
})
window.addEventListener("resize", () => {
    welcomeHeading.style.color = "orange"
})
const nav = document.querySelector("nav")
nav.addEventListener("click", () => {
    nav.style.backgroundColor = "grey";
    event.stopPropagation()

})
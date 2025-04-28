
const dropdown = document.querySelectorAll(".dropdown")[1];
dropdown.style.height = 0;
dropdown.style.opacity = 0;
dropdown.style.color = "red"


const companiesMobile = document.querySelector("#companies-mobile-drop")
.addEventListener("click", () => {
    console.log(dropdown);
        if (dropdown.style.height === "0px") {
            dropdown.style.height = "auto"
            dropdown.style.opacity = 1
        } else {
            dropdown.style.height = 0
            dropdown.style.opacity = 0
        }
    })

    
    
const navMobile = document.querySelector(".nav-links-mobile");
navMobile.style.left = "-100%"
const burgerMenu = document.querySelector(".burger-menu")
    .addEventListener("click", () => {
        if (navMobile.style.left === "-100%") {
            navMobile.style.left = 0
        } else {
            navMobile.style.left = "-100%"
        }
    })


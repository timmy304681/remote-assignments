/* Click to Change Text. */
const welcome = document.querySelector("#welcome");
welcome.addEventListener("click", () => {
    welcome.textContent="Have a Good Time!";
})

/* Click to Show More Content Boxes. */
const btnToggle = document.querySelector(".btn-toggle");
const hideList = document.querySelector(".hide-content");

hideList.style.display = "none";  //hide content box 

btnToggle.addEventListener("click", () => {
    if (hideList.style.display == "none" ){
        hideList.removeAttribute('style');  // remove style
    } else {
        hideList.style.display = "none";
    }
})


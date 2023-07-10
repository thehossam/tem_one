// ========================================================================
// function change backgound and text
let home = document.querySelector(".home");
let h4 = document.querySelector(".home .text h4");
let changeback = ["chicago.jpg", "ny.jpg", "la.jpg"]
let changehead = ["CHICAGO" , "NEW YOURK", "LOS ANGLESS"]

function changebackground(){
  let len = Math.floor(Math.random() * changeback.length);
  home.style.backgroundImage = `url(../imgs/${changeback[len]})`
  h4.textContent = `${changehead[len]}`
}
setInterval(changebackground,5000)


// function remove outline from input when input clicked

let input = document.querySelectorAll(".contact .contact-call form input")

input.forEach((e) => {
  e.addEventListener("click", (e) => {
    e.target.style.outline = '0'
  })
})


// ==========================================================================
// let hiddenlinks = document.querySelector(".header .container i");
// let links = document.querySelector(".header .container .links");

// console.log(links)
// hiddenlinks.onclick = function() {
//   hiddenlinks.style.cursor = 'pointer';
//   console.log(links)
//   links.style.disblay = 'block';
// }
























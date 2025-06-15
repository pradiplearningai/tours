let slides = document.getElementById("slides")
let images = document.querySelectorAll(".flexbox img")
for(let i of images){
     i.addEventListener('click',function(event){
          slides.src = event.target.src
     })
}
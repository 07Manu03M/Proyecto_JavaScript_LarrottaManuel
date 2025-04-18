let glowInTexts = document.querySelectorAll(".glowIn");
let botonsito = document.querySelector(".buttonGlow")

glowInTexts.forEach(glowInText => {
  let letters = glowInText.textContent.split("");
  glowInText.textContent = ""; 
  letters.forEach((letter, i) => {
    let span = document.createElement("span");
    span.textContent = letter;
    span.style.animationDelay = `${i * 0.02}s`;
    glowInText.append(span);
  });
});

botonsito.addEventListener("click",()=>{
    window.location.href = "views/example.html";
})
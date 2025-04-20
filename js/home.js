let menusito = document.getElementById("menusito");
let div_aside = document.querySelector(".div_aside")
let menucito = document.getElementById("menucito")
let div_imagen = document.querySelector(".div_imagen")

menusito.addEventListener("click",()=>{
    div_aside.classList.toggle("mini_menuaside");
})
menucito.addEventListener("click",()=>{
    div_aside.classList.toggle("mini_menuaside")
})
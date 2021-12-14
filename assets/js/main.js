const navMenu = document.querySelector(".nav");
const menu = document.querySelector(".enlaces-nav");
const btnMenu = document.querySelector(".hamburguer");
const btnCancel = document.querySelector(".btn-cancel");

//para que el menu se esconda
let ubiacionPrincipal = window.pageYOffset;
window.addEventListener("scroll", ()=>{
    let actualScroll = window.pageYOffset;
    if(ubiacionPrincipal>=actualScroll){
        document.getElementsByTagName("nav")[0].style.top = "0px";
    }else {
        document.getElementsByTagName("nav")[0].style.top = "-110px";
    }
    ubiacionPrincipal=actualScroll;
});

btnMenu.onclick = ()=> {
    menu.classList.replace('desactive', 'active');
};

btnCancel.onclick=()=> {
    menu.classList.replace('active','desactive');
};
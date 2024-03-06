const navMenu = document.querySelector(".nav");
const menu = document.querySelector(".enlaces-nav");
const btnMenu = document.querySelector(".hamburguer");
const btnCancel = document.querySelector(".btn-cancel");

const nombreElement = document.getElementById("nombre");
const nombreTxt = 'Web/Mobile Developer';
let index = 1;

nombreText();
function nombreText() {
    nombreElement.innerText = nombreTxt.slice(0,index);
    index++;
    if(index > nombreTxt.length) {
        index = 1;
    }

    setTimeout(nombreText, 200);
}

//para que el menu se esconda
let ubiacionPrincipal = window.pageYOffset;

window.addEventListener("scroll", ()=>{
    let actualScroll = window.pageYOffset;
    if(ubiacionPrincipal>=actualScroll){
        document.getElementsByTagName("nav")[0].style.top = "0px";
    }else{
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


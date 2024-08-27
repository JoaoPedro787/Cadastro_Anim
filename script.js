import {FirstContentSignIn as fi, SecondContentSignIn as si, FirstContentSignUp as fu, SecondContentSignUp as su} from './conteudo.js';

const FirstContent = document.querySelector(".first_Content");
const SecondContent = document.querySelector(".second_Content");

let Islogin = true;

function updateContent() {
    if (Islogin) {
        FirstContent.innerHTML = fi;
        SecondContent.innerHTML = si;
        Islogin = false;

    } else {
        FirstContent.innerHTML = fu;
        SecondContent.innerHTML = su;
        Islogin = true;
    }
    
    SwapAnim(Islogin);
    ButtonFunction(Islogin);
}

function ButtonFunction(Islogin) {
    const btnSecondContent = document.querySelector('.btnSecondContent');

    btnSecondContent.addEventListener("click", () => {
        updateContent(Islogin);
    });
}

function SwapAnim(Islogin) {
    if (Islogin) {
        // Aplica a animação para a posição inicial
        FirstContent.style.transform = `translateX(${SecondContent.offsetWidth}px)`;
        SecondContent.style.transform = `translateX(${-FirstContent.offsetWidth}px)`;
    } else {
        // Move os elementos de volta para a posição original
        FirstContent.style.transform = `translateX(0)`;
        SecondContent.style.transform = `translateX(0)`;
    }
}

updateContent();
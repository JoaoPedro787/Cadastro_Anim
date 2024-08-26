import {FirstContentSignIn as fi, SecondContentSignIn as si, FirstContentSignUp as fu, SecondContentSignUp as su} from './conteudo.js';

const FirstContent = document.querySelector(".first_Content");
const SecondContent = document.querySelector(".second_Content");
const MainContainer = document.querySelector(".container");

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

    ButtonFunction(Islogin);
    
}


function ButtonFunction(Islogin) {
    const btnSecondContent = document.querySelector('.btnSecondContent');

    btnSecondContent.addEventListener("click",()=>{
        updateContent (Islogin);
        ReverseContent();
    })

}


function ReverseContent(){
    const elements = [... MainContainer.children];
    elements.reverse();

    MainContainer.innerHTML = '';

    elements.forEach(el=>MainContainer.appendChild(el))
}

updateContent();
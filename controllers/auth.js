import { FirstContentSignIn, FirstContentSignUp, SecondContentSignIn, SecondContentSignUp } from '../src/content.js';

const Auth = {
    firstContent: document.querySelector(".first_Content"),
    secondContent: document.querySelector(".second_Content"),
    isSignIn: true,

    init(){
        this.changeContent();
    },

    changeContent() {
        if (this.isSignIn) {
            this.firstContent.innerHTML = FirstContentSignIn;
            this.secondContent.innerHTML = SecondContentSignIn;
        } else {
            this.firstContent.innerHTML = FirstContentSignUp;
            this.secondContent.innerHTML = SecondContentSignUp;
        }
        this.isSignIn = !this.isSignIn;
        this.reloadButton();
    },

    reloadButton(){
        const button = document.querySelector(".btnSecondContent");

        button.addEventListener('click',()=>{
            this.changeContent();
            this.swapAnim()

            // Elementos dentro dos contéudos pais
            this.apperEffect()
        });
    },
    
    swapAnim(){
        if (this.isSignIn){
            this.firstContent.style.transform = `translateX(${this.secondContent.offsetWidth}px)`;
            this.secondContent.style.transform = `translateX(${-this.firstContent.offsetWidth}px)`;
        }else{
            this.firstContent.style.transform = `translateX(0)`;
            this.secondContent.style.transform = `translateX(0)`;
        };

    },

    apperEffect() {
        const arrayFC = Array.from(this.firstContent.children);
        const arraySC = Array.from(this.secondContent.children);
        const allArray = arrayFC.concat(arraySC);
        
        allArray.forEach(el => {
            el.style.opacity = '0';
            el.style.transition = 'opacity 0.5s ease';
    
            el.offsetHeight;
    
            setTimeout(() => {
                el.style.opacity = '1';
            }, 500);
        });
    }
};

export default Auth
// Definindo o conteúdo para Sign In
const FirstContentSignIn = `
    <h1 class="first_Content_Title">Sign in To Developer</h1>
    <nav>
        <ul>
            <li><ion-icon name="logo-facebook"></ion-icon></li>
            <li><ion-icon name="logo-google"></ion-icon></li>
            <li><ion-icon name="logo-linkedin"></ion-icon></li>
        </ul>
    </nav>
    <p class="normalText">Or use your email account</p>
    <div class="inputWrapper">
        <ion-icon name="mail-outline"></ion-icon>
        <input type="text" placeholder="Email">
    </div>
    <div class="inputWrapper">
        <ion-icon name="lock-closed-outline"></ion-icon>
        <input type="text" placeholder="Password">
    </div>
    <p class="forgotText">Forgot your password?</p>
    <button class="btnFirstContent">SIGN IN</button>
`;

const SecondContentSignIn = `
    <h1 class="second_Content_Title">Hello, Friend!</h1>
    <p class="lighterText">Enter your personal details <br> and start journey with us</p>
    <button class="btnSecondContent">SIGN UP</button>
`;

// Definindo o conteúdo para Sign Up
const FirstContentSignUp = `
    <h1 class="first_Content_Title">Create Account</h1>
    <nav>
        <ul>
            <li><ion-icon name="logo-facebook"></ion-icon></li>
            <li><ion-icon name="logo-google"></ion-icon></li>
            <li><ion-icon name="logo-linkedin"></ion-icon></li>
        </ul>
    </nav>
    <p class="normalText">Or use your email account</p>
    <div class="inputWrapper">
        <ion-icon name="person-outline"></ion-icon>
        <input type="text" placeholder="Name">
    </div>
    <div class="inputWrapper">
        <ion-icon name="mail-outline"></ion-icon>
        <input type="text" placeholder="Email">
    </div>
    <div class="inputWrapper">
        <ion-icon name="lock-closed-outline"></ion-icon>
        <input type="text" placeholder="Password">
    </div>
    <p class="forgotText">Forgot your password?</p>
    <button class="btnFirstContent">SIGN UP</button>
`;

const SecondContentSignUp = `
    <h1 class="second_Content_Title">Welcome Back!</h1>
    <p class="lighterText">To keep connected with us <br> please login with your personal info</p>
    <button class="btnSecondContent">SIGN IN</button>
`;

export {FirstContentSignIn,SecondContentSignIn,FirstContentSignUp,SecondContentSignUp}
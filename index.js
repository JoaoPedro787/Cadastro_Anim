import Auth from './controllers/auth.js';
const page = document.body.getAttribute('data-page');

switch(page){
    case 'Auth':
        Auth.init();
};
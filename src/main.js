// Este es el punto de entrada de tu aplicacion

import { myFunction } from './lib/index.js';

myFunction();

const content= document.getElementById('content')

//creando las rutas para entrar a los templates
const routes={
    '/': homepage,
    '/index.html': login,
}

//investigar esta parte:

window.onpopstate=() => {
    content.innerHTML= routes[window.location.pathname];
}

content.innerHTML= routes[window.location.pathname];
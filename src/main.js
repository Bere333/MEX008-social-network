// Este es el punto de entrada de tu aplicacion
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

import { myFunction } from './lib/index.js';
import login from './templates/login.js';
myFunction();

// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs

// Add the Firebase products that you want to use

//Working with DOM
const content = document.getElementById('content')

//creando las rutas para entrar a los templates
const routes = {
    'src/login': login,
}

//investigar esta parte:

window.onpopstate = () => {
    content.innerHTML = routes[window.location.pathname];
}

content.innerHTML = routes[window.location.pathname];
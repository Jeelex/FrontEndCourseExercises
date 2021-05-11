"use strict";

import initialPageLoad from "./initial-page-load.js";
import loadMenu from "./menu.js";
import loadContact from "./contact.js";
import loadHome from "./home.js";

const content = document.getElementById("content");

content.appendChild(initialPageLoad());


const main = document.getElementById("main");
const imgContainer = document.getElementById("img-container");


const homeBtn = document.getElementById("home-btn");
const menuBtn = document.getElementById("menu-btn");
const contactBtn = document.getElementById("contact-btn");
homeBtn.addEventListener('click', loadHome);
menuBtn.addEventListener("click", loadMenu);
contactBtn.addEventListener("click", loadContact);


// const content = document.getElementById("content");
// const home = document.getElementById("home");
// const contact = document.getElementById("contact");

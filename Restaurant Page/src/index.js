"use strict";

import { initialPageLoad } from "./initial-page-load.js";
import { menu } from "./menu.js";

const home = document.getElementById("content");
const menuBtn = document.getElementById("menu-btn");
console.log(menuBtn);

home.appendChild(initialPageLoad());


menuBtn.addEventListener("click", () => {
  console.log("hello");
});

// const visitMenu = () => {
//   console.log("hello");
// };
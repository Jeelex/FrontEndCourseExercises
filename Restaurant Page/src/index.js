"use strict";

import { initialPageLoad } from "./initial-page-load.js";
import { menuPage, loadMenu , menuBtnClicked } from "./menu.js";
// import { homeBtnClicked } from "./home.js";
// import { contactBtnClicked } from "./contact.js";

const content = document.getElementById("content");
// const menuBtn = document.getElementById("menu-btn");

content.appendChild(initialPageLoad());



function loadEvents() {
	const menuBtn = document.getElementById("menu-btn");
	const content = document.getElementById("content");
	const home = document.getElementById("home");
	const contact = document.getElementById("contact");
  const contactBtn = document.getElementById("contact-btn");

//   homeBtn.addEventListener('click', loadHome);
  menuBtn.addEventListener('click', loadMenu);
//   contactBtn.addEventListener('click', loadContact);
}
loadEvents();



// const menuBtnClicked = () => {
	// const content = document.getElementById("content");
	// const home = document.getElementById("home");
	// const contact = document.getElementById("contact");
  // debugger
	// menuBtn.addEventListener("click", () => {
	// 	console.log("menu btn works");
	// 	// content.removeChild(home);
	// 	// content.removeChild(contact);
	// 	content.appendChild(menuPage());
	// });
// };
// menuBtnClicked();



// const contactBtnClicked = () => {
//   // const contactBtn = document.getElementById("contact-btn");
// 	// const content = document.getElementById("content");
// 	// const home = document.getElementById("home");
// 	// const menu = document.getElementById("menu");
  
// 	contactBtn.addEventListener("click", () => {
//     console.log("contact btn works");
// 		// content.removeChild(home);
// 		// content.removeChild(menu);
// 		content.appendChild(contactPage());
// 	});
// };
// contactBtnClicked();



// homeBtnClicked();
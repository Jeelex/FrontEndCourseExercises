"use strict";

const footerGridContainer = document.getElementById("ft-grid-container");
const topNavList = document.getElementById("top-nav-list");
const bottomNavList = document.getElementById("bottom-nav-list");
// const lastNavLink = document.getElementById("last-nav-link");


const navItemsTop = ["Store", "Mac", "iPod", "iPhone", "iPad", "itunes", "Support"];

const navItemsBottom = ["Site Map", "Hot New", "RSS Feeds", "Media info", "Environment", "Job Opportunities", "Contact Us"];

function addTopLink(array, place) {
	for (let i = 0; i < array.length; i++) {
		const html = `<li class="nav-link nav-top-link"><a class="a-links-no-decoration" href="#">${array[i]}</a></li>`;
		place.insertAdjacentHTML("beforeend" , html);
	}
}

function addBottomLink(array, place) {
	for (let i = 0; i < array.length; i++) {
		const html = `<li class="nav-link"><a class="a-links-no-decoration" href="#">${array[i]}</a></li>`;
		place.insertAdjacentHTML("afterbegin" , html);
	}
}

addTopLink(navItemsTop, topNavList);
addBottomLink(navItemsBottom, bottomNavList);

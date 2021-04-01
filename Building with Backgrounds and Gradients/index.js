"use strict";

const footerGridContainer = document.getElementById("ft-grid-container");
const topNavList = document.getElementById("top-nav-list");
const bottomNavList = document.getElementById("bottom-nav-list");

const navItemsTop = [
	"Support",
	"itunes",
	"iPad",
	"iPhone",
	"iPod",
	"Mac",
	"Store",
	"<svg class='apple-logo' xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' viewBox='0 0 172 172'style=' fill:#000000;'><g fill='none' fill-rule='nonzero' stroke='none' stroke-width='1' stroke-linecap='butt' stroke-linejoin='miter' stroke-miterlimit='10' stroke-dasharray='' stroke-dashoffset='0' font-family='none' font-weight='none' font-size='none' text-anchor='none' style='mix-blend-mode: normal'><path d='M0,172v-172h172v172z' fill='none'></path><g fill='#ffffff'><path d='M146.57267,56.10067c-0.7052,0.44147 -17.4924,9.75813 -17.4924,30.41533c0.7912,23.55827 21.18467,31.82 21.5344,31.82c-0.34973,0.44147 -3.0788,11.25453 -11.1628,22.58933c-6.4156,9.76387 -13.5364,19.608 -24.34947,19.608c-10.2856,0 -13.97787,-6.50733 -25.84587,-6.50733c-12.7452,0 -16.35147,6.50733 -26.1096,6.50733c-10.81307,0 -18.46133,-10.3716 -25.22667,-20.04373c-8.7892,-12.6592 -16.25973,-32.5252 -16.52347,-51.6c-0.17773,-10.10787 1.76013,-20.04373 6.67933,-28.4832c6.94307,-11.782 19.33853,-19.78 32.87493,-20.04373c10.3716,-0.34973 19.60227,7.1208 25.93187,7.1208c6.06587,0 17.4064,-7.1208 30.2376,-7.1208c5.5384,0.00573 20.30747,1.67413 29.45213,15.738zM86.00573,38.34453c-1.84613,-9.23067 3.2508,-18.46133 7.998,-24.34947c6.06587,-7.1208 15.64627,-11.954 23.908,-11.954c0.52747,9.23067 -2.81507,18.2836 -8.7892,24.87693c-5.36067,7.1208 -14.59133,12.48147 -23.1168,11.42653z'></path></g></g></svg>",
];

const navItemsBottom = ["Site Map", "Hot New", "RSS Feeds", "Media info", "Environment", "Job Opportunities", "Contact Us"];

function addTopLink(array, place) {
	for (let i = 0; i < array.length; i++) {
		const html = `<li class="nav-link nav-top-link"><a class="a-links-no-decoration" href="#">${array[i]}</a></li>`;
		place.insertAdjacentHTML("afterbegin", html);
	}
}

function addBottomLink(array, place) {
	for (let i = 0; i < array.length; i++) {
		const html = `<li class="nav-link"><a class="a-links-no-decoration" href="#">${array[i]}</a></li>`;
		place.insertAdjacentHTML("afterbegin", html);
	}
}

addTopLink(navItemsTop, topNavList);
addBottomLink(navItemsBottom, bottomNavList);

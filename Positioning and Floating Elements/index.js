"use strict";

const footerGridContainer = document.getElementById("ft-grid-container");
const footerList1 = document.getElementById("ft-list-1");
const footerList2 = document.getElementById("ft-list-2");
const footerList3 = document.getElementById("ft-list-3");
const footerList4 = document.getElementById("ft-list-4");
const footerList5 = document.getElementById("ft-list-5");

const news = ["World", "Coronavirus", "U.S.", "Politics", "New York", "Business", "Tech", "Science", "Sports", "Obituaries", "Today's Paper", "Corrections"];

const opinion = ["Today's Opinion", "Op-Ed Columnists", "Editorials", "Op-Ed Contributors", "Letters", "Sunday Review", "Video: Opinion"];

const arts = ["Today's Arts", "Art & Design", "Books", "Dance", "Movies", "Music", "Pop Culture", "Television", "Theater", "Video: Arts"];

const living = ["At Home", "Automobiles", "Games", "Education", "Food", "Health", "Jobs", "Love", "Magazine", "Parenting", "Real Estate", "Recipes", "Style", "T Magazine", "Travel"];

const more = [
	"Reader Center",
	"Wirecutter",
	"Live Events",
	"The Learning Network",
	"Tools & Services",
	"Multimedia",
	"Photography",
	"Video",
	"Newsletters",
	"TimesMachine",
	"NYT Store",
	"Times Journeys",
	"Manage My Account",
	"NYTLicensing",
];

function addCategoryLink(array, list) {
    for (let i = 0; i < array.length; i++) {
        const html = `<li class="footer-category-link"><a class="a-links-no-decoration" href="#">${array[i]}</a></li>`;
		list.insertAdjacentHTML("beforeend", html);
	}
}

addCategoryLink(news, footerList1);
addCategoryLink(opinion, footerList2);
addCategoryLink(arts, footerList3);
addCategoryLink(living, footerList4);
addCategoryLink(more, footerList5);
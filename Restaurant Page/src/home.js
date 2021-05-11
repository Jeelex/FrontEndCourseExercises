function homePage() {
	const element = document.createElement("div");
	element.setAttribute("id", "img-container");

	element.innerHTML = `
  <img class="img-fluid mt-5" src="../images/restaurant.jpg" alt="Restaurant">
  
  <p class="text mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro facere ea deleniti perspiciatis odio consectetur!</p>
`;

	return element;
}

const loadHome = () => {
	const main = document.getElementById("main");
	const imgContainer = document.getElementById("img-container");
	const homeBtn = document.getElementById("home-btn");
	const menuBtn = document.getElementById("menu-btn");
	const contactBtn = document.getElementById("contact-btn");

	contactBtn.classList.remove("active");
	menuBtn.classList.remove("active");
	homeBtn.classList.add("active");
	main.removeChild(imgContainer);
	main.appendChild(homePage());

	console.log("home btn works");
	return "home btn works";
};

export default loadHome;

function contactPage() {
	const element = document.createElement("div");
	element.setAttribute("id", "img-container");

	element.innerHTML = `
    <img class="img-fluid mt-5" src="../images/contact.jpg" alt="Contact">
    
    <p class="text mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro facere ea deleniti perspiciatis odio consectetur!</p>
  `;

	return element;
}

const loadContact = () => {
	const main = document.getElementById("main");
	const imgContainer = document.getElementById("img-container");
	const homeBtn = document.getElementById("home-btn");
	const menuBtn = document.getElementById("menu-btn");
	const contactBtn = document.getElementById("contact-btn");

	homeBtn.classList.remove("active");
	menuBtn.classList.remove("active");
	contactBtn.classList.add("active");
	main.removeChild(imgContainer);
	main.appendChild(contactPage());

	console.log("contact btn works");
	return "contact btn works";
};

export default loadContact;

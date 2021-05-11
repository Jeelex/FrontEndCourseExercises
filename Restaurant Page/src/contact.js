function contactPage() {
	const element = document.createElement("div");
	element.setAttribute("id", "current-section");

	element.innerHTML = `
    <h1 class="title">My Restaurant</h1>

    <ul class="nav nav-tabs justify-content-end">
      <li class="nav-item">
        <a class="nav-link" id="home-btn" aria-current="page" href="#">Home</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link" id="menu-btn" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Menu</a>
      </li>
      <li class="nav-item">
        <a class="nav-link active" id="contact-btn" href="#">Contact Us</a>
      </li>
    </ul>
    
    <img class="img-fluid mt-5" src="../images/contact.jpg" alt="Contact us">
    
    <p class="text mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro facere ea deleniti perspiciatis odio consectetur!</p>
  `;

	return element;
}

// const contactBtnClicked = () => {
// 	const contactBtn = document.getElementById("contact-btn");
// 	const content = document.getElementById("content");
// 	const home = document.getElementById("home");
// 	// const menu = document.getElementById("menu");

// 	contactBtn.addEventListener("click", () => {
// 		console.log("contact btn works");
// 		content.removeChild(home);
// 		// content.removeChild(menu);
// 		content.appendChild(contactPage());
// 	});
// };

const loadContact = () => {
	const currentSection = document.getElementById("current-section");
	console.log("contact btn works");
	content.removeChild(currentSection);
	// content.removeChild(contact);

	content.appendChild(contactPage());
};

export { loadContact };

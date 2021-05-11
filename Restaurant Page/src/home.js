function homePage() {
	const element = document.createElement("div");
	element.setAttribute("id", "home");

	element.innerHTML = `
    <h1 class="title">My Restaurant</h1>

    <ul class="nav nav-tabs justify-content-end">
      <li class="nav-item">
        <a class="nav-link active" id="home-btn" aria-current="page" href="#">Home</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link" id="menu-btn" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Menu</a>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#">Action</a></li>
          <li><a class="dropdown-item" href="#">Another action</a></li>
          <li><a class="dropdown-item" href="#">Something else here</a></li>
          <li><hr class="dropdown-divider"></li>
          <li><a class="dropdown-item" href="#">Separated link</a></li>
        </ul>
      </li>
      <li class="nav-item">
        <a class="nav-link" id="contact-btn" href="#">Contact Us</a>
      </li>
    </ul>
    
    <img class="img-fluid mt-5" src="../images/menu.jpg" alt="Restaurant">
    
    <p class="text mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro facere ea deleniti perspiciatis odio consectetur!</p>
  `;

	return element;
}

const homeBtnClicked = () => {
	const homeBtn = document.getElementById("home-btn");
	const content = document.getElementById("content");
	const home = document.getElementById("home");
	// const menu = document.getElementById("menu");

	homeBtn.addEventListener("click", () => {
		console.log("home btn works");
		// content.removeChild(home);
		// content.removeChild(menu);
		content.appendChild(homePage());
	});
};

export { homePage, homeBtnClicked };
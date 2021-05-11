export function initialPageLoad() {
	const element = document.createElement("div");
	element.setAttribute("id", "current-section");

	element.innerHTML = `
    <h1 class="title">My Restaurant</h1>

    <ul class="nav nav-tabs justify-content-end">
      <li class="nav-item">
        <a class="nav-link active" id="home-btn" aria-current="page" href="#">Home</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link" id="menu-btn" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Menu</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" id="contact-btn" href="#">Contact Us</a>
      </li>
    </ul>
    
    <img class="img-fluid mt-5" src="../images/restaurant.jpg" alt="Restaurant">
    
    <p class="text mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro facere ea deleniti perspiciatis odio consectetur!</p>
  `;

	return element;
}

export default initialPageLoad;
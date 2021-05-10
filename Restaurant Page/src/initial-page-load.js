export function initialPageLoad() {
	const element = document.createElement("div");

	element.innerHTML = `
                  <h1>My Restaurant</h1>
                  
                  <img src="../images/shawn-ang-nmpW_WwwVSc-unsplash.jpg" alt="Restaurant exterior">
                  
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro facere ea deleniti perspiciatis odio consectetur!</p>
  `;

	return element;
}

export default initialPageLoad;
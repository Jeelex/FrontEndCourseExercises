(()=>{"use strict";const n=()=>{console.log("menu btn works"),content.removeChild(home),content.appendChild(function(){const n=document.createElement("div");return n.setAttribute("id","menu"),n.innerHTML='\n    <h1 class="title">My Restaurant</h1>\n\n    <ul class="nav nav-tabs justify-content-end">\n      <li class="nav-item">\n        <a class="nav-link" id="home-btn" aria-current="page" href="#">Home</a>\n      </li>\n      <li class="nav-item dropdown">\n        <a class="nav-link active" id="menu-btn" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Menu</a>\n        <ul class="dropdown-menu">\n          <li><a class="dropdown-item" href="#">Action</a></li>\n          <li><a class="dropdown-item" href="#">Another action</a></li>\n          <li><a class="dropdown-item" href="#">Something else here</a></li>\n          <li><hr class="dropdown-divider"></li>\n          <li><a class="dropdown-item" href="#">Separated link</a></li>\n        </ul>\n      </li>\n      <li class="nav-item">\n        <a class="nav-link" id="contact-btn" href="#">Contact Us</a>\n      </li>\n    </ul>\n    \n    <img class="img-fluid mt-5" src="../images/menu.jpg" alt="menu page">\n    \n    <p class="text mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro facere ea deleniti perspiciatis odio consectetur!</p>\n  ',n}())};document.getElementById("content").appendChild(function(){const n=document.createElement("div");return n.setAttribute("id","home"),n.innerHTML='\n    <h1 class="title">My Restaurant</h1>\n\n    <ul class="nav nav-tabs justify-content-end">\n      <li class="nav-item">\n        <a class="nav-link active" id="home-btn" aria-current="page" href="#">Home</a>\n      </li>\n      <li class="nav-item dropdown">\n        <a class="nav-link dropdown-toggle" id="menu-btn" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Menu</a>\n        <ul class="dropdown-menu">\n          <li><a class="dropdown-item" href="#">Action</a></li>\n          <li><a class="dropdown-item" href="#">Another action</a></li>\n          <li><a class="dropdown-item" href="#">Something else here</a></li>\n          <li><hr class="dropdown-divider"></li>\n          <li><a class="dropdown-item" href="#">Separated link</a></li>\n        </ul>\n      </li>\n      <li class="nav-item">\n        <a class="nav-link" id="contact-btn" href="#">Contact Us</a>\n      </li>\n    </ul>\n    \n    <img class="img-fluid mt-5" src="../images/restaurant.jpg" alt="Restaurant">\n    \n    <p class="text mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro facere ea deleniti perspiciatis odio consectetur!</p>\n  ',n}()),function(){const e=document.getElementById("menu-btn");document.getElementById("content"),document.getElementById("home"),document.getElementById("contact"),document.getElementById("contact-btn"),e.addEventListener("click",n)}()})();
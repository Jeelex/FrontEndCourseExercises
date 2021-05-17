const slides = document.getElementsByClassName("carousel-item");
let slidePosition = 0;
const totalSlides = slides.length;

const navCircle1 = document.getElementById("carousel-nav-1");
const navCircle2 = document.getElementById("carousel-nav-2");
const navCircle3 = document.getElementById("carousel-nav-3");

document.getElementById("carousel-button-next").addEventListener("click", moveToNextSlide);
document.getElementById("carousel-button-prev").addEventListener("click", moveToPrevSlide);

navCircle1.addEventListener("click", () => {
	return moveToSlide(0);
});
navCircle2.addEventListener("click", () => {
	return moveToSlide(1);
});
navCircle3.addEventListener("click", () => {
	return moveToSlide(2);
});

function moveToNextSlide() {
	hideAllSlides();

	if (slidePosition === totalSlides - 1) {
		slidePosition = 0;
	} else {
		slidePosition++;
	}
	slides[slidePosition].classList.add("carousel-item-visible");
	displaySlidePosition(slidePosition);
}

function moveToPrevSlide() {
	hideAllSlides();

	if (slidePosition === 0) {
		slidePosition = totalSlides - 1;
	} else {
		slidePosition--;
	}
	slides[slidePosition].classList.add("carousel-item-visible");
	displaySlidePosition(slidePosition);
}

function hideAllSlides() {
	for (let slide of slides) {
		slide.classList.remove("carousel-item-visible");
		slide.classList.add("carousel-item-hidden");
	}
}

function moveToSlide(slideNumber) {
    switch (slideNumber) {
        case 0:
            // removeNavCircleColors();
			hideAllSlides();
			slides[0].classList.add("carousel-item-visible");
			break;
		case 1:
			hideAllSlides();
			slides[1].classList.add("carousel-item-visible");
			break;
		case 2:
			hideAllSlides();
			slides[2].classList.add("carousel-item-visible");
			break;
	}
}

function displaySlidePosition(position) {
	switch (position) {
		case 0:
			navCircle1.classList.add("current-slide-position");
			navCircle2.classList.remove("current-slide-position");
			navCircle3.classList.remove("current-slide-position");
			break;
		case 1:
			navCircle2.classList.add("current-slide-position");
			navCircle1.classList.remove("current-slide-position");
			navCircle3.classList.remove("current-slide-position");
			break;
		case 2:
			navCircle3.classList.add("current-slide-position");
			navCircle1.classList.remove("current-slide-position");
			navCircle2.classList.remove("current-slide-position");
			break;
	}
}

function removeNavCircleColors() {
	navCircle1.classList.remove("current-slide-position");
	navCircle2.classList.remove("current-slide-position");
	navCircle3.classList.remove("current-slide-position");
    return;
}

// TODO It should automatically move forward every 5 seconds.
//Add a timeout which advances the slides every 5 seconds

//TODO little navigation circles at the bottom that indicate which slide you are on (and they should be click-able to advance to that particular slide).
//Make a horizontal series of empty circles with CSS immediately below the slideshow. Each circle represents a slide, so whenever a new slide is activated, its corresponding circle gets filled in so you can tell where in the show you are. Make each circle link to that particular slide, so you can click on the circle and it will jump to that slide.

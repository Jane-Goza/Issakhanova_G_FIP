(() => {
  const button = document.querySelector("#button"),
 			 burgerCon = document.querySelector("#burgerCon"),
			 navLinks = burgerCon.querySelectorAll("a")

	//functions go in the middle (our app instructions)
	function showNavigation() {
		//turn the button for some UX microinteractivity
	button.classList.toggle("expanded");

	//show the mobile navigation
	burgerCon.classList.toggle("slideToggle");
	}


	// event handling hoes at the bottom
	button.addEventListener("click", showNavigation);

	for (link of navLinks) {
		link.addEventListener("click", showNavigation);
	}
})();




let slideIndex = 1;

showSlides(slideIndex);

function nextSlide() {
    showSlides(slideIndex += 1);
}
function previousSlide() {
    showSlides(slideIndex -= 1);
}
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("item");

    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }

    for (let slide of slides) {
        slide.style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";
}

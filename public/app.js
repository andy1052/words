/* Front end logic */


//	Slideshow logic, automatic logic with dots and buttons:
let slideIndex = 0;
showSlides();

//	Next/previous controls:
// function plusSlides(n) {
// 	let slides = document.getElementsByClassName("mySlides");
// 	//let dots = document.getElementsByClassName("dot");
// 	slideIndex += n;
// 	if (slideIndex > slides.length) {slideIndex = 1}
// 		else if (slideIndex < 1) {slideIndex = slides.length}

// 	for (let i = 0; i < slides.length; i++) {
// 		slides[i].style.display = "none";
// 	}

// 	//for (let i = 0; i < dots.length; i++) {
// 	//	dots[i].className = dots[i].className.replace(" active", "");
// 	}

// 	slides[slideIndex-1].style.display = "block";
// 	//dots[slideIndex-1].className += " active";
// }

// //	thumbnail image controls:
// function currentSlide(index) {
// 	let slides = document.getElementsByClassName("mySlides");
// 	let dots = document.getElementsByClassName("dot");

// 	if (index > slides.length) {index = 1}
// 		else if (index < 1) {index = slides.length}

// 	for (let i = 0; i < slides.length; i++) {
// 		slides[i].style.display = "none";
// 	}

// 	for (let i = 0; i < dots.length; i++) {
// 		dots[i].className = dots[i].className.replace(" active", "");
// 	}

// 	slides[slideIndex-1].style.display = "block";
// 	dots[slideIndex-1].className += " active";
// }

function showSlides(n) {
	let i;
	let slides = document.getElementsByClassName("mySlides");
//	let dots = document.getElementsByClassName("dot");

		for(i = 0; i < slides.length; i++) {
			slides[i].style.display = "none";
			}

		slideIndex++;

		if (slideIndex > slides.length) {slideIndex = 1}	

	//	for(i = 0; i < dots.length; i++) {
	//		dots[i].className = dots[i].className.replace(" active", "");
	//		}

//console.log(slideIndex-1); // this is index is -1 because it's cycling through the array 0, 1, 2, indexes. 

		slides[slideIndex-1].style.display = "block";
	//	dots[slideIndex-1].className += " active";

	setTimeout(showSlides, 2000);

 };




//	Automatic Slideshow Logic
// let slideIndex = 0;

// showSlides();

// function showSlides() {
// 	let i;
// 	let slides = document.getElementsByClassName("mySlides");

// 	for(i = 0; i < slides.length; i++) {
// 		slides[i].style.display = "none";
// 	}

// 	slideIndex++;

// 	if (slideIndex > slides.length) {slideIndex = 1}
// 		slides[slideIndex-1].style.display = "block";

// 	setTimeout(showSlides, 2000);
// };
//End of slideshow logic
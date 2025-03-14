
// // currentSlideIndex variable is initally set to 0 as javascript array starts from index 0
// let currentSlideIndex = 0;

// function showSlide(index) {
//   // slides and dots will store an array of elments with given class. Enabling us access to DOM elements and manipulating styles to those elements
//   const slides = document.getElementsByClassName("carousel-slide");
//   const dots = document.getElementsByClassName("dot");


//   // A condition to reset to first slide when user clicks next button on the last slide
//   if (index >= slides.length) {
//     currentSlideIndex = 0;
//   }

//   // A condition to reset to last slide when user clicks previous button on the first slide
//   if (index < 0) {
//     currentSlideIndex = slides.length - 1;
//   }

//   // Looping through the slides to hide unwanted slides from the DOM
//   for (let i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }

//   // Looping through the dots to remove class from the dots
//   for (let i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace("dot-active", "");
//   }

//   // To show only one slide with current index by replacing display property
//   slides[currentSlideIndex].style.display = "block";

//   // To add class to active dots, enabling us to add specific styles to active dot. Refer line no. 91 in style.css
//   dots[currentSlideIndex].className += " dot-active";
// }

// // A function responsible for moving slide by n number
// function changeSlide(n) {
//   showSlide((currentSlideIndex += n));
// }

// // A function to jump on to particular slide
// function currentSlide(n) {
//   showSlide((currentSlideIndex = n));
// }




// // Initial setup
// showSlide(currentSlideIndex);

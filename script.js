let currentSlideIndex = 0;
let interval;

function showSlide(index){
const slides = document.getElementsByClassName("carousel-slides");
console.log(slides);

const dots = document.getElementsByClassName("dot");
console.log(dots);

//A condition to reset to first slide when user clicks next button on the last slide
if(index >= slides.length) {
    currentSlideIndex=0
}
//A condition to reset to last slide when user clicks next button on the 1st slide
if(index <0){
    currentSlideIndex = slides.length-1;
}


// Looping through the slides to hide unwanted slides from the DOM
for(let i=0; i<slides.length;i++){
    slides[i].style.display="none";
}

// Looping through the dots to remove class from the dots
   for (let i = 0; i < dots.length; i++) {
     dots[i].className = dots[i].className.replace("dot-active", "");
  }

//// To show only one slide with current index by replacing display property
slides[currentSlideIndex].style.display = "block";
//To add class to active dots, enabling us to add specific styles to active dot
dots[currentSlideIndex].className += " dot-active";

// Assigning current image src to img tag in popup
const popupimg =document.getElementById("popup-image");
popupimg.src =slides[currentSlideIndex].src;

}

function changeSlide(n) {
    showSlide((currentSlideIndex +=n));
    }
   // A function to jump on to particular slide
    function currentSlide(n){
        showSlide((currentSlideIndex = n));
    }

    function resetinterval(){
        clearInterval(interval);
        interval = setInterval(() => {
            changeSlide(1);
        }, 1000);
    }

    function openpopup (){
        clearInterval(interval); //stop the carosule
        const model = document.getElementById("imagePopup");
        model.style.display="flex"

    }

    function closepopup(){
        const model =document.getElementById("imagePopup");
        model.style.display="none"
        resetinterval();// Resume the carousel
       
        
    }

showSlide(currentSlideIndex);
resetinterval();//to start an automatic carousel
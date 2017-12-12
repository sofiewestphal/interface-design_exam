try {
  setCarouselHeight();

   var aCarouselBtns = document.querySelectorAll('.carousel-btns a');

   for (var i = 0; i < aCarouselBtns.length; i++) {
      var btnCarousel = aCarouselBtns[i];
      btnCarousel.addEventListener('click', function(e){
         if(e.currentTarget.classList.contains('previousBtn')){
            goToPrevImg();
         }
         if(e.currentTarget.classList.contains('nextBtn')){
            goToNextImg();
         }
      });
   }
   
} catch (err) {
   console.log("Error in carousel.js -> No carousel on this page...")
}

function goToPrevImg(){
   var elemActiveImage = document.querySelector('.image-carousel .active-image');
   if(elemActiveImage.previousElementSibling != null && elemActiveImage.previousElementSibling.classList.contains('carousel-image')){
      elemActiveImage.previousElementSibling.classList.add('active-image');
      elemActiveImage.previousElementSibling.classList.remove('previous-image');
      elemActiveImage.classList.add('upcoming-image');
      elemActiveImage.classList.remove('active-image');
   }
}

function goToNextImg(){
   var elemActiveImage = document.querySelector('.image-carousel .active-image');
   if(elemActiveImage.nextElementSibling != null && elemActiveImage.nextElementSibling.classList.contains('carousel-image')){
      elemActiveImage.nextElementSibling.classList.add('active-image');
      elemActiveImage.nextElementSibling.classList.remove('upcoming-image');
      elemActiveImage.classList.add('previous-image');
      elemActiveImage.classList.remove('active-image');
   }
}

function setCarouselHeight(){
   //var iAboutEventBoxHeight = document.querySelector('#boxAboutEvent').clientHeight;
   var iWidth = document.querySelector('.image-carousel .carousel-images').clientWidth;
   var iAspectWidth = 7;
   var iAspectHeight = 3;
   var iRatio  = iWidth / iAspectWidth;
   var iHeight = iRatio * iAspectHeight;
   document.querySelector('.image-carousel .carousel-images').style.height = iHeight + "px";
}
const images = [
  "https://source.unsplash.com/featured/?mountains",
  "https://source.unsplash.com/featured/?hiking",
  "https://source.unsplash.com/featured/?kayak",
  "https://source.unsplash.com/featured/?forest",
  "https://source.unsplash.com/featured/?mountain",
  "https://source.unsplash.com/featured/?trail",
  "https://source.unsplash.com/featured/?outdoors",
  "https://source.unsplash.com/featured/?norway",
];
const randomIndex = Math.floor(images.length * Math.random());
const cardImages = document.getElementsByClassName("card-image");

//   for(let i =0;i<cardImages.length; i++){
//       const div = document.createElement('img')
//       div.src= images[randomIndex];
//       div.alt="image"
//       cardImages[i].append(div)
//       break
//   }

//   $('div.card-image').each ->
//     random_image_index = Math.floor(images.length * Math.random())
//     $(this).css('background-image', 'url(' + images[random_image_index] + ')')

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

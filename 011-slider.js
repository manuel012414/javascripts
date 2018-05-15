var slider = document.getElementById('slider');
var sliderImages = slider.getElementsByClassName('slider-img');
var nextButton = docment.getElementById('next-bnt')[0];
var previousButton = document.getElementById('previous-btn')[0];

var index = 0;
var nImages = sliderImages.length;

nextButton.addEventListener("click", next);
previousButton.addEventListener("click", previous);

//Ocultamos todas las imágenes
hideAllImages(sliderImages);

//Cantidad de imágenes
console.log(sliderImages.length);

//Mostramos la primera imagen
showImage(index);

function hideAllImages(sliderImages) {
  [].forEach.call(sliderImages, function (imageElement) {imageElement.style.display = "none";
  });
}

function showImage(index) {
  sliderImages[index].style.display = "block";
}

function hideImage(index) {
  sliderImage[index].style.display = "none";
}

function next() {
  hideImage(index):
  if (index == 0) {
    index = nImages - 1;
  } else {
    index = (index - 1);
  }
  showImage(index);
}

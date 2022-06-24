//path to floder with images
const imagePath = "../storage/sliderImages/";
//slides data
const images = ['1.jpg', '2.jpg', '3.jpg'],
headers = ['Quisque vulputate mi consectetur', 'Pellentesque eleifend, dui sit amet', 'Nam rhoncus nec nibh sit amet'],
secondHeaders = ['Quisque vulputate mi consectetur', 'Mauris diam fermentum massa.', 'Donec mauris dolor, suscipit a felis auctor.'],
descriptions = ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere quis mi a fermentum. Nulla vel fringilla quam. Quisque a nulla euismod, finibus est eu, molestie lectus. Nam rhoncus nec nibh sit amet rhoncus. Donec mauris dolor, suscipit a felis auctor, dignissim imperdiet mi. Nulla facilisi. Praesent lobortis in purus in bibendum. Pellentesque eleifend, dui sit amet scelerisque hendrerit, mauris diam fermentum massa, et posuere nisl orci sed mi. In leo libero, sollicitudin eu felis in, egestas ultrices dui. Integer sed libero egestas, faucibus lectus ac, consectetur enim.',
'Nulla facilisi. Praesent lobortis in purus in bibendum. Pellentesque eleifend, dui sit amet scelerisque hendrerit, mauris diam fermentum massa, et posuere nisl orci sed mi. In leo libero, sollicitudin eu felis in, egestas ultrices dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere quis mi a fermentum. Nulla vel fringilla quam. Quisque a nulla euismod, finibus est eu, molestie lectus. Nam rhoncus nec nibh sit amet rhoncus. Donec mauris dolor, suscipit a felis auctor, dignissim imperdiet mi.',
'Quisque a nulla euismod, finibus est eu, molestie lectus. Nam rhoncus nec nibh sit amet rhoncus. Donec mauris dolor, suscipit a felis auctor, dignissim imperdiet mi. Nulla facilisi. Praesent lobortis in purus in bibendum. Pellentesque eleifend, dui sit amet scelerisque hendrerit, mauris diam fermentum massa, et posuere nisl orci sed mi. In leo libero, sollicitudin eu felis in, egestas ultrices dui. Lorem ipsum dolor sit amet, sed posuere quis mi a fermentum. Nulla vel fringilla quam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere quis mi a fermentum. Nulla vel fringilla quam.'
];

//get components
const slider = document.getElementById("slider"),
sliderHeader = document.getElementById("sliderHeader"),
sliderSecondHeader = document.getElementById("sliderSecondHeader"),
sliderDescription = document.getElementById("sliderDescription"),
dots = document.getElementById("sliderDots");

for(let i=0; i<images.length; i++){
   //add images to slider
    const image = document.createElement("img");
    image.src = imagePath+images[i];
    image.className = "slideImage";
    slider.appendChild(image);

    //create dots
    const dot = document.createElement("div");
    dot.className = "dot";
    dots.appendChild(dot);

    //create headers
    const header = document.createElement("div");
    header.textContent = headers[i];
    header.className = "slideHeader";
    sliderHeader.appendChild(header);

    //create second headers
    const secondHeader = document.createElement("div");
    secondHeader.textContent = secondHeaders[i];
    secondHeader.className = "slideSecondHeader";
    sliderSecondHeader.appendChild(secondHeader);

    //create descriptions
    const description = document.createElement("div");
    description.textContent = descriptions[i];
    description.className = "slideDescription";
    sliderDescription.appendChild(description);
}


let current = 0,
slides = document.getElementsByClassName("slideImage"),
slideHeaders = document.getElementsByClassName("slideHeader"),
slideSecondHeaders = document.getElementsByClassName("slideSecondHeader"),
slideDescriptions = document.getElementsByClassName("slideDescription");
pushSliderContent(current);

//change slides
setInterval(function() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.opacity = 0;
    slideHeaders[i].style.height = "0px"; 
    slideSecondHeaders[i].style.height = "0px";
    slideDescriptions[i].style.height = "0px"; 

  }
  current = (current != slides.length - 1) ? current + 1 : 0;
  slides[current].style.opacity = 1;
  
  pushSliderContent(current);
}, 5000);

function pushSliderContent(current){
 //animate header
  slideHeaders[current].style.height = "auto";
  const headerHeight = slideHeaders[current].clientHeight;
  sliderHeader.style.height = headerHeight+"px";

  //animate second header
  slideSecondHeaders[current].style.height = "auto";
  const secondHeaderHeight = slideSecondHeaders[current].clientHeight;
  sliderSecondHeader.style.height = secondHeaderHeight+"px";

  //animate description
  slideDescriptions[current].style.height = "auto";
 const descriptionHeight = slideDescriptions[current].clientHeight;
  sliderDescription.style.height = descriptionHeight+"px";

  //animate dots
  const childDiv = sliderDots.getElementsByTagName('div');
  for(let i=0; i < slides.length; i++){
    childDiv[i].classList.remove("dotActive");
  }
  childDiv[current].classList.add("dotActive");
}

// resize screen adjustment
let windowWidth = window.innerWidth;
setInterval(function() {
  const checkWidth = window.innerWidth;
  if(windowWidth != checkWidth){
    windowWidth = window.innerWidth;
    for (let i = 0; i < slides.length; i++) {
      slideHeaders[i].style.height = "0px"; 
      slideSecondHeaders[i].style.height = "0px";
      slideDescriptions[i].style.height = "0px"; 
    }
    pushSliderContent(current);
  }
}, 500);


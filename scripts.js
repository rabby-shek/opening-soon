//  // Background slider logic
//     let index = 0;
//     const sliderTrack = document.getElementById('sliderTrack');
//     const totalSlides = 6;

//     setInterval(() => {
//       index = (index + 1) % totalSlides;
//       sliderTrack.style.transform = `translateX(-${index * 100}vw)`;
//     }, 3000);

   

let index = 0;
const sliderTrack = document.getElementById('sliderTrack');
const slides = sliderTrack.children;
const totalSlides = slides.length;

// Clone the first slide and append it
const firstClone = slides[0].cloneNode(true);
sliderTrack.appendChild(firstClone);

// Update total count to include the clone
const actualSlides = totalSlides + 1;

function moveSlide() {
  index++;
  sliderTrack.style.transition = 'transform 0.5s ease-in-out';
  sliderTrack.style.transform = `translateX(-${index * 100}vw)`;

  // Reset back to original slide when clone is reached
  if (index === totalSlides) {
    setTimeout(() => {
      sliderTrack.style.transition = 'none';
      sliderTrack.style.transform = `translateX(0vw)`;
      index = 0;
    }, 500); // Matches the transition time
  }
}

setInterval(moveSlide, 3000);

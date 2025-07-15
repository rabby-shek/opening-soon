 // Background slider logic
    let index = 0;
    const sliderTrack = document.getElementById('sliderTrack');
    const totalSlides = 3;

    setInterval(() => {
      index = (index + 1) % totalSlides;
      sliderTrack.style.transform = `translateX(-${index * 100}vw)`;
    }, 3000);

   


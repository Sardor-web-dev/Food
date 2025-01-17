const tabheader__items = document.querySelectorAll('.tabheader__item');
const tabcontents = document.querySelectorAll('.tabcontent');

tabheader__items.forEach((tabheader__item, index) => {
    tabheader__item.onclick = () => {
        tabheader__items.forEach((tab) => tab.classList.remove('tabheader__item_active'));

        tabheader__item.classList.add('tabheader__item_active');

        showSlide(index);
    }
});

function showSlide(index) {
    tabcontents.forEach((tabcontent) => tabcontent.classList.add('hide'));
    tabcontents[index].classList.remove('hide');
}

showSlide(0);

  const offerSlides = document.querySelectorAll('.offer__slide')
  const Current = document.getElementById('current')
  const Total = document.getElementById('total')
  const prevButton = document.querySelector('.offer__slider-prev')
  const nextButton = document.querySelector('.offer__slider-next')

  let currentValue = 0;     

  Total.innerText = offerSlides.length.toString().padStart(2,'0')

  const updateSlides = () => {
    offerSlides.forEach((slide, index) => {
      slide.style.display = index === currentValue ? 'block' : 'none'
    })
    Current.innerText = (currentValue + 1).toString().padStart(2, '0')
  }

  prevButton.onclick = () => {
    currentValue = (currentValue - 1 + offerSlides.length) % offerSlides.length
    updateSlides();
  }
  nextButton.onclick = () => {
    currentValue = (currentValue + 1) % offerSlides.length
    updateSlides();
  }



  updateSlides();


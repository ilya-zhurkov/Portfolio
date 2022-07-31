$(document).ready(function(){

    const owl = $('#work__slider');

    owl.owlCarousel({
        items: 1,
        loop: true,
        dots: true,
        autoplay: true,
        autoplayTimeout: 6000,
        smartSpeed: 500,
    })

    const prev = $('#sliderPrev')
    const next = $('#sliderNext')

    prev.click(function(){
        owl.trigger('prev.owl.carousel')
    })
    next.click(function(){
        owl.trigger('next.owl.carousel')
    })
  });

  const navIcon = document.querySelector('.nav-icon');
  const nav = document.querySelector('.nav');
  
  navIcon.addEventListener('click', function () {
      this.classList.toggle('nav-icon--active');
      nav.classList.toggle('nav--active');
  });
  
  // Находим ссылки внутри мобильной навигации
  const navLinks = document.querySelectorAll('.nav a');
  
  // Обходим ссылки методом forEach
  navLinks.forEach(function (item) {
      // Для каждой ссылки добавляем прослушку по событию "Клик"
      item.addEventListener('click', function () {
          navIcon.classList.remove('nav-icon--active'); // Убираем активный класс у иконки моб. навигации
          nav.classList.remove('nav--active'); // Убираем активный класс у блока моб. навигации
      });
  });

//   Accodeon

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");

        var panel = this.nextElementSibling;
        if (panel.style.maxHeight){
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}
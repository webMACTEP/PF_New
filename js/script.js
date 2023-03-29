jQuery(document).ready(function ($) {


   const slides = document.querySelectorAll('.slide');
   slides[0].classList.add('active');

   const prevButton = document.querySelector('.slider-control-prev');
   const nextButton = document.querySelector('.slider-control-next');

   function nextSlide() {
      const currentSlide = document.querySelector('.slide.active');
      const currentIndex = Array.from(slides).indexOf(currentSlide);
      const nextIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
      const nextSlide = slides[nextIndex];

      gsap.timeline()
         .to(currentSlide, { opacity: 0 })
         .to(nextSlide, { opacity: 1 }, '-=0.5')

      currentSlide.classList.remove('active');
      nextSlide.classList.add('active');

      if (nextIndex === 0) {
         animateSlide1();
      }
      if (nextIndex === 1) {
         animateSlide2();
      }
      if (nextIndex === 2) {
         animateSlide3();
      }
   }

   function prevSlide() {
      const currentSlide = document.querySelector('.slide.active');
      const currentIndex = Array.from(slides).indexOf(currentSlide);
      const prevIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
      const prevSlide = slides[prevIndex];

      gsap.timeline()
         .to(currentSlide, { opacity: 0 })
         .to(prevSlide, { opacity: 1 }, '-=0.5')

      currentSlide.classList.remove('active');
      prevSlide.classList.add('active');

      if (prevIndex === 0) {
         animateSlide1();
      }
      if (prevIndex === 1) {
         animateSlide2();
      }
      if (prevIndex === 2) {
         animateSlide3();
      }
   }


   nextButton.addEventListener('click', nextSlide);
   prevButton.addEventListener('click', prevSlide);

   //setInterval(nextSlide, 5000);

   function animateSlide1() {
      const slideContent = document.querySelector('.slide-1 .slide-content');
      const slideTitle = slideContent.querySelector('h2');
      const slideParagraph = slideContent.querySelector('p');
      const slideCard1 = slideContent.querySelector('.card-1');
      const slideCard2 = slideContent.querySelector('.card-2');
      const slideCard3 = slideContent.querySelector('.card-3');
      const slidePag1 = document.querySelector('.circ-01');
      const slidePag2 = document.querySelector('.circ-02');
      const slidePag3 = document.querySelector('.circ-03');

      gsap.timeline({ delay: 0.5 })
         .from(slideTitle, { opacity: 0, x: -50 })
         .from(slideParagraph, { opacity: 0, y: 50 }, '-=0.2')
         .from(slideCard1, { opacity: 0, y: 50 }, '-=0.2')
         .from(slideCard2, { opacity: 0, y: 50 }, '-=0.3')
         .to(slidePag1, { x: 0, duration: 1, ease: 'power2.inOut' }, '-=1')
         .to(slidePag2, { x: 0, duration: 1, ease: 'power2.inOut' }, '-=1')
         .to(slidePag3, { x: 0, duration: 1, ease: 'power2.inOut' }, '-=1')
         .from(slideCard3, { opacity: 0, y: 50 }, '-=0.4');
   }

   function animateSlide2() {
      const slideContent = document.querySelector('.slide-2 .slide-content');
      const slideTitle = slideContent.querySelector('h2');
      const slideParagraph = slideContent.querySelector('p');
      const slideCard4 = slideContent.querySelector('.card-4');
      const slideCard5 = slideContent.querySelector('.card-5');
      const slideCard6 = slideContent.querySelector('.card-6');
      const slidePag1 = document.querySelector('.circ-01');
      const slidePag2 = document.querySelector('.circ-02');
      const slidePag3 = document.querySelector('.circ-03');

      gsap.timeline({ delay: 0.5 })
         .from(slideTitle, { opacity: 0, x: -50 })
         .from(slideParagraph, { opacity: 0, y: 50 }, '-=0.2')
         .from(slideCard4, { opacity: 0, y: 50 }, '-=0.2')
         .from(slideCard5, { opacity: 0, y: 50 }, '-=0.3')
         .to(slidePag1, { x: 20, duration: 1, ease: 'power2.inOut' }, '-=1')
         .to(slidePag2, { x: -20, duration: 1, ease: 'power2.inOut' }, '-=1')
         .to(slidePag3, { x: 0, duration: 1, ease: 'power2.inOut' }, '-=1')
         .from(slideCard6, { opacity: 0, y: 50 }, '-=0.4');
   }

   let slideChatTimeline;

   function animateSlide3() {
      const slideContent = document.querySelector('.slide-3 .slide-content');
      const slideTitle = slideContent.querySelector('h2');
      const slideParagraph = slideContent.querySelector('p');
      const slideChat = slideContent.querySelector('.chat');
      const slideChatWind = slideContent.querySelector('.mess-win');
      const slidePag1 = document.querySelector('.circ-01');
      const slidePag2 = document.querySelector('.circ-02');
      const slidePag3 = document.querySelector('.circ-03');

      gsap.timeline({ delay: 0.5 })
         .from(slideTitle, { opacity: 0, x: -50 })
         .from(slideChatWind, { opacity: 0, y: 100 })
         .to(slidePag1, { x: 40, duration: 1, ease: 'power2.inOut' }, '-=1')
         .to(slidePag2, { x: -20, duration: 1, ease: 'power3.inOut' }, '-=1')
         .to(slidePag3, { x: -20, duration: 1, ease: 'power3.inOut' }, '-=1')
         .from(slideParagraph, { opacity: 0, y: 50 }, '-=0.2');

      // останавливаем предыдущую анимацию, если есть
      if (slideChatTimeline) {
         slideChatTimeline.kill();
      }


      slideChatTimeline = gsap.timeline({ delay: 2, repeat: -1, repeatDelay: 3 })
         .fromTo(slideChat, {
            y: '0%',
         }, {
            y: '-80%',
            duration: 15,
            ease: 'none', // тип плавности анимации
         })
         .to({}, { duration: 2 })
         .to(slideChat, {
            y: '0%',
            duration: 4,
            ease: 'Elastic.easeInOut',
         });

   }


   animateSlide1();




   /////////////////////////////////////////////////////////




   // Получаем блок, в котором находится анимация
   const block1 = document.querySelector('.animation2');

   // Создаем Timeline для анимации
   const tl1 = gsap.timeline({ delay: 1, paused: true });
   const tl2 = gsap.timeline({ delay: 2, paused: true });
   tl1.from('.in01', { duration: 2, opacity: 0, y: 100 });
   tl2.from('.in02', { duration: 2, opacity: 0, y: 100 })
      .to('.scrll', { delay: -2, duration: 1, y: '+=0' });

   // Функция для проверки, виден ли блок на экране
   function isBlockVisible() {
      const rect = block1.getBoundingClientRect();
      return rect.top < window.innerHeight && rect.bottom >= 0;
   }

   let animationEnabled = true;

   // Функция для проигрывания анимации, если блок виден на экране
   function playAnimation() {
      if (isBlockVisible() && animationEnabled) {
         tl1.play();
         tl2.play();
      }
   }

   // Проигрываем анимацию при загрузке страницы, если блок сразу виден на экране
   //playAnimation();

   // Добавляем обработчик события прокрутки экрана
   window.addEventListener('scroll', playAnimation);




   // Получаем кнопку для управления анимацией
   const button1 = document.querySelector('.button-01');
   const button2 = document.querySelector('.button-02');
   const button3 = document.querySelector('.button-03');
   const button4 = document.querySelector('.button-04');

   // Создаем вторую Timeline для другой анимации
   const tl3 = gsap.timeline({ paused: true });
   tl3.from('.in03', { duration: 2, opacity: 0, y: 100 })
      .to('.scrll', { delay: -2, duration: 1, y: '+=200', ease: 'power2.out' });

   const tl4 = gsap.timeline({ paused: true });
   tl4.from('.in04', { duration: 2, opacity: 0, y: 100 })
      .to('.scrll', { delay: -2, duration: 1, y: '+=390', ease: 'power2.out' });

   const tl5 = gsap.timeline({ paused: true });
   tl5.from('.in05', { duration: 2, opacity: 0, y: 100 })
      .to('.scrll', { delay: -2, duration: 1, y: '+=580', ease: 'power2.out' });

   const tlbutt = gsap.timeline({ paused: true });
   tlbutt.to('.buttn', { duration: 1, y: -270 });


   // Функция для обработки нажатия на кнопку
   function handleButtonClick1() {
      // Останавливаем текущую анимацию
      tl3.pause().progress(0);
      tl4.pause().progress(0);

      // Запускаем новую анимацию
      tl1.play();
      tl2.play();
      tlscrl1.play();
   }
   function handleButtonClick2() {
      // Останавливаем текущую анимацию
      tl1.pause().progress(0);
      tl2.pause().progress(0);
      tl4.pause().progress(0);
      tl5.pause().progress(0);
      // Запускаем новую анимацию
      tl3.play();
      tlbutt.reverse();
      tlscrl2.play();
      gsap.to('.element', { duration: 1, x: '+=100' });


   }
   function handleButtonClick3() {
      // Останавливаем текущую анимацию
      tl1.pause().progress(0);
      tl2.pause().progress(0);
      tl3.pause().progress(0);
      tl5.pause().progress(0);
      // Запускаем новую анимацию
      tl4.play();
      tlbutt.play();
      tlscrl3.play();

   }
   function handleButtonClick4() {
      // Останавливаем текущую анимацию
      tl1.pause().progress(0);
      tl2.pause().progress(0);
      tl3.pause().progress(0);
      tl4.pause().progress(0);
      // Запускаем новую анимацию
      tl5.play();
      tlscrl4.play();

   }

   // Добавляем обработчик события клика на кнопку
   button1.addEventListener('click', handleButtonClick1);
   button2.addEventListener('click', handleButtonClick2);
   button3.addEventListener('click', handleButtonClick3);
   button4.addEventListener('click', handleButtonClick4);

   $('.buttn').click(function () {
      if ($(this).hasClass('active') == false) {
         $('.buttn').removeClass('active');
         animationEnabled = false;
         $(this).addClass('active');
      } else {
         $(this).removeClass('active');

      }

      return false;
   });

   //////////////////////////////////////////////////////

   $('.question-js').click(function () {
      if ($(this).hasClass('active') == false) {
         $('.question-js').removeClass('active');
         $('.answer-js').removeClass('active');
         $(this).addClass('active').next().addClass('active');
      } else {
         $(this).removeClass('active');
         $('.answer-js').removeClass('active');
      }

      return false;
   });

   ////////////////////////////////////////

   $('.q-item').click(function () {

      $(this).toggleClass('active');


      return false;
   });

   ////////////////////////////////////

   const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
         if (entry.isIntersecting) {
            // Запускаем анимацию при появлении блока на экране
            gsap.to('.chat-dir', { delay: 3, duration: 1, y: -460, ease: 'power2.out' });
         }
      });
   });

   // Наблюдаем за блоком и добавляем его в список элементов для наблюдения
   const block = document.querySelector('.anim');
   observer.observe(block);

});



// Обработка меню
    function openNav() {
        document.getElementById("mySidenav").style.width = "250px";
    }

    function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
    }
    function toggleNav() {
        var sidenav = document.getElementById("mySidenav");
        if (sidenav.style.width === "250px") {
            closeNav();
        } else {
            openNav();
        }
    }
// Обработка меню
// --------------
// Уменьшение хедера при прокрутке
    window.addEventListener('scroll', function() {
      let neoh_fn_header = document.getElementById('header');
      let scrollDistance = window.pageYOffset || document.documentElement.scrollTop;

      if (scrollDistance >= 100) {
        neoh_fn_header.classList.add('fixer');
      } else {
        neoh_fn_header.classList.remove('fixer');
      }
    });
// Уменьшение хедера при прокрутке
// --------------
// Обработка скролла
    function onEntryHead(entry) {
      entry.forEach(change => {
        if (change.isIntersecting) {
          change.target.querySelector('.headup').classList.add('animationopacity');
          change.target.querySelector('.headup').classList.add('animate__fadeInLeft');
          change.target.querySelector('.headdown').classList.add('animationopacity');
          change.target.querySelector('.headdown').classList.add('animate__fadeInRight');
          return
        }
      });
    }

    function onEntryCat(entry) {
      entry.forEach(change => {
        if (change.isIntersecting) {
          change.target.querySelector('.textksucat1').classList.add('animatecat1');
          change.target.querySelector('.textksucat2').classList.add('animatecat2');
        }
      });
    }

    function onEntryRak(entry) {
      entry.forEach(change => {
        if (change.isIntersecting) {
          change.target.querySelector('.downspan1').classList.add('animationopacity');
          change.target.querySelector('.downspan1').classList.add('animate__fadeInUp');
          change.target.querySelector('.downspan2').classList.add('animationopacity');
          change.target.querySelector('.downspan2').classList.add('animate__fadeInUp');
          change.target.querySelector('.downspan3').classList.add('animationopacity');
          change.target.querySelector('.downspan3').classList.add('animate__fadeInUp');
          change.target.querySelector('.downspan4').classList.add('animationopacity');
          change.target.querySelector('.downspan4').classList.add('animate__fadeInUp');
          change.target.querySelector('.downspan5').classList.add('animationopacity');
          change.target.querySelector('.downspan5').classList.add('animate__fadeInUp');
        }
      });
    }
    function onEntrySak(entry) {
      entry.forEach(change => {
        if (change.isIntersecting) {
          change.target.querySelector('.JpUp').classList.add('animationopacity');
          change.target.querySelector('.JpUp').classList.add('animate__rotateInDownLeft');
          change.target.querySelector('.JpCentrSmall').classList.add('animationopacity');
          change.target.querySelector('.JpCentrSmall').classList.add('animate__fadeInUp');
          change.target.querySelector('.JpDown').classList.add('animationopacity');
          change.target.querySelector('.JpDown').classList.add('animate__rotateInUpRight');
        }
      });
    }
    function onEntryPodvod(entry) {
      entry.forEach(change => {
        if (change.isIntersecting) {
          change.target.querySelector('.lefttext').classList.add('animationopacity');
          change.target.querySelector('.lefttext').classList.add('animate__fadeInLeft');
          change.target.querySelector('.righttext').classList.add('animationopacity');
          change.target.querySelector('.righttext').classList.add('animate__fadeInRight');
          return
        }
      });
    }
    function onEntryGame(entry) {
      entry.forEach(change => {
        if (change.isIntersecting) {
          change.target.querySelector('.headswipe').classList.add('animationopacity');
          change.target.querySelector('.headswipe').classList.add('animate__fadeInDown');

        } else{
          change.target.querySelector('.headswipe').classList.remove('animationopacity');
          change.target.querySelector('.headswipe').classList.remove('animate__fadeInDown');
        }
      });
    }
    function onEntryContent(entry) {
      entry.forEach(change => {
        if (change.isIntersecting) {
          change.target.querySelector('.head').classList.add('animationopacity');
          change.target.querySelector('.head').classList.add('animate__fadeInUp');
          change.target.querySelector('.leftcont').classList.add('animationopacity');
          change.target.querySelector('.leftcont').classList.add('animate__fadeInLeft');
          change.target.querySelector('.rightcont').classList.add('animationopacity');
          change.target.querySelector('.rightcont').classList.add('animate__fadeInRight');
        } else{
          change.target.querySelector('.head').classList.remove('animationopacity');
          change.target.querySelector('.head').classList.remove('animate__fadeInUp');
          change.target.querySelector('.leftcont').classList.remove('animationopacity');
          change.target.querySelector('.leftcont').classList.remove('animate__fadeInLeft');
          change.target.querySelector('.rightcont').classList.remove('animationopacity');
          change.target.querySelector('.rightcont').classList.remove('animate__fadeInRight');
        }
      });
    }
    function onEntrySave(entry) {
      entry.forEach(change => {
        if (change.isIntersecting) {
          change.target.querySelector('.content-container').classList.add('animationopacity');
          change.target.querySelector('.content-container').classList.add('animate__fadeInDown');

        } else{
          change.target.querySelector('.content-container').classList.remove('animationopacity');
          change.target.querySelector('.content-container').classList.remove('animate__fadeInDown');
        }
      });
    }

    let options = { threshold: [0.5] };
    let observerhead = new IntersectionObserver(onEntryHead, options);
    let observercat = new IntersectionObserver(onEntryCat, options);
    let observerrak = new IntersectionObserver(onEntryRak, options);
    let observersak = new IntersectionObserver(onEntrySak, options);
    let observerpodvod = new IntersectionObserver(onEntryPodvod, options);
    let observergame = new IntersectionObserver(onEntryGame, options);
    let observercontent = new IntersectionObserver(onEntryContent, options);
    let observersave = new IntersectionObserver(onEntrySave, options);

    let elementshead = document.querySelectorAll('.contentsakura');
    let elementscat = document.querySelectorAll('.conteinercat');
    let elementsrak = document.querySelectorAll('.downtext');
    let elementssak = document.querySelectorAll('.JpCentrBig');
    let elementspodvod = document.querySelectorAll('.podvod');
    let elementsgame = document.querySelectorAll('.game');
    let elementscontent = document.querySelectorAll('.perehod');
    let elementssave = document.querySelectorAll('.perehodsave');

    for (let elmhead of elementshead) {
      observerhead.observe(elmhead);
    }

    for (let elmcat of elementscat) {
      observercat.observe(elmcat);
    }
    for (let elmrak of elementsrak) {
      observerrak.observe(elmrak);
    }
    for (let elmsak of elementssak) {
      observersak.observe(elmsak);
    }
    for (let elmpod of elementspodvod) {
      observerpodvod.observe(elmpod);
    }
    for (let elmgame of elementsgame) {
      observergame.observe(elmgame);
    }
    for (let elmpereh of elementscontent) {
      observercontent.observe(elmpereh);
    }
    for (let elmsave of elementssave) {
      observersave.observe(elmsave);
    }
// Обработка скролла
// --------------
// Инициализация свайпера
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: "auto",
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,

      },
    });
// Инициализация свайпера
// --------------
// --------------
//Обработка картинок в сохраненках

//Обработка картинок в сохраненках

/*!
* Start Bootstrap - Freelancer v7.0.6 (https://startbootstrap.com/theme/freelancer)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
*/
//
// Scripts
// 
const loader = document.querySelector('#loading');
const html = document.querySelector('html');

window.addEventListener('DOMContentLoaded', event => {
    setTimeout(() => {
        loader.style.opacity = '0'
        html.style.overflow = 'auto';
        setTimeout(() => {
            loader.style.display = 'none';
        }, 400);
    }, 3000);


    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-scroll')
        } else {
            navbarCollapsible.classList.add('navbar-scroll')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 72,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-item')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });


    // portfolio Isotope
    const grid = document.querySelector(".port-wrap");
    let iso;

    imagesLoaded(grid, function() {
        iso = new Isotope( grid, {
            itemSelector: ".port-wrap>div",
            masonry:{
                columWidth: ".port-wrap>div"
            },
            transitionDuration: ".5s"
        });
    });     

    const portBtns = document.querySelectorAll(".port-menu li");
    portBtns.forEach( portBtn => {
        portBtn.addEventListener("click", e => {
            e.preventDefault();
            const isOn = e.currentTarget.classList.contains("on");
            if(isOn) return;

            activation(e);
        });
    });

    function activation(even){
        for(let portBtn of portBtns) portBtn.classList.remove("on");
        even.currentTarget.classList.add("on");

        const portBtn_a = even.currentTarget.querySelector("a");
        const a_href = portBtn_a.getAttribute("href");
        iso.arrange({filter: a_href});
    }

    // aside
    const portItems = document.querySelectorAll(".port-item");
    const aside = document.querySelector("aside");
    const btnClose = document.querySelector('aside .btnClose');

    portItems.forEach(portItem => {
        portItem.addEventListener("click", e => {
            const tit = e.currentTarget.querySelector("h2").innerText;
            const con = e.currentTarget.querySelector("div.txt").innerHTML;
            const imgSrc = e.currentTarget.querySelector("img").getAttribute('src');
            const imgAlt = e.currentTarget.querySelector("img").getAttribute('alt');
            aside.querySelector("h2").innerText = tit;
            aside.querySelector(".txtBox").innerHTML = con;
            aside.querySelector("img").setAttribute('src', imgSrc);
            aside.querySelector("img").setAttribute('alt', imgAlt);
            aside.classList.add('on');
        });
        btnClose.addEventListener('click', () => {
            aside.classList.remove('on');
        });
    });

    // 순차적으로 나타나는 
    const spyEls = document.querySelectorAll('.scroll-spy');
    // section.scroll-spy 요소 모두 찾기
    spyEls.forEach(function(spyEl){ // 각각의 요소 반복 실
        new ScrollMagic
            .Scene({ // Scene 로 특정 요소 감시
                triggerElement: spyEl, // 보여짐 여부를 감시할 요소를 지정. spyEls중 하나
                triggerHook: .9, // 0~1 사이. 보여짐 위치(세로로 세)
            })
            .setClassToggle(spyEl, 'show')
            .addTo(new ScrollMagic.Controller());
            // setClassToggle 로 토글될 클래스 지정
    });

});

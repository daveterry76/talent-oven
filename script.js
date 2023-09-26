AOS.init();


const navBar = document.getElementById('nav'),
navBarLink = document.querySelectorAll('.nav__link'),
navBarHamburger = document.querySelector('.nav__hamburger'),
navBarOpen = document.querySelector('.nav__hamburger--open'),
navBarClose = document.querySelector('.nav__hamburger--close'),
navBarSmMd = document.querySelector('.nav__links--small--and--medium'),
navLinkSmMd = document.querySelectorAll('.nav__link--small--and--medium'),
navBarBorderBottom = document.querySelector('.nav__navbar--fixed');

const talentCards = document.querySelector('.talent__cards');

// Change background color of navbar on scroll

window.addEventListener('scroll', () => {
    const verticalScroll = window.scrollY;

    if (verticalScroll < 200 ) {
        navBar.style.backgroundColor = 'rgb(229, 228, 222)';
        navBar.style.color = "#000";
        // navBarLink.style.color = "#000"; 
        navBarLink.forEach(link => {
            link.style.color = "#000";
        })
        navLinkSmMd.forEach(link => {
            link.style.color ="#000";
        })

        navBarHamburger.style.right = '80px'

    } else {
        navBar.style.backgroundColor = '#000';
        navBar.style.color = '#fff';
        // navBarLink.style.color = "#fff";
        navBarLink.forEach(link => {
            link.style.color = "#fff";
        })
        navLinkSmMd.forEach(link => {
            link.style.color ="#fff";
        })
        navBarHamburger.style.right = '12px'
    }
})


// Navigation bar functionality


navBarOpen.addEventListener('click', () => {
    navBarClose.style.display = 'block';
    navBarOpen.style.display = 'none';
    navBarSmMd.style.display = 'block';
    navLinkSmMd.forEach(link => {
        link.style.display = 'flex';
        link.style.flexDirection = 'column';
        link.style.justifyEnd = 'flex-end';
    });
    navBarBorderBottom.style.borderBottomStyle = 'solid';
    navBarBorderBottom.style.borderBottomWidth = '1px';
    navBarSmMd.style.zIndex = '10';
})

navBarClose.addEventListener('click', () => {
    navBarClose.style.display = 'none';
    navBarOpen.style.display = 'block';
    navBarSmMd.style.display = 'none';
    navBarBorderBottom.style.borderBottomStyle = 'none';
})

navLinkSmMd.forEach(link => {
    link.addEventListener('click', () => {
        navBarClose.style.display = 'none';
        navBarOpen.style.display = 'block';
        navBarSmMd.style.display = 'none';
        navBarBorderBottom.style.borderBottomStyle = 'none';
    })
})

// Scroll events


AOS.init();


const navBar = document.getElementById('nav'),
navBarLink = document.querySelectorAll('.nav__link'),
navBarHamburger = document.querySelector('.nav__hamburger'),
navBarOpen = document.querySelector('.nav__hamburger--open'),
navBarClose = document.querySelector('.nav__hamburger--close'),
navBarSmMd = document.querySelector('.nav__links--small--and--medium'),
navLinkSmMd = document.querySelectorAll('.nav__link--small--and--medium'),
navBarBorderBottom = document.querySelector('.nav__navbar--fixed'),
scrollToTop = document.querySelector('.scroll-to-top');

const talentCards = document.querySelector('.talent__cards');

// Change background color of navbar on scroll

window.addEventListener('scroll', () => {
    const verticalScroll = window.scrollY;

    if (verticalScroll < 200 ) {
        // navBarHamburger.style.right = '100px'
        navBar.style.backgroundColor = '#f0eff2';
        navBar.style.color = "#000";
        scrollToTop.style.display = "none";
        // navBarLink.style.color = "#000"; 
        navBarLink.forEach(link => {
            link.style.color = "#000";
        })
        navLinkSmMd.forEach(link => {
            link.style.color ="#000";
        })


    } else {
        navBarHamburger.style.right = '15px'
        navBar.style.backgroundColor = '#4A2D86';
        navBar.style.color = '#fff';
        scrollToTop.style.display = "block";
        scrollToTop.style.position = "fixed";
        // navBar.style.borderBottomStyle = 'solid';
        // navBar.style.borderBottomColor = '#fff';
        // navBar.style.borderBottomWidth = '0.5px';
        // navBarLink.style.color = "#fff";
        navBarLink.forEach(link => {
            link.style.color = "#fff";
        })
        navLinkSmMd.forEach(link => {
            link.style.color ="#fff";
        })
    }
})


// Navigation bar functionality


navBarOpen.addEventListener('click', () => {
    navBarClose.style.display = 'block';
    navBarHamburger.style.paddingRight = '3rem';
    navBarOpen.style.display = 'none';
    navBarSmMd.style.display = 'block';
    navLinkSmMd.forEach(link => {
        link.style.display = 'flex';
        link.style.flexDirection = 'column';
        link.style.justifyEnd = 'flex-end';
        link.style.marginBlock = "15px"
    });
    navBarBorderBottom.style.borderBottomStyle = 'solid';
    navBarBorderBottom.style.borderBottomWidth = '1px';
    navBarBorderBottom.style.borderBottomColor = "#f0eff2";
    navBarSmMd.style.zIndex = '10';
})

navBarClose.addEventListener('click', () => {
    navBarClose.style.display = 'none';
    navBarOpen.style.display = 'block';
    navBarSmMd.style.display = 'none';
    // navBarBorderBottom.style.borderBottomStyle = 'none';
    navBarBorderBottom.style.borderBottomStyle = 'solid';
    navBarBorderBottom.style.borderBottomWidth = '1px';
    navBarHamburger.style.paddingRight = '0';
})

navLinkSmMd.forEach(link => {
    link.addEventListener('click', () => {
        navBarClose.style.display = 'none';
        navBarOpen.style.display = 'block';
        navBarSmMd.style.display = 'none';
        navBarBorderBottom.style.borderBottomStyle = 'none';
    })
})


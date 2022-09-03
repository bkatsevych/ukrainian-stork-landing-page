// MOBILE MENU FUNCTIONALITY
const navMenu = document.getElementById("nav-menu"),
    navToggle = document.getElementById("nav-toggle"),
    navClose = document.getElementById("nav-close");

if (navToggle) {
    navToggle.addEventListener("click", () => {
        navMenu.classList.add("show-menu");
    });
}

if (navClose) {
    navClose.addEventListener("click", () => {
        navMenu.classList.remove("show-menu");
    });
}

const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
    const navMenu = document.getElementById("nav-menu");
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove("show-menu");
};
navLink.forEach((n) => n.addEventListener("click", linkAction));

// HEADER'S BACKGROUND COLOR
const scrollHeader = () => {
    const header = document.getElementById("header");
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    this.scrollY >= 50
        ? header.classList.add("scroll-header")
        : header.classList.remove("scroll-header");
};
window.addEventListener("scroll", scrollHeader);

// SWIPERJS SLIDER
var swiperTeam = new Swiper(".team__container", {
    centeredSlides: true,
    spaceBetween: 45,
    loop: true,
    mousewheel: true,
    slidesPerView: "auto",

    pagination: {
        el: ".swiper-pagination",
    },

    breakpoints: {
        508: {
            spaceBetween: 80,
        },

        560: {
            spaceBetween: 100,
        },

        902: {
            spaceBetween: 220,
        },

        1600: {
            spaceBetween: 320,
        },
    },
});
// SWIPERJS SLIDER

// Q&A ACCORDION FUNCTIONALITY
const accordionItems = document.querySelectorAll(".qanda__accordion-item");
accordionItems.forEach((item) => {
    const accordionHeader = item.querySelector(".qanda__accordion-header");

    accordionHeader.addEventListener("click", () => {
        const openItem = document.querySelector(".accordion-open");
        toggleItem(item);

        if (openItem && openItem !== item) {
            toggleItem(openItem);
        }
    });
});

const toggleItem = (item) => {
    const accordionContent = item.querySelector(".qanda__accordion-content");

    if (item.classList.contains("accordion-open")) {
        accordionContent.removeAttribute("style");
        item.classList.remove("accordion-open");
    } else {
        accordionContent.style.height = accordionContent.scrollHeight + "px";
        item.classList.add("accordion-open");
    }
};

// SHOW SCROLLUP
const scrollUp = () => {
    const scrollUp = document.getElementById("scroll-up");
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
    this.scrollY >= 350
        ? scrollUp.classList.add("show-scroll")
        : scrollUp.classList.remove("show-scroll");
};
window.addEventListener("scroll", scrollUp);

// SCROLL SECTIONS ACTIVE LINK
const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
    const scrollY = window.pageYOffset;

    sections.forEach((current) => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute("id"),
            sectionsClass = document.querySelector(
                ".nav__menu a[href*=" + sectionId + "]"
            );

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            sectionsClass.classList.add("active-link");
        } else {
            sectionsClass.classList.remove("active-link");
        }
    });
};
window.addEventListener("scroll", scrollActive);

// SCROLL REVEAL ANIMATION

const sr = ScrollReveal({
    origin: "top",
    distance: "50px",
    duration: 2500,
    delay: 400,
});

sr.reveal(`.about__title, .about__data-numbers`);
sr.reveal(`.about__description, .about__data-title, .about__data-description`, {
    delay: 750,
});
sr.reveal(`.footer__container`, {
    delay: 500,
    origin: "bottom",
});

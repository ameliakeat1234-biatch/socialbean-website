// =========================
// WEBSITE LINKS
// =========================

const links = {
    here: "https://l.instagram.com/?u=https%3A%2F%2Fg.page%2Fr%2FCVy8OaQVzoDsECE%2Freview%3Futm_source%3Dig%26utm_medium%3Dsocial%26utm_content%3Dlink_in_bio%26fbclid%3DPAcGRvZgJleHRuA2FlbQIxMQBzcnRjBmFwcF9pZA85MzY2MTk3NDMzOTI0NTkAAad6U-98RALyqe1m3JB7OXqkqIOU7zGE6pXHzkyhuC_gEg44OXteA_kG0E6lpw_aem_u2CBLZ95EGYea7cfOtuOHA&e=AUBqydiWL0SsaHQCH6flTMAiz9F4ZyDyQ8SyjIaOzZdHeOkEyVi3yES8awBFUwjxgFtbSShtrMNjxl5Go_5zPBYxZoEu-_5w7Ah-dheVqHpfDkuoaqsZfz8P1zt67H-0tfU2EiA",
    learnMore: "beans.html",
    menu: "menu.html",

    instagram: "https://www.instagram.com/socialbean_dub/",
    facebook: "https://www.facebook.com/p/Social-Bean-61576339096035/",
    tiktok: "https://www.tiktok.com/@socialbean_dub"
};


// =========================
// ADD PAGE LINKS
// =========================

// Learn More button
const learnMoreButton = document.querySelector(".outline-button");

if (learnMoreButton) {
    learnMoreButton.href = links.learnMore;
}


// Menu button
const menuButton = document.querySelector(".menu-button");

if (menuButton) {
    menuButton.href = links.menu;
}


// =========================
// SOCIAL MEDIA LINKS
// =========================

const socialButtons = document.querySelectorAll(
    ".social-links a, .footer-social-links a"
);

socialButtons.forEach((button, index) => {

    const socialIndex = index % 3;

    if (socialIndex === 0) {
        button.href = links.instagram;
    }

    if (socialIndex === 1) {
        button.href = links.facebook;
    }

    if (socialIndex === 2) {
        button.href = links.tiktok;
    }

    button.target = "_blank";
    button.rel = "noopener noreferrer";
});
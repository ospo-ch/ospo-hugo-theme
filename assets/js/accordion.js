const accordions = document.querySelectorAll(".accordion");

const openAccordion = (accordion) => {
    accordion.classList.add("accordion__active");
};

const closeAccordion = (accordion) => {
    accordion.classList.remove("accordion__active");
};

accordions.forEach((accordion) => {
    const title = accordion.querySelector(".accordion__title");

    title.onclick = () => {
        if (accordion.classList.contains("accordion__active")) {
            closeAccordion(accordion);
        } else {
            openAccordion(accordion);
        }
    };
});

<<<<<<< HEAD
const openAccordion = (accordion) => {
  accordion.classList.add("accordion__active");
};

const closeAccordion = (accordion) => {
  accordion.classList.remove("accordion__active");
};

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".accordion").forEach((accordion) => {
    const title = accordion.querySelector(".accordion__title");
    title.addEventListener("click", () => {
=======
(function () {
  const accordions = document.querySelectorAll(".accordion");

  const openAccordion = (accordion) => {
    accordion.classList.add("accordion__active");
  };

  const closeAccordion = (accordion) => {
    accordion.classList.remove("accordion__active");
  };

  accordions.forEach((accordion) => {
    const title = accordion.querySelector(".accordion__title");
    if (!title) {
      return;
    }

    title.onclick = () => {
>>>>>>> 4ea927d (refactor: Scope accordion.js in an IIFE and guard missing title)
      if (accordion.classList.contains("accordion__active")) {
        closeAccordion(accordion);
      } else {
        openAccordion(accordion);
      }
<<<<<<< HEAD
    });
  });
});
=======
    };
  });
})();
>>>>>>> 4ea927d (refactor: Scope accordion.js in an IIFE and guard missing title)

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
      if (accordion.classList.contains("accordion__active")) {
        closeAccordion(accordion);
      } else {
        openAccordion(accordion);
      }
    });
  });
});

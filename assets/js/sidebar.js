(function () {
  // Constants
  const desktopBreakpoint = 1000;

  // DOM queries
  const toggleButton = document.querySelector(
    ".docs-subnav__sidebar-hamburger"
  );
  const closeButton = document.querySelector(".docs-sidebar__button-close");
  const sidebar = document.querySelector(".docs-nav-container");

  // State
  let isMobile = window.innerWidth < desktopBreakpoint;

  /**
   *
   * Throttle
   *
   * @param {*} func Function
   * @param {*} limit Milliseconds
   * @returns
   */
  const throttle = (func, limit) => {
    let inThrottle;
    return function () {
      const args = arguments;
      const context = this;
      if (!inThrottle) {
        func.apply(context, args);
        inThrottle = true;
        setTimeout(() => (inThrottle = false), limit);
      }
    };
  };

  const initializeBackDrop = () => {
    const element = document.createElement("div");
    element.classList.toggle("docs-nav-backdrop");
    element.onclick = () => {
      closeSidebar(sidebar);
    };

    return element;
  };

  // Initialization
  const backDrop = initializeBackDrop();

  const closeSidebar = (sidebar) => {
    if (!sidebar) {
      return;
    }

    // Remove backdrop
    backDrop.classList.remove("show");
    backDrop.remove();

    sidebar.classList.remove("is-open");
    document.body.classList.remove("has-sidebar-active");
  };

  const handleResize = throttle(() => {
    isMobile = window.innerWidth < desktopBreakpoint;
    if (!isMobile) {
      closeSidebar(sidebar);
    }
  }, 200);

  const handleToggleClick = (e) => {
    e.preventDefault();

    if (!isMobile) {
      return;
    }

    // Add backdrop overlay and set opacity
    sidebar.parentNode.appendChild(backDrop);
    backDrop.classList.add("show");
    sidebar.classList.add("is-open");
    document.body.classList.add("has-sidebar-active");
  };

  const handleCloseClick = (e) => {
    e.preventDefault();

    closeSidebar(sidebar);
  };

  const handleEscapeKey = (e) => {
    if (e.keyCode == 27) {
      closeSidebar();
    }
  };

  document.addEventListener("DOMContentLoaded", () => {
    window.addEventListener("resize", handleResize);
    document.addEventListener("keydown", handleEscapeKey);
    toggleButton?.addEventListener("click", handleToggleClick);
    closeButton?.addEventListener("click", handleCloseClick);
  });
})();

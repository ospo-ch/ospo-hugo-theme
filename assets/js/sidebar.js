function showDocumentationNav() {
  const documentationNav = document.querySelector(".docs-nav-container");

  if (!documentationNav) {
    return;
  }

  documentationNav.style.visibility = "visible";
}

slide = (page) => {
  const pages = document.querySelectorAll(".page");
  pages?.forEach((page) => {
    page.classList?.remove("page-active");
  });
  switch (page) {
    case "home":
      document.querySelector(".home").classList.add("page-active");
      break;
    case "about":
      document.querySelector(".about-me").classList.add("page-active");
      break;
    case "achiev":
      document.querySelector(".achiev").classList.add("page-active");
      break;
    case "skill":
      document.querySelector(".skill").classList.add("page-active");
      break;
    case "contact":
      document.querySelector(".contact").classList.add("page-active");
      break;
    case "proff":
      document.querySelector(".proff").classList.add("page-active");
      break;
    default:
      break;
  }
};

// ============== A.O.S Library ==============
AOS.init();
// ============== Get Elements ==============
let portfolioBtns = document.querySelectorAll(".portfolio .container ul li");
let portfolioImgs = document.querySelectorAll(
  ".portfolio .container .cards .category"
);
// ============== Events ==============
addAllActive();
portfolioBtns.forEach((btn) => {
  btn.onclick = function () {
    clearAllActive();
    btn.classList.add("active");
    portfolioImgs.forEach((img) => {
      img.classList.remove("active");
    });
    portfolioImgs.forEach((img) => {
      if (btn.getAttribute("data-cat") === "all") {
        addAllActive();
      } else if (
        btn.getAttribute("data-cat") === img.getAttribute("data-cat")
      ) {
        img.classList.add("active");
      }
    });
  };
});
// ============== Functions ==============
function clearAllActive() {
  portfolioBtns.forEach((btn) => {
    btn.classList.remove("active");
  });
}
function addAllActive() {
  portfolioImgs.forEach((img) => {
    img.classList.add("active");
  });
}

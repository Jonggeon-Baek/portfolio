const slides = document.querySelectorAll(".slide");
let current = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === index) slide.classList.add("active");
  });
}

setInterval(() => {
  current = (current + 1) % slides.length;
  showSlide(current);
}, 3000);
const buttons = document.querySelectorAll(".filter-btn");
const rows = document.querySelectorAll(".project-table tbody tr");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    buttons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

    const filter = button.dataset.filter;

    rows.forEach(row => {
      const author = row.dataset.by;
      if (filter === "All" || author === filter) {
        row.style.display = "";
      } else {
        row.style.display = "none";
      }
    });
  });
});

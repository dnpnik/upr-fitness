document.querySelectorAll(".item input").forEach((checkbox) => {
  checkbox.addEventListener("change", () => {
    checkbox.closest(".item").classList.toggle("done", checkbox.checked);
  });
});

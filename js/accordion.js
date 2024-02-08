const accordioniteam = document.querySelectorAll(".accordion__iteam");

accordioniteam.forEach((item) => {
  const label = item.querySelector(".accordion_label");
  const accordionContent = item.querySelector(".accordion__content");

  label.addEventListener('click', () => {
    item.classList.toggle('active');
  });
});

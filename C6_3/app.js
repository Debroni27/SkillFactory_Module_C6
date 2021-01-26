const btn = document.querySelector(".btn");
const btnSvg = document.querySelectorAll(".btn-svg");
const heading2 = document.querySelector(".heading2");

btn.addEventListener("click", () => {
  btnSvg.forEach((icon) => {
    icon.classList.toggle("svg1");
  });
});

const afterClick = setTimeout(() => {
  addStylesTo(heading2);
}, 3000);

function addStylesTo(node) {
  node.textContent = "Cпасибо за курс по JS! :)";
  node.style.color = "yellow";
  node.style.textAlingt = "center";
  node.style.backgroundColor = "black";
  node.style.padding = "1rem";
  node.style.borderRadius = "20px";
}

let liEl = document.querySelector("li:nth-child(2)");
console.log(liEl.classList.contains("list"));
if (liEl.classList.contains("list")) {
  liEl.classList.remove("list");
  liEl.classList.add("skyblue");
}

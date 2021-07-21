const search = document.querySelector(".search");
const searchBtn = document.querySelector(".btn");

searchBtn.addEventListener("click", () => {
	search.classList.toggle("active");
});

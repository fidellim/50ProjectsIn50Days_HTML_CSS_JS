const btns = document.querySelectorAll(".btn");
const faqs = document.querySelectorAll(".faq");

btns.forEach((btn) => {
	btn.addEventListener("click", () => {
		btn.parentElement.parentElement.classList.toggle("active");
	});
});

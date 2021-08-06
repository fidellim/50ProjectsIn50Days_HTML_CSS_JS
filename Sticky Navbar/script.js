const nav = document.querySelector("nav");

const scrollAnimation = () => {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		nav.classList.add("active");
	} else {
		nav.classList.remove("active");
	}
};

window.addEventListener("scroll", scrollAnimation);

console.log(document.documentElement.scrollTop);

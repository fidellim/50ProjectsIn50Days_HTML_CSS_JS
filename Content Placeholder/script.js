const cardImg = document.querySelector(".card__img");
const cardTitle = document.querySelector(".card__title");
const cardDesc = document.querySelector(".card__desc");
const authorImg = document.querySelector(".card__author__img");
const authorName = document.querySelector(".card__author__name");
const authorDate = document.querySelector(".card__author__date");

const animate = document.querySelectorAll(".animated--bg");

const getData = () => {
	cardImg.style.backgroundImage = `url(
		"https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80"
	)`;
	cardTitle.innerText = "Lorem ipsum dolor sit amet";
	cardDesc.innerText =
		"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore perferendis";
	authorImg.style.backgroundImage = `url(
		"https://randomuser.me/api/portraits/men/45.jpg"
	)`;
	authorName.innerText = "John Doe";
	authorDate.innerText = "Oct 08, 2020";

	animate.forEach((bg) => bg.classList.remove("animated--bg"));
};

// stops after 2 sec
setTimeout(getData, 2000);

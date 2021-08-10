const postEl = document.querySelector(".post");

postEl.addEventListener("dblclick", (e) => {
	const heart = document.createElement("i");
	heart.classList.add("fas");
	heart.classList.add("fa-heart");

	const x = e.clientX;
	const y = e.clientY;

	const leftOffSet = e.target.offsetLeft;
	const topOffSet = e.target.offsetTop;

	const xInside = x - leftOffSet;
	const yInside = y - topOffSet;

	heart.style.top = `${yInside}px`;
	heart.style.left = `${xInside}px`;

	postEl.appendChild(heart);

	setTimeout(() => {
		heart.remove();
	}, 1000);
});

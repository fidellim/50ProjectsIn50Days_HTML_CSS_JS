import dataArr from "./data.js";
const projects = document.querySelector(".projects");
const btn = document.querySelector(".btn");

const fetchData = (data) => {
	data.forEach((datum) => {
		const { title, day, project_link, img_link } = datum;

		const projEl = document.createElement("div");
		projEl.classList.add("project");

		projEl.innerHTML = `
            <img src=${img_link} alt=${title}>
                <div class="project__title">${title}</div>
                <div class="project__day">Day ${day}</div>
                <div class="project__links">
                    <a href="${project_link}" target="_blank">
                        <img src="_images/live_logo.png" alt="live logo">
                    </a>
                </div>
        `;

		projects.appendChild(projEl);
	});
};

const scrollFunction = () => {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		btn.classList.add("active");
	} else {
		btn.classList.remove("active");
	}
};

const scrollToTop = () => {
	window.scrollTo({ top: 0, behavior: "smooth" });
	btn.classList.remove("active");
};

fetchData(dataArr);

window.addEventListener("scroll", scrollFunction);
btn.addEventListener("click", scrollToTop);

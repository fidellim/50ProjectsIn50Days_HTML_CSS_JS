import dataArr from "./data.js";
const projects = document.querySelector(".projects");

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

fetchData(dataArr);

const result = document.getElementById("result");
const filter = document.getElementById("filter");
const RANDOMUSERS = 50;
const listItems = [];

getData();

filter.addEventListener("input", (e) => filterData(e.target.value));

async function getData() {
	const res = await fetch(`https://randomuser.me/api?results=${RANDOMUSERS}`);
	const { results } = await res.json();

	result.innerHTML = "";
	results.forEach((user) => {
		createUser(user);
	});
}

function createUser(user) {
	const li = document.createElement("li");

	listItems.push(li);

	li.innerHTML = `
        <img src="${user.picture.large}" alt="${user.name.first}">
        <div class="user-info">
            <h4>${user.name.first} ${user.name.last}</h4>
            <p>${user.location.city}, ${user.location.country}</p>
        </div>
        `;
	result.appendChild(li);
}

function filterData(searchTerm) {
	let term = searchTerm.toLowerCase();
	listItems.forEach((item) => {
		if (item.innerText.toLowerCase().includes(term)) {
			item.classList.remove("hide");
		} else {
			item.classList.add("hide");
		}
	});
}

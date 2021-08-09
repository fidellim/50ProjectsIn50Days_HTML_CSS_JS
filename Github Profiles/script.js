const URL = "https://api.github.com/users/";
const form = document.querySelector("form");
const search = document.querySelector("input");
const profile = document.querySelector("main");

const addRepos = (repos) => {
	const reposEl = document.querySelector(".repos");

	repos.splice(0, 10).forEach((repo) => {
		const repoEl = document.createElement("a");
		repoEl.classList.add("repo");
		repoEl.href = repo.html_url;
		repoEl.target = "_blank";
		repoEl.innerText = repo.name;

		reposEl.appendChild(repoEl);
	});
};

const createCard = (data) => {
	profile.innerHTML = `
    <div class="profile">
        <img src=${data.avatar_url} alt=${data.login}>
        <div class="contents">
            <h1>${data.name ? data.name : data.login}</h1>
            <p>${data.bio ? data.bio : "No bio available."}</p>
            <div class="stats">
                <p>${data.followers} followers</p>
                <p>${data.following} following</p>
                <p>${data.public_repos} Repos</p>
            </div>
            <div class="repos">
            </div>
        </div>
    </div>
    `;
};

const createErrorCard = (data) => {
	profile.innerHTML = `
        <div class="profile">
            <h3>${data}</h3>
        </div>
    `;
};

const getRepos = async (user) => {
	try {
		const { data } = await axios(URL + user + "/repos?sort=created");
		addRepos(data);
	} catch (err) {
		createErrorCard("Problem fetching repos");
		console.log(err);
	}
};

const getUser = async (user) => {
	try {
		const { data } = await axios(URL + user);
		createCard(data);
		getRepos(user);
	} catch (err) {
		if (err.response.status == 404) {
			createErrorCard(
				`Hi there! Unfortunately, ${user} doesn't exist. Try another user.`
			);
		}
	}
};

form.addEventListener("submit", (e) => {
	e.preventDefault();

	const user = search.value;

	if (user) {
		getUser(user);

		search.value = "";
	}
});

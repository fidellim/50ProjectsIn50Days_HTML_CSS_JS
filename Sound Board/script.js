const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];

const stopAudio = () => {
	sounds.forEach((sound) => {
		const audio = document.getElementById(sound);
		audio.pause();
		audio.currentTime = 0;
	});
};

sounds.forEach((sound) => {
	const btn = document.createElement("button");
	btn.classList.add("btn");
	btn.innerText = sound;

	btn.addEventListener("click", () => {
		stopAudio();
		document.getElementById(sound).play();
	});

	const buttons = document.getElementById("buttons");
	buttons.appendChild(btn);
});

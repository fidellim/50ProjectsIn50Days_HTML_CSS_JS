const toasts = document.querySelector(".toasts");
const btn = document.querySelector(".btn");

const messages = [
	"Notification 1",
	"Notification 2",
	"Notification 3",
	"Notification 4",
	"Notification 5",
];

const styles = ["success", "fail", "waiting"];

btn.addEventListener("click", () => {
	const toast = document.createElement("div");
	toast.classList.add("toast");
	toast.classList.add(getStyle());
	console.log(getStyle());
	toast.innerText = getNotif();

	toasts.appendChild(toast);

	// make it run synchronously
	let sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

	const hi = async () => {
		await sleep(3000);
		toast.style.transform = "translateX(150%)";
		await sleep(3000);
		toast.remove();
	};
	hi();
});

const getNotif = () => {
	return messages[Math.floor(Math.random() * messages.length)];
};

const getStyle = () => {
	return styles[Math.floor(Math.random() * styles.length)];
};

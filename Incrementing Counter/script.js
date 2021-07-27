const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
	counter.innerHTML = 0;

	const updateCounter = () => {
		const target = parseInt(counter.getAttribute("data-target"));

		// remove commas in number
		const convertCounterValue = counter.innerText.replace(/\,/g, "");
		const counterValue = parseInt(convertCounterValue);
		const divider = 200;

		const incrementalValue = target / divider;

		if (counterValue < target) {
			// round up and add commas to numbers
			counter.innerText = `${Math.ceil(
				incrementalValue + counterValue
			).toLocaleString("en-US")}`;

			setTimeout(updateCounter, 5); //update every 5 millisec
		}
	};

	updateCounter();
});

const password = document.querySelector(".password");
const lengthEl = document.getElementById("length");
const upperEl = document.getElementById("uppercase");
const lowerEl = document.getElementById("lowercase");
const numEl = document.getElementById("num");
const symbolEl = document.getElementById("symbols");
const clipboard = document.querySelector(".fa-clipboard");
const generatePass = document.querySelector(".generatePass");
const copyText = document.querySelector(".copyText");

//ASCII values
const getRandomLower = () => {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
};

const getRandomUpper = () => {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
};

const getRandomNumber = () => {
	return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
};

const getRandomSymbol = () => {
	const symbols = "!@#$%^&*(){}[]=<>/,.";
	return symbols[Math.floor(Math.random() * symbols.length)];
};

const randomChar = {
	lower: getRandomLower,
	upper: getRandomUpper,
	number: getRandomNumber,
	symbol: getRandomSymbol,
};

const generatePassword = (upper, lower, number, symbol, length) => {
	let generatedPassword = "";
	const typesCount = lower + upper + number + symbol;
	const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter(
		(type) => Object.values(type)[0]
	);
	if (typesCount === 0) {
		return "";
	}
	for (let i = 0; i < length; i += typesCount) {
		typesArr.forEach((type) => {
			const funcName = Object.keys(type)[0];
			generatedPassword += randomChar[funcName]();
		});
	}
	return generatedPassword.slice(0, length);
};

generatePass.addEventListener("click", () => {
	const length = lengthEl.value;
	const hasLower = lowerEl.checked;
	const hasUpper = upperEl.checked;
	const hasNum = numEl.checked;
	const hasSymbol = symbolEl.checked;

	password.innerText = generatePassword(
		hasUpper,
		hasLower,
		hasNum,
		hasSymbol,
		length
	);
});

clipboard.addEventListener("click", () => {
	const textarea = document.createElement("textarea");
	const passwordText = password.innerText;

	if (!passwordText) {
		return;
	}

	textarea.value = passwordText;
	document.body.appendChild(textarea);
	textarea.select();
	document.execCommand("copy");
	textarea.remove();

	// make it run synchronously
	let sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

	(async () => {
		await sleep(0);
		copyText.classList.add("active");
		await sleep(1000);
		copyText.classList.remove("active");
	})();
});

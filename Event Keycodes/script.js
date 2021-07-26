const container = document.querySelector(".container");

window.addEventListener("keydown", (e) => {
	console.log(e);
	container.innerHTML = `
        <div class="keys">
            <div class="box key">
                <h4>
                    ${e.key === " " ? "Space" : e.key}
                </h4>
                <div>
                    <small>event.key</small>
                </div>
            </div>
            <div class="box key">
                <h4>
                    ${e.code}
                </h4>
                <div>
                    <small>event.code</small>
                </div>
            </div>
        </div>
    `;
});

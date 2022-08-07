const mobControls = ["left", "top", "right", "bottom", "fire"].map((type) => {
	const btn = document.getElementById(`move-${type}`);
	return {btn, type};
});

const whichKeys = {
	left: 65,
	right: 68,
	top: 87,
	bottom: 83,
	fire: 16,
}

mobControls.forEach(control => {
	control.btn.addEventListener("touchstart", (e) => {
		e.preventDefault();
		let keyEvent = new KeyboardEvent("keydown", {
			which: whichKeys[control.type],
		});
		document.body.dispatchEvent(keyEvent);
	});

	control.btn.addEventListener("touchend", (e) => {
		e.preventDefault();
		let keyEvent = new KeyboardEvent("keyup", {
			which: whichKeys[control.type],
		});
		document.body.dispatchEvent(keyEvent);
	});
});
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
	["touchstart", "touchend"].map(eventName => {
		control.btn.addEventListener(eventName, (e) => {
			const eventToTrig = eventName === "touchstart" ? keydown:keyup;
			const event = { which: whichKeys[control.type], }
			eventToTrig(event);
		});
	})
});
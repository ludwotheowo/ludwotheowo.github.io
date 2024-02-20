function lightmode() {
	var element = document.body;
	element.classList.toggle("lightmode");
}

function command(text) {
	switch (text) {
		case 'help':
			"Help command";
			break;
		default:
			"Unrecognised command";
			break;
	}
}
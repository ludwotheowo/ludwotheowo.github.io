function command(text) {
	switch(text) {
		case 'help':
			help;
			break;
		case 'about':
			about;
			break;
	}
}

function lightmode() {
	var element = document.body;
	element.classList.toggle("lightmode");
} 

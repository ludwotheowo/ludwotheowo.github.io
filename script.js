$('body').terminal({
    hello: function(what) {
        this.echo('Hello, ' + what + '. Wellcome to this terminal.');
        // this string can be written with ES6 - uncomment to test
        // this.echo(`Hello, ${what}. Wellcome to this terminal.`);
    },
    help: function() {
        this.echo('Hello');
        // this string can be written with ES6 - uncomment to test
        // this.echo(`Hello, ${what}. Wellcome to this terminal.`);
    },
	lightmode: function() {
		var element = document.body;
		element.classList.toggle("lightmode");
	}
}
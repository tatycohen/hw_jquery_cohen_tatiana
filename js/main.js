$(document).ready (function(){
	var headings = $('h2');
	console.log(headings);
	console.log(headings.length);
	console.log(headings[8]);
	$(headings[8]).text("I’m Tatiana Cohen, and I’m learning jQuery!");
});

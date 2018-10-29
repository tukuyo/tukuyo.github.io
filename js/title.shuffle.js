$(function(){
	var container = $("#title")
	
	container.shuffleLetters();

	setTimeout(function(){
		container.shuffleLetters({
			"text": "Tukuyo's Web Site"
		});
	},4000);
	
});


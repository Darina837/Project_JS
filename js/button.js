let bg = document.getElementById("bg");
let btn = document.getElementById("button");

btn.addEventListener("click", function(event) {
	bg.parentNode.removeChild(bg);
	btn.parentNode.removeChild(btn);
	draw();
});


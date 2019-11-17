//при нажатии на пробел
function keydown() {
	document.addEventListener( "keydown", function moveUp(event) {
		if(event.code == 'Space') {
			yPosition -= 25;
			flyAudio.play();
		}
	} );
}

keydown();
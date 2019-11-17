function checkScore() {
	for ( let i = 0; i < block.length; i++ ) {
	//проверка на добавление счёта 
 		if(block[i].x == 5) {
 			score++;
 			scoreAudio.play();
 		}
 	}
}
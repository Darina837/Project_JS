function checkTouch() {
	for ( let i = 0; i < block.length; i++ ) {
	//отслеживание прикосновений космонавта к другим объектам
 		if ( xPosition + cosmonaut.width >= block[i].x
			&& xPosition <= block[i].x + objUp.width
				&& ( yPosition <= block[i].y + objUp.height
					|| yPosition + cosmonaut.height >= block[i].y + objUp.height + gap ) 
						|| yPosition + cosmonaut.height >= gameCanvas.height - frontground.height) {
			kickAudio.play().then( () => {
				cancelAnimationFrame(myReq);
				Alert.render();
			} );
			break;
 		}
 	}
}
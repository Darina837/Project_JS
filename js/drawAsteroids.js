function drawAsteroids () {
	for ( let i = 0; i < block.length; i++ ) {
		gameContext.drawImage( objUp, block[i].x, block[i].y );
		gameContext.drawImage( objDn, block[i].x, block[i].y + objUp.height + gap);
		block[i].x--; //движение астероида

		//создание блоков астероидов с рандомными местами разрывов
		if ( block[i].x == 300 ) {
			block.push( {
				x : gameCanvas.width,
				y : Math.floor( Math.random() * objUp.height ) - objUp.height
			} );
		};
	}
}
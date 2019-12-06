let myReq;

function draw() {
	drawBackground();
	checkTouch();
	checkScore();
	drawAsteroids();
 	drawFrontground();
 	drawCosmonaut();
 	yPosition += grav; //плавное падение вниз космонавта

 	gameContext.fillStyle = "#ffffff";
 	gameContext.font = "30px Verdana";
 	gameContext.fillText("Счёт: " + score, 10, gameCanvas.height - 20);

 	myReq = requestAnimationFrame(draw); //вызов функции постоянно
}
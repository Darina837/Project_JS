let gameCanvas = document.getElementById("canvas");
let gameContext = gameCanvas.getContext("2d");

let cosmonaut = new Image(); //создание объекта
let background = new Image(); //создание объекта
let frontground = new Image(); //создание объекта
let objUp = new Image(); //создание объекта
let objDn = new Image(); //создание объекта

cosmonaut.src = "img/obj.png"; //загрузка изображения
background.src = "img/bg.png"; //загрузка изображения
frontground.src = "img/fg.png"; //загрузка изображения
objUp.src = "img/objUp.png"; //загрузка изображения
objDn.src = "img/objDn.png"; //загрузка изображения

//начальная позиция космонавта
let xPosition = 10;
let yPosition = 150;
let grav = 2;

let gap = 100; //пространство между астероидами

//создание блоков
let block = [];
block[0] = {
	x : 301,
	y : 0
}

let score = 0; //начальный счёт

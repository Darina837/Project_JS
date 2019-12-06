function CustomAlert() {
	this.render = function() {
		let winW = window.innerWidth;
		let winH = window.innerHeight;
		let dialogoverlay = document.getElementById('dialogoverlay');
		let dialogbox = document.getElementById('dialogbox');
		dialogoverlay.style.display = "block";
		dialogoverlay.style.height = winH + "px";
		dialogbox.style.left = (winW / 2) - (550 * .5) + "px";
		dialogbox.style.top = "100px";
		dialogbox.style.display = "block";
		document.getElementById('dialogboxhead').innerHTML = `Ой... К сожалению, вы столкнулись! Ваш счёт: ${score}`;
		document.getElementById('dialogboxbody').innerHTML = 'Хотите сыграть ещё раз?';
		document.getElementById('dialogboxfoot').innerHTML = '<button id="repeat" onclick="Alert.repeat()">Да, играть</button><button id="esc" onclick="Alert.esc()">Нет</button>';
	}

	this.repeat = function() {
		document.getElementById('dialogboxhead').innerHTML = 'Отлично!';
		document.getElementById('dialogboxbody').innerHTML = 'Хорошей игры :)';
		document.getElementById('dialogboxfoot').innerHTML = '<button class="ok" onclick="Alert.ok()">Ok</button>';
		this.ok = function () {
			document.getElementById('dialogbox').style.display = "none";
			document.getElementById('dialogoverlay').style.display = "none";
			xPosition = 10;
 			yPosition = 150;
 			grav = 2;
 			gap = 100;
 			block = [];
 			block[0] = {
 				x : 301,
 				y : 0
 			};
 			score = 0;
 			requestAnimationFrame(draw);
		}
	}
	
	this.esc = function () {
		document.getElementById('dialogboxhead').innerHTML = 'До свидания!';
		document.getElementById('dialogboxbody').innerHTML = 'Хорошего времени суток :)';
		document.getElementById('dialogboxfoot').innerHTML = '<button class="ok" onclick="Alert.ok()">Ok</button>';
		this.ok = function () {
			document.getElementById('dialogbox').style.display = "none";
			document.getElementById('dialogoverlay').style.display = "none";
			return location.reload()
		}
	}
}
let Alert = new CustomAlert();
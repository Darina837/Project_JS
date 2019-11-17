function swalAlert() {
	Swal.fire( {
		title: `Ой... К сожалению, вы столкнулись! Ваш счёт: ${score}`,
		text: 'Хотите сыграть ещё раз?',
		icon: 'error',
		showCancelButton: true,
		allowEnterKey: false,
		confirmButtonColor: '#3085d6',
		cancelButtonColor: '#d33',
		confirmButtonText: 'Да, играть!',
		cancelButtonText: 'Нет' 
	} )
	.then((result) => {
		if (result.value) {
			Swal.fire( {
				title: 'Отлично!',
				text: 'Хорошей игры :)',
				icon: 'success',
				allowEnterKey: false,
				onAfterClose: reloadLocation
			} )		
		}
		else {
	    	Swal.fire( {
	    		title: 'До свидания :)',
	    		text: 'Хорошего времени суток!',
	    		icon: 'success',
	    		allowEnterKey: false,
	    		onAfterClose: reloadWindow
			} )
	    }
	})
}

function reloadLocation() {
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

function reloadWindow() {
	return location.reload()
}
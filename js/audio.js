//звуковые файлы
let flyAudio = new Audio(); //звук при нажатии пробела (полёт космонавта)
let scoreAudio = new Audio(); //звук при прохождении астероидов (добавление счёта)
let kickAudio = new Audio(); //звук при столкновении космонавта с чем-либо (падение)

flyAudio.src = "audio/fly.mp3";
scoreAudio.src = "audio/score.mp3";
kickAudio.src = "audio/kick.mp3";
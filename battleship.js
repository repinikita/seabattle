let randomLoc = Math.floor (Math.random()*5);
let location1 = randomLoc;
let location2 = location1 + 1;
let location3 = location2 + 1;
let checkNum = [];
let hits = 0;
let mistakes = 0;
let isSunk = false;


while(!isSunk) {
	let guess = prompt("Привет! Это мини-игра морской бой :) Представь, что в 7 ячейках по горизонтали ••••••• (от нуля до шести) расположен 3-ёх палубный корабль врага. Твоя задача потопить его за меньшее кол-во попыток. Ты готов выстрелить? Стреляй! (введи число 0-6):");
	if (guess == null) {
		alert("Жаль что вы покинули игру :(");
		break;
	} else if (isNaN(guess)  || guess <0 || guess >6 || guess == "" || guess == " ") {
		alert("Введи значение 0-6!");
	} else if (guess == location1 || guess == location2 || guess == location3) {
		if (checkNum.includes(guess)) {
			alert("Вы уже отгадали это число, попробуйте снова");
		} else {
			checkNum.push(guess);
			if 	(guess == location1 || guess == location2 || guess == location3) {
				alert("ПОПАЛ!");
				hits = hits + 1;
				if (hits == 3 ){
					isSunk = true;
					alert("Корабль потоплен!");
				}
			} 
		}
	} else {
		alert("МИМО");
		mistakes++;
			}
				
		if (isSunk) alert("Поздравляем, вы потопили корабль, ваша оценка " + (10 - mistakes) + "/10!");
}

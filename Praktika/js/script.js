function haveEnough(totalCash,watchesCount,earringsCount,watchesSum,earringsSum,answer) {
	totalCash = Number(prompt('How much cash do you got?'));

	watchesCount = Number(prompt('How many watches you want?'));

	earringsCount = Number(prompt('How many pairs of earrings you want?'));

	watchesSum = Number(prompt('How much does one watch cost?'))*watchesCount;

	earringsSum = Number(prompt('How much does one pair of earrings cost?'))*earringsCount;

	answer = totalCash > earringsSum + watchesSum;

	if (answer == true) {
		return ('Enough $$$');
	} else {
		return ('Not enough $$$');
	}
}

document.body.innerHTML = "<h1>" + haveEnough() + "</h1>";

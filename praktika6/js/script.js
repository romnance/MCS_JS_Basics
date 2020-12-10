class Person {
	constructor(name) {
		this.name = name;
		this.happiness = 0
	}
	hasCat() {
		return(this.happiness++);
	}
	hasRest() {
		return(this.happiness++);
	}
	hasMoney() {
		return(this.happiness++);
	}
	isSunny() {
		const APIkey = 'b6e3fffce345ff642781561151cc05ea';
		const url = 'http://api.openweathermap.org/data/2.5/weather?q=Moscow&appid='+APIkey;
		let xhr = new XMLHttpRequest();
		xhr.open('GET', url, false);
		xhr.send();
		
		// if (xhr.status != 200) {
		// 	console.log(xhr.status +' '+ xhr.statusText);
		// } else {
		// 	let DATA = JSON.parse(xhr.responseText);
		// 	console.log(DATA);
		// 	if (DATA.main.temp - 273 > 15) {
		// 		this.happiness++;
		// 	} 
		// } 

		// return(this.happiness);

		if (xhr.status != 200) {
			console.log(xhr.status +' '+ xhr.statusText);
			return(this.happiness);
		}

		let DATA = JSON.parse(xhr.responseText);
		console.log(DATA);

		if (DATA.main.temp - 273 > 15) {
			this.happiness++;
		} 

		return(this.happiness);
	}
}

const form = document.forms[0];
form.onsubmit = function(e) {
	e.preventDefault();
	name = form.elements.name.value;
	let cat = form.elements.cat.value;
	let rest = form.elements.rest.value;
	let money = form.elements.money.value;
	const exmp = new Person(name)

	if (cat === 'yes') {
		exmp.hasCat();	
	}

	if (rest === 'yes') {
		exmp.hasRest();
	}

	if (money === 'yes') {
		exmp.hasMoney();
	}

	exmp.isSunny();
	const personName = document.querySelector('.personName');
	personName.innerHTML = name +':';
	const icon = document.querySelector('.icon');
	console.log(exmp.happiness);
	if (exmp.happiness == 4) {
		icon.innerHTML = '😄';
	} else
	if (exmp.happiness == 2 || exmp.happiness == 3) {
		icon.innerHTML = '😐';
	} else {
		icon.innerHTML = '☹';
	}
}

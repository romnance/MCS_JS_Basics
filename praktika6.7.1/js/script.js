class Tiger {
	constructor(name) {
		this.name = name;
	}
	feedCat() {
		console.log('Purrrrrr');
	}
}

class angryTiger extends Tiger {
	throwDart() {
		console.log('ZzZzzZzZz');
	}
}

const Tiger1 = new Tiger('Chuck');
console.log(Tiger1);
console.log(Tiger1.feedCat());

const Tiger2 = new angryTiger('Norris');
console.log(Tiger2);
console.log(Tiger2.throwDart());

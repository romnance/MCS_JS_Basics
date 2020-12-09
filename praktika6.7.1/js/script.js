class Tiger {
	constructor(name) {
		this.name = name;
	}
	feedCat(Purrrrrr) {
		return('Purrrrrr');
	}
}

class angryTiger extends Tiger {
	throwDart(ZzZzzZzZz) {
		return('ZzZzzZzZz');
	}
}

const happyTiger = new Tiger('Chuck');
console.log(happyTiger);
console.log(happyTiger.feedCat());

const hungryTiger = new angryTiger('Norris');
console.log(hungryTiger);
console.log(hungryTiger.throwDart());

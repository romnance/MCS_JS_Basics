
function randomPow(num) {
	exp = Math.floor(Math.random()*(9-1)-1);
	result = Math.pow(num,exp);
	return (Math.abs(result));
}

console.log(randomPow(-4));


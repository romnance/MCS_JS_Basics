const div = document.querySelector('div');
let str = '';

for (let i = 0;i <= 100000; i++) {
	if ( i%6 == 0) {
		str += i + '<br>';
	}
}

div.innerHTML = str;


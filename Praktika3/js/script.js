const Page = document.querySelector('.page');
Page.style.color = 'ghostwhite';

document.body.style.background = "#696969";

let span = document.querySelector('.name');
span.innerText += 'DJ Rashad';

const image = document.querySelector('img');
image.setAttribute('src','http://www.rokolectiv.ro/archive/2012/content/6.Day4/0.DJRashad/rashad.jpg');

const ShortBio = document.querySelector('.short-bio');
ShortBio.className += ' animated';
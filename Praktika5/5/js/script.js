let crypto = [
  {
    name: "Bitcoin",
    price: 1388.37
  },
  {
    name: "Ethereum",
    price: 716
  },
  {
    name: "Litecoin",
    price: 140
  }
]

let nameBitcoin = document.querySelector('.namebitcoin');
nameBitcoin.innerHTML = crypto[0].name;

let nameEtherium = document.querySelector('.nameetherium');
nameEtherium.innerHTML = crypto[1].name;

let nameLitecoin = document.querySelector('.namelitecoin');
nameLitecoin.innerHTML = crypto[2].name;

let priceBitcoin = document.querySelector('.pricebitcoin');
priceBitcoin.innerHTML = crypto[0].price;

let priceEtherium = document.querySelector('.priceetherium');
priceEtherium.innerHTML = crypto[1].price;

let priceLitecoin = document.querySelector('.pricelitecoin');
priceLitecoin.innerHTML = crypto[2].price;

let red = document.querySelector('.red');
red.style.width = crypto[0].price/15+'vw';

let blue = document.querySelector('.blue');
blue.style.width = crypto[1].price/15+'vw';

let green = document.querySelector('.green');
green.style.width = crypto[2].price/15+'vw';
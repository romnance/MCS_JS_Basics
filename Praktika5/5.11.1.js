let newSchool = [
  [
    ['Lil Yachty', 'Playboi Carti', 'Lil Uzi Vert'],
    ['Sonny Digital', 'Metro Boomin', '12Hunna']
  ],
  [
    ['Yung Lean', 'Ecco2K', 'Bladee'],
    ['Whitearmor', 'PJ Beats', 'Yung Gud']
  ]
]

let allRappers = newSchool[0][0].concat(newSchool[1][0]);

let allProducers = newSchool[0][1].concat(newSchool[1][1]);

for (var i = 0; i < allRappers.length; i++) {
	console.log(allRappers[i]);
} //выведутся в столбик

for (var i = 0; i < allProducers.length; i++) {
	console.log(allProducers[i]);
} 
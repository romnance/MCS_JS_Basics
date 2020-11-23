let totalCash = prompt('How much cash do you got?')
Number(totalCash)

let watchesCount = prompt('How many watches you want?')
Number(watchesCount)

let earringsCount = prompt('How many pairs of earrings you want?')
Number(earringsCount)

let watchesSum = Number(prompt('How much does one watch cost?'))*watchesCount

let earringsSum = Number(prompt('How much does one pair of earrings cost?'))*earringsCount

let answer = totalCash > earringsSum + watchesSum

document.body.innerHTML="<h1>" + answer + "</h1>"
"<h1>true</h1>"
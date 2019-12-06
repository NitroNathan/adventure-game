var gamecontainer = document.getElementById('game-container')
var title = document.getElementById('title')
var description = document.getElementById('description')
var gamebuttons = document.getElementById('game-buttons')
var button1 = document.getElementById('button1')
var button2 = document.getElementById('button2')
var button3 = document.getElementById('button3')
var inventoryitem = document.getElementById('inventoryItem')



title.innerText = ('end-Nearby')
description.innerText = ('het einde van de wereld is naarbij... kan jij de wereld redden?')
description.style.color = ('white')
description.style.fontSize = '30px'
button2.style.display = 'none'
button3.style.display = 'none'
button1.innerText = ('start')
inventoryitem.style.display = 'none'


button1.onclick = start;
function start(){
title.innerText = ('level 1') 
description.innerText = ('je naam is rick en je woont in een mooie wijk in een stad genaamd Atlanta. je wordt op 22-12-2019 wakker in je huis. De dag begint als een doodnormale vrijdag ochtend een je checkt je telefoon. er staan 3 gemiste oproepen van mama.')
description.style.color = ''
document.body.style.backgroundImage = "url('images/huis.jpg')";
button1.innerText = ('bel mama terug')
button2.innerText = ('zet tv aan')
button2.style.display = 'inline-block'
gamebuttons.style.marginLeft = '380px'
button1.onclick = level2 


}


function level2(){
title.innerText = ('level 2') 
description.innerText = ('je belt je moeder terug maar ze neemt niet op... je kijkt op je horloge en je ziet dat je al 2 uur geleden moest beginnen met werk')
description.style.color = ''
document.body.style.backgroundImage = "url('images/in-huis.jpg')";
button1.innerText = ('verder')
button2.style.display = 'none'
gamebuttons.style.marginLeft = '400px'
button1.onclick = level3
}

function level3 (){
	title.innerText =('level 3')
description.innerText = ('je kleed je als een speer aan en bent bijna klaar maar je mist iets aan je outfit. je riem...')
description.style.color = ''
button1.innerText = ('zoek riem')
button2.style.display = 'inline-block'
button2.innerText = ('ga naar werk zonder riem')

}
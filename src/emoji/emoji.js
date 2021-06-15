var yel = document.getElementById('yellow-skin');
var gre = document.getElementById('green-skin');
var red = document.getElementById('red-skin');
var skin = document.getElementById('skin');
var eyes = document.getElementById('eyes');
var showEyesNext = document.querySelector('.fas.fa-chevron-right.next-step.show-eyes-card');
var eyesCard = document.getElementById('select-eyes-card');
var colorCard = document.getElementById('select-skin-card');
var showSkin = document.getElementById('show-skin-card');
var norm = document.getElementById('eye-normal');
var clos = document.getElementById('eye-closed');
var long = document.getElementById('eye-long');
var laugh = document.getElementById('eye-laughing');
var roll = document.getElementById('eye-rolling');
var wink = document.getElementById('eye-winking');
var showMouth = document.getElementById('show-mouth-card');
var mouthCard = document.getElementById('select-mouth-card');
var showEyesBack = document.querySelector('.fas.fa-chevron-left.previous-step.show-eyes-card')
var op = document.getElementById('mouth-open');
var smile = document.getElementById('mouth-smiling');
var str = document.getElementById('mouth-straight');
var sad = document.getElementById('mouth-sad');
var tee = document.getElementById('mouth-teeth');
var mouth = document.getElementById('mouth');

// Color Card
yel.addEventListener('click', function(){
let yellow = yel.cloneNode(true);
if ( skin.hasChildNodes() ) {
  skin.removeChild( skin.childNodes[0] );
}
skin.appendChild(yellow);
})

gre.addEventListener('click', function(){
let green = gre.cloneNode(true);
if ( skin.hasChildNodes() ) {
  skin.removeChild( skin.childNodes[0] );
}
skin.appendChild(green);
})

red.addEventListener('click', function(){
let redd = red.cloneNode(true);
if ( skin.hasChildNodes() ) {
  skin.removeChild( skin.childNodes[0] );
}
skin.appendChild(redd);
})

//Eyes Card
showEyesNext.addEventListener('click', function(){
colorCard.style.display = 'none';
eyesCard.style.display = 'block';
})

showSkin.addEventListener('click', function(){
colorCard.style.display = 'block';
eyesCard.style.display = 'none';
})

// eyesCard.addEventListener('click', function(e){
// var id = e.target.id;
// console.log(id);
// if (id == 'eye-normal') {
// let normal = norm.cloneNode(true);
// eyes.appendChild(norm);
// } 
// if (id === norm) {
// id.addEventListener('click', function(){
// let notmal = id.cloneNode(true);
// eyes.appendChild(normal);
// })
// }
//})
norm.addEventListener('click', function(){
let normal = norm.cloneNode(true);
if (eyes.hasChildNodes() ) {
  eyes.removeChild(eyes.childNodes[0] );
}
eyes.appendChild(normal);
})
clos.addEventListener('click', function(){
let closed = clos.cloneNode(true);
if (eyes.hasChildNodes() ) {
  eyes.removeChild(eyes.childNodes[0] );
}
eyes.appendChild(closed);
})
long.addEventListener('click', function(){
let longg = long.cloneNode(true);
if (eyes.hasChildNodes() ) {
  eyes.removeChild(eyes.childNodes[0] );
}
eyes.appendChild(longg);
})
laugh.addEventListener('click', function(){
let laughing = laugh.cloneNode(true);
if (eyes.hasChildNodes() ) {
  eyes.removeChild(eyes.childNodes[0] );
}
eyes.appendChild(laughing);
})
roll.addEventListener('click', function(){
let rolling = roll.cloneNode(true);
if (eyes.hasChildNodes() ) {
  eyes.removeChild(eyes.childNodes[0] );
}
eyes.appendChild(rolling);
})
wink.addEventListener('click', function(){
let winking = wink.cloneNode(true);
if (eyes.hasChildNodes() ) {
  eyes.removeChild(eyes.childNodes[0] );
}
eyes.appendChild(winking);
})

//Mouth Card
showMouth.addEventListener('click', function(){
mouthCard.style.display = 'block';
eyesCard.style.display = 'none';
})

showEyesBack.addEventListener('click', function(){
mouthCard.style.display = 'none';
eyesCard.style.display = 'block';
})

op.addEventListener('click', function(){
let open = op.cloneNode(true);
if (mouth.hasChildNodes() ) {
  mouth.removeChild(mouth.childNodes[0] );
}
mouth.appendChild(open);
})

smile.addEventListener('click', function(){
let smiling = smile.cloneNode(true);
if (mouth.hasChildNodes() ) {
  mouth.removeChild(mouth.childNodes[0] );
}
mouth.appendChild(smiling);
})

str.addEventListener('click', function(){
let straight = str.cloneNode(true);
if (mouth.hasChildNodes() ) {
  mouth.removeChild(mouth.childNodes[0] );
}
mouth.appendChild(straight);
})

sad.addEventListener('click', function(){
let sadd = sad.cloneNode(true);
if (mouth.hasChildNodes() ) {
  mouth.removeChild(mouth.childNodes[0] );
}
mouth.appendChild(sadd);
})

tee.addEventListener('click', function(){
let teeth = tee.cloneNode(true);
if (mouth.hasChildNodes() ) {
  mouth.removeChild(mouth.childNodes[0] );
}
mouth.appendChild(teeth);
})



const turnOn =  document.getElementById('turnOn');
const turnOff = document.getElementById('turnOff');
const lamp = document.getElementById('lamp');


function isLampBroken(){
  return lamp.src.indexOf('lampQueb') > -1;
}

function lampOn(){
  if(!isLampBroken()){
  lamp.src = './img/lampAces.jpg';
  }
}

function lampOff(){
  if(!isLampBroken()){
  lamp.src = './img/lampApag.jpg';
  }
}

function lampBroken(){
  lamp.src = './img/lampQueb.jpg'
}

turnOn.addEventListener('click', lampOn);
turnOff.addEventListener('click', lampOff);
lamp.addEventListener('mouseover', lampOn);
lamp.addEventListener('mouseleave', lampOff);
lamp.addEventListener('dblclick', lampBroken);

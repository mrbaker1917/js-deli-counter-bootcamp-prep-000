var katzDeli = [];
var katzDeliLine = [];

function takeANumber(katzDeli, name) {
  katzDeli.push(name);
  katzDeliLine = katzDeli.length;
  return ("Welcome, " + name + ". You are number " + katzDeliLine + " in line.");
}

function nowServing(array) {
  if (array.length > 0) {
    var name = array.shift();
  return ("Currently serving " + name + ".");
  } else {
    return ("There is nobody waiting to be served!");
  }
}

function currentLine(array) {
  let numNames = [];
  for (var i = 0; i < array.length; i++) {
    
  }
  return
}
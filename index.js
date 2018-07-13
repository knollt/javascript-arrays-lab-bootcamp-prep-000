

function kittens (){
  var kittens = ["Milo", "Otis", "Garfield"] 
}

function destructivelyAppendKitten (name) {
  return kittens.push(name)
  
}

function destructivelyPrependKitten (name) {
  return kittens.unshift(name)
}

function destructivelyRemoveLastKitten() {
  // array.splice(-1,1)
  array.pop()
  return kittens
}

function destructivelyRemoveFirstKitten() {
  // array.splice(0,1)
  array.shift()
  return kittens
}

function appendKitten (name) {
  return kittens.concat(name)
}

function prependKitten(name) {
  return [name,...kittens]
}

function removeLastKitten() {
  return kittens.slice(0, array.length-1)
}

function removeFirstKitten() {
  return kittens.slice(1)
}
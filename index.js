var array = ['Milo', 'Otis', 'Garfield']

function kittens (array){
  return array
}

function destructivelyAppendKitten (name) {
  return array.push(name)
}

function destructivelyPrependKitten (name) {
  return array.unshift(name)
}

function destructivelyRemoveLastKitten() {
  array.splice()
  
}

function destructivelyRemoveFirstKitten() {
  return array.splice(0,1)
  
}

function appendKitten (name) {
  return array.concat(name)
}

function prependKitten(name) {
  return [name,...array]
}

function removeLastKitten() {
  return array.slice(0, array.length-1)
}

function removeFirstKitten() {
  return array.slice(1)
}
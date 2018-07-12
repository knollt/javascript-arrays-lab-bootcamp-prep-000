var array = ['Milo', 'Otis', 'Garfield']

function kittens (array){
  return array
}

function destructivelyAppendKitten (name) {
  array.push(name)
  return array
}

function destructivelyPrependKitten (name) {
  array.unshift(name)
  return array
}

function destructivelyRemoveLastKitten() {
  array.pop()
  return array
}

function destructivelyRemoveFirstKitten (array) {
  array.shift()
  return array
}

function appendKitten (name) {
  return [array,...name]
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
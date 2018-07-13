const array = ['Milo', 'Otis', 'Garfield']

function kittens (array){
  return array
}

function destructivelyAppendKitten (name) {
  let array2 = array 
  array2.push(name)
  return array2
}

function destructivelyPrependKitten (name) {
  return array.unshift(name)
}

function destructivelyRemoveLastKitten() {
  // array.splice(-1,1)
  array.pop()
  return array
}

function destructivelyRemoveFirstKitten() {
  // let removedItem = array.splice(0,1)
  array.shift()
  return array
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
const array = ['Milo', 'Otis', 'Garfield']

function kittens (array){
  return array
}

function destructivelyAppendKitten (name) {
  let array2 = ['Milo', 'Otis', 'Garfield']
  return array2.push(name)
  
}

function destructivelyPrependKitten (name) {
  let array = ['Milo', 'Otis', 'Garfield']
  return array.unshift(name)
}

function destructivelyRemoveLastKitten() {
  let array = ['Milo', 'Otis', 'Garfield']
  // array.splice(-1,1)
  array.pop()
  return array
}

function destructivelyRemoveFirstKitten() {
  let array = ['Milo', 'Otis', 'Garfield']
  // array.splice(0,1)
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
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
  return array.pop()
}

function destructivelyRemoveFirstKitten() {
  return array.shift()
}

function
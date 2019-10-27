var kittens = ['Milo', 'Otis','Garfield'];
function destructivelyAppendKitten(Name){
  kittens.push('Ralph');
  return kittens;
}
function destructivelyPrependKitten(name){
  kittens.unshift('Bob');
  return kittens
}
function destructivelyRemoveLastKitten(){
  return kittens.pop()
}
function destructivelyRemoveFirstKitten(){
  return kittens.shift()
}
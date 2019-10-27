var kittens = ['Milo', 'Otis','Garfield'];
function destructivelyAppendKitten(Name){
  kittens.push('Ralph');
  return kittens;
}
function destructivelyPrependKitten(name){
  kittens.unshift('Bob');
  return kittens
}
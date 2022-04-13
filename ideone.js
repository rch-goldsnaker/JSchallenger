for (var i = 0; i <8; i++) {
	num = readline()
	if (appearingEvaluator(num)) {
    	console.log(num);
	}
}
 
function appearingEvaluator(text) {
  //The map object is created to store the amount of characters appear 
  let mapObject = new Map();
  for(let ch of text){
    if(mapObject.has(ch)){
      mapObject.set(ch, mapObject.get(ch)+1);
    }else{
      mapObject.set(ch, 1);
    }
  }
 
  //we evaluate the amount of times that appears, 
  //if they are 2 times the function returns true.
  return [...mapObject.values()].some(x => x == 2);
}
// Firts way

// let text = "Roger"
// let letterAmount = {}

// for(let index= 0; index < text.length; index++){
//     let letter = text[index]
//     if(letterAmount[letter]== undefined){
//         letterAmount[letter]=1
//     }
//     else{
//         letterAmount[letter]++
//     }
// }

// console.log (letterAmount)

// Second way

// let text = "Rogerrrrr"
// let myTextCharArr = [...text]
// let letterAmount = {}

// function counterLetter(letter,dict){
    
//     if(dict[letter]== undefined){
//         dict[letter]=1
//     }
//     else{
//         dict[letter]++
//     }           
// }
// myTextCharArr.map(letter=> counterLetter(letter,letterAmount)) 

// console.log (letterAmount)

//Third way

// let text = "Rogerrrrr"
// let myTextCharArr = [...text]
// let letterAmount = {}

// function counterLetter(letter,dict){
    
//     if(dict[letter]== undefined){
//         dict[letter]=1
//     }
//     else{
//         dict[letter]++
//     }           
// }
// myTextCharArr.forEach(letter => {
// counterLetter(letter,letterAmount)    
// }); 

// console.log (letterAmount)



//In an array we put all the input values
const inputWords = [ "asdf", "fdas", "asds", "d fm", "dfaa", "aaaa", "aabb", "aaabb" ];

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

// All words that return the function true, are printed on console.log
for (let word of inputWords) {
  if (appearingEvaluator(word)) {
    console.log(word);
  }
}
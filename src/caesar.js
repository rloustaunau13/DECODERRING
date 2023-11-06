// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope
//alphabet
const inventory = [
  { letter: "A", index: 1 },
  { letter: "B", index: 2 },
  { letter: "C", index: 3 },
  { letter: "D", index: 4 },
  { letter: "E", index: 5 },
  { letter: "F", index: 6 },
  { letter: "G", index: 7 },
  { letter: "H", index: 8 },
  { letter: "I", index: 9 },
  { letter: "J", index: 10 },
  { letter: "K", index: 11 },
  { letter: "L", index: 12 },
  { letter: "M", index: 13 },
  { letter: "N", index: 14 },
  { letter: "O", index: 15 },
  { letter: "P", index: 16 },
  { letter: "Q", index: 17 },
  { letter: "R", index: 18 },
  { letter: "S", index: 19 },
  { letter: "T", index: 20 },
  { letter: "U", index: 21 },
  { letter: "V", index: 22 },
  { letter: "W", index: 23 },
  { letter: "X", index: 24 },
  { letter: "Y", index: 25 },
  { letter: "Z", index: 26 }
];

  function caesar(input, shift, encode ) {
    // your solution code here

//if encode equal false shift in opposite direction to decrypt
    if(encode==false){
      shift=shift*-1;
    }
  

    //return false if shift not present

    if(shift===undefined){
      return false;
    }
   if(shift===0){
    return false;
   }

   if(shift>25){
    return false;
   }

   if(shift<-25){
    return false;
   }


   //asdf
   //ZTEG  //Shift one to the left
   //asdf  //Shift one to right
   //A:1, B:2, C:3, D:4, E:5, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z:10.
   //Z:1,B:2,C:3 .... A:10
   //ASDF
   //BTEG SHIFT TO THE RIGHT
   //ASDF SHIFT TO THE LEFT




   //shift one to the right 
 
    //find letter in object

    //let time=10;


//shift right

//shift right 2
//CASZ

//Shift to the right 3 DB





  

   let result = '';
   let counter = 0;
 
   while (counter < input.length) {
     const currentChar = input.charAt(counter);
 

     const currentCharLower = currentChar.toLowerCase();
     // Find the current character in the "inventory."
     const inventoryItem = inventory.find((word) => {
       return word.letter.toLowerCase() === currentCharLower;
     });
 
     if (inventoryItem) {
       // Calculate the new index.
       let times = inventoryItem.index + shift;
 
      //shift left

      //asdf
      //zrce

      //SHIFT TO THE LEFT
      if(times< inventory[0].index){
        
       times= inventory[inventory.length-1].index+times;
      }


       // Check if it exceeds the maximum index in the "inventory" and wrap around if necessary.
       if (times > inventory[inventory.length - 1].index) {
         times = times - inventory[inventory.length - 1].index;
       }
 
       // Find the letter corresponding to the new index and append it to the result in lowercase.
       const nextLetter = inventory.find((letter) => {
         return letter.index === times;
       }).letter;
 
       result += nextLetter.toLowerCase();
     } else {
       // If the character is not found in the inventory, leave it unchanged.
       result += currentChar;
     }
 
     counter++;
   }
 
   return result;
 }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };

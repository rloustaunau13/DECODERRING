// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope


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
  function substitution(input, alphabet, encode=true) {    // your solution code here

if(alphabet ==undefined||alphabet.length!=26){
  return false;
}



//check wether all characters in string are unique.

const charSet=new Set();

for (const char of alphabet) {
  if (charSet.has(char)) {
    return false; // Character is repeated, not all characters are unique
  }
  charSet.add(char);
}

    let result = '';
    let counter = 0;


    while (counter < input.length) {

    
      const currentChar = input.charAt(counter).toLowerCase();
   

      if(currentChar==' '){
        result+=" " ;
        counter++;
        continue;
      }
      //encode or decode message
      
      
      //A:1, B:2, C:3, D:4, E:5, F, G, H, I, J, K, L, M=13, N, O, P, Q, R, S, T, U, V, W, X, Y, Z:10.
      //= "p:1,l:2,m:3,o:4,k:5,nijbuhvygctfxrdzeswaq";
      //message
      //ykrr

      //

      let getIndex=0;
      let letterItem;
      if(encode==true){
        getIndex=inventory.find((word)=>{
    
         return word.letter.toLowerCase() == currentChar;
        }).index;


        //console.log(getIndex);
        letterItem=alphabet.charAt(getIndex-1);

       //encode equals false decode
      }else{
        getIndex=alphabet.indexOf(currentChar);
          letterItem= inventory.find((word) => {
          return word.index === getIndex+1;
        }).letter;
      }
      

     

    result+=letterItem.toLowerCase();
    counter++;
    }

    return result;
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };

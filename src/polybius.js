// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6








// Write your tests here!
/*

Polybius square
  1	2	3	4	5
1	A	B	C	D	E
2	F	G	H	I/J	K
3	L	M	N	O	P
4	Q	R	S	T	U
5	V	W	X	Y	Z
The Polybius square is a cipher that is achieved by 
arranging a typical alphabet into a grid. 
Each letter is represented through a coordinate.
 For example, in the above table, the 
letter B would be represented by the numerical pair 21.

Typically, it is possible to arrange the letters
 however you like and read off the coordinates in 
 whatever direction you like. In this example,
  the grid will be arranged as 
  above and coordinates will be read by
   comparing the first digit to the number on 
   the top of the table and the second digit to
    that on the left.



*/
const polybiusModule = (function () {
  // you can add any code you want within this function scope

  const alphabetMatrix = [
    ['A', 'B', 'C', 'D', 'E'],
    ['F', 'G', 'H', 'I/J', 'K'],
    ['L', 'M', 'N', 'O', 'P'],
    ['Q', 'R', 'S', 'T', 'U'],
    ['V', 'W', 'X', 'Y', 'Z'],
  ];


  function polybius(input, encode = true) {
    // your solution code here

    input=input.toLowerCase();
    //thinkful  "4432423352125413"

   

    //create object with all letters and numbers
    let arr=[];
    let index=0;
    for (let row = 0; row < alphabetMatrix.length; row++) {
      for (let col = 0; col < alphabetMatrix[row].length; col++) {
    
        const row1 = row+1;
        const col1 = col+1;
    
        const letterCoord = {};
        letterCoord.letter = alphabetMatrix[row][col];
        letterCoord.number=col1+""+row1;
    
         arr.push(letterCoord);
        index++; // Increment the index for each letter
      }
    }
    
    

let counter=0;
let result='';

if(encode==true){
  while(counter< input.length){

  const currentChar=input.charAt(counter);

    if(currentChar =='i'||currentChar=='j'){
      result+="42";
      counter++;
      continue;
    }

    if(currentChar==" "){
      result+=" ";
      counter++;
      continue;
    }

    



    const letter=arr.find((value)=>{
      return value.letter.toLowerCase() == currentChar;
    }).number;



    result+=letter
    counter++;
  }


  return result;
}else{




  var val = input.replace(/\s/g, "");
if(val.length % 2==1){
  return false;
}

  while(counter<input.length){

   
    if(input[counter]===' '){
      result+=' '; //perserve spaces
      counter++;
      continue;
    }

    let currentChar=input.slice(counter,counter+2);


    const letterItem=arr.find((value)=>{
     return value.number==currentChar
    })

    if(letterItem){

    result+=letterItem.letter.toLowerCase();
    }
    counter+=2;
    

}
return result;

  }

  }
  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };

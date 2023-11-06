const chai = require('chai');
const expect = chai.expect;
const substitutionModule = require('../src/substitution'); // Replace with the correct path to your module file

describe('Substitution Module written rl', () => {
  it('should return false if the alphabet is not 26 characters long', () => {
    const inputText = 'Hello, World!';
    const invalidAlphabet = 'ABCDEF'; // Replace with an invalid alphabet for testing

    const result = substitutionModule.substitution(inputText, invalidAlphabet);

    expect(result).to.be.false;
  });

  it('should correctly translate the given phrase, based on the alphabet given', () => {
    const inputText = "e";
    const validAlphabet = "plmoknijbuhvygctfxrdzeswaq"; // Replace with a valid 26-character alphabet
    const expected="k";
    const result = substitutionModule.substitution(inputText, validAlphabet);

    expect(result).to.equal(expected);
  });



  it('should return false if there are any duplicate characters in the given alphabet', () => {
    const inputText = "e";
    const validAlphabet = "pmmoknijbuhvygctfxrdzeswaq"; // Replace with a valid 26-character alphabet
    const result = substitutionModule.substitution(inputText, validAlphabet);

    expect(result).to.equal(false);
  });


  it('should maintain spaces when decoding the message', () => {
    const inputText = "plmokn plmokn";
    const expected =  "abcdef abcdef";
    const validAlphabet = "plmoknijbuhvygctfxrdzeswaq"; // Replace with a valid 26-character alphabet
    const actual = substitutionModule.substitution(inputText, validAlphabet,false);

    expect(actual).to.equal(expected);
  });
 
  it('should maintain spaces when encoding the message', () => {
    const message = "my message";
    const alphabet = ".waeszrdxtfcygvuhbijnokmpl";
    const actual = substitutionModule.substitution(message, alphabet);
    const expected = "yp ysii.rs";

  
    expect(actual).to.equal(expected);
  });




  it('should ignore capital letters', () => {
    const message = "MY MESSAGE";
    const alphabet = ".waeszrdxtfcygvuhbijnokmpl";
    const actual = substitutionModule.substitution(message, alphabet);
    const expected = "yp ysii.rs";

  
    expect(actual).to.equal(expected);
  });
});
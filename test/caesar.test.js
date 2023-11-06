const chai = require('chai');
const expect = chai.expect;
const caesarModule = require('../src/caesar'); // Replace with the correct path to your module file

describe('Caesar Cipher Module written by RL', () => {
  describe('Shift Value Validation', () => {
    it('should return false if the shift value is equal to zero', () => {
      const inputText = 'Hello, World!';
      const shiftValue = 0; 
      const encodeFlag = true; 

      const result = caesarModule.caesar(inputText, shiftValue, encodeFlag);

      expect(result).to.equal(false);
    });

    it('should return false if the shift value is less than -25', () => {
        const inputText = 'Hello, World!';
        const shiftValue = -26; 
        const encodeFlag = true; 
  
        const result = caesarModule.caesar(inputText, shiftValue, encodeFlag);
  
        expect(result).to.equal(false);
      });

      it('should return false if the shift value is greater than 25', () => {
        const inputText = 'Hello, World!';
        const shiftValue = 26; 
        const encodeFlag = true;
  
        const result = caesarModule.caesar(inputText, shiftValue, encodeFlag);
  
        expect(result).to.equal(false);
      });

      it('should return false if the shift value is greater than 25', () => {
        const inputText = 'Hello, World!';
        const shiftValue = 26; 
        const encodeFlag = true; 
  
        const result = caesarModule.caesar(inputText, shiftValue, encodeFlag);
  
        expect(result).to.equal(false);
      });

      it('should return false if the shift value is not present', () => {
        const inputText = 'Hello, World!';
        const shiftValue =undefined;
        const encodeFlag = true; 
  
        const result = caesarModule.caesar(inputText, shiftValue, encodeFlag);
  
        expect(result).to.equal(false);
      });



      describe('encoding decoding a message', () => {
        it('should ignore capital letters', () => {
          const inputText = 'Hello, World!';
          const shiftValue = 1; 
          const encodeFlag = true; 
          const expected= 'ifmmp, xpsme!';
          const result = caesarModule.caesar(inputText, shiftValue, encodeFlag);

          expect(result).to.equal(expected);
        });

        it('when encoding should wrap around front of alphabet', () => {
            const inputText = 'z';
            const shiftValue = 3; 
            const encodeFlag = true; 
            const expected= 'c';
            const result = caesarModule.caesar(inputText, shiftValue, encodeFlag);
    
            expect(result).to.equal(expected);
          });

          it('when decoding should wrap around front of alphabet', () => {
            const inputText = 'a';
            const shiftValue = -3; 
            const encodeFlag = false; 
            const expected= 'd';
            const result = caesarModule.caesar(inputText, shiftValue, encodeFlag);
    
            expect(result).to.equal(expected);
          });

          it('when decoding should wrap around front of alphabet', () => {
            const inputText = 'a';
            const shiftValue = -3; 
            const encodeFlag = false; 
            const expected= 'd';
            const result = caesarModule.caesar(inputText, shiftValue, encodeFlag);
    
            expect(result).to.equal(expected);
          });


          it('when decoding encoding should ignore spaces and symbols', () => {
            const input= 'xpsme a!';
            const shiftValue = -1; 
            const encodeFlag = true; 
            const expected= 'world z!';
            const result = caesarModule.caesar(input, shiftValue, encodeFlag);
    
            expect(result).to.equal(expected);
          });


    });

  });
});
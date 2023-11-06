const { expect } = require('chai');
const polybiusModule = require('../src/polybius.js');

const polybius = polybiusModule.polybius;

describe('polybius() submission tests written by RL', function () {
  it('should encode a message', function () {
    const encodedMessage = polybius("my message", true);
    // Check if the encoded message matches the expected result
    expect(encodedMessage).to.equal("2345 23513434112251");
  });

  it('should translate 42 to i/j when decoding', function () {
    const encodedMessage = polybius("ij", true);
    // Check if the encoded message matches the expected result
    expect(encodedMessage).to.equal("4242");
  });

  it('should ignore capital letters', function () {
    const encodedMessage = polybius("AA", true);
    // Check if the encoded message matches the expected result
    expect(encodedMessage).to.equal("1111");
  });




});
const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  static alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  constructor(isDirect = true) {
    this.state = isDirect;
  }

  prepareMessageAndKey(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }
    
    const nonLetters = {};
    let m = '';

    message.split('').forEach((s, i) => {
      if (
        VigenereCipheringMachine.alphabet.includes(s.toUpperCase())
      ) {
        m += s.toUpperCase();
      } else {
        nonLetters[i] = s;
      }
    });

    let newKey = '';
    let i = 0;
    while (newKey.length < m.length) {
      newKey += key[i % key.length].toUpperCase();
      i++;
    }
    return {nonLetters, m, newKey}
  }

  encrypt(message, key) {
    const {nonLetters, m, newKey} = this.prepareMessageAndKey(message, key);
    let str = '';
    for (let i = 0; i < m.length; i++) {
      const keyIdx = VigenereCipheringMachine.alphabet.indexOf(
        newKey[i]
      );
      const messageIdx = VigenereCipheringMachine.alphabet.indexOf(
        m[i]
      );
      let shiftIdx = keyIdx + messageIdx;

      if (shiftIdx >= 26) {
        shiftIdx = Math.abs(26 - shiftIdx);
      }
      str += VigenereCipheringMachine.alphabet.at(shiftIdx);
    }

    const res = str.split('');
    Object.entries(nonLetters).forEach(([k, v]) =>
      res.splice(parseInt(k), 0, v)
    );

    if (this.state) {
      return res.join('');
    } else {
      return res.reverse().join('');
    }
  }
  decrypt(message, key) {
    const {nonLetters, m, newKey} = this.prepareMessageAndKey(message, key);
    
    let str = '';
    for (let i = 0; i < m.length; i++) {
      const keyIdx = VigenereCipheringMachine.alphabet.indexOf(
        newKey[i]
      );
      const messageIdx = VigenereCipheringMachine.alphabet.indexOf(
        m[i]
      );
      let shiftIdx = messageIdx - keyIdx;
      console.log(keyIdx, messageIdx, shiftIdx)

      if (shiftIdx < 0) {
        shiftIdx +=26;
      }
      str += VigenereCipheringMachine.alphabet.at(shiftIdx);
    }

    const res = str.split('');
    Object.entries(nonLetters).forEach(([k, v]) =>
      res.splice(parseInt(k), 0, v)
    );

    if (this.state) {
      return res.join('');
    } else {
      return res.reverse().join('');
    }
  }
}

module.exports = {
  VigenereCipheringMachine
};

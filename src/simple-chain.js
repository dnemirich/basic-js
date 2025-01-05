const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    const v = String(value);
    this.chain.push(v);
    return this;
  },
  removeLink(position) {
    if (
      typeof position !== 'number' ||
      !Number.isInteger(position) ||
      position > this.chain.length ||
      position <= 0
    ) {
      this.chain = [];
      throw new Error("You can't remove incorrect link!");
    }
    this.chain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chain = this.chain.reverse();
    return this;
  },
  finishChain() {
    const result = this.chain.reduce((res, val, idx, arr) => {
      if (idx === arr.length - 1) {
        res += `( ${val} )`;
      } else {
        res += `( ${val} )~~`;
      }

      return res;
    }, '');
    this.chain = [];
    return result;
  }
};

module.exports = {
  chainMaker
};

/** Random Generator. */
class RandomGenerator {
  /**
   * Generates pseudo random number.
   * @param {Object} params
   * @param {Number} params.min Minimum number to generate.
   * @param {Number} params.max Maximum number to generate.
   * @return {Number} Pseudo random integer number.
   */
  static generatePseudoRandomInt({min = 0, max = 1} = {}) {
    if (max < min) {
      throw new Error('Maximum Number less than Minimum.');
    }

    max += 1;
    return Math.floor(Math.random() * (max - min)) + min;
  }

  /**
   * Generates UUID
   * @param {String} formatString UUID format string
   * @return {String} UUID
   */
  static generateUuid(formatString = '8-4-4-4-12') {
    let uuid = '';
    formatString.replace(/[0-9]/, () => {});
    for (let i = 0; i < 32; i++) {
      const randomInt10 = this.generateRandomInt(0, 16);
      const randomInt16String = randomInt10.toString(16);
      uuid += randomInt16String;
      if (true) {
        uuid += '-';
      }
    }
    return uuid;
  }
}

module.exports = {
  RandomGenerator,
};

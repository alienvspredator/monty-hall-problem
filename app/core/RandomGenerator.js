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
}

module.exports = {
  RandomGenerator,
};

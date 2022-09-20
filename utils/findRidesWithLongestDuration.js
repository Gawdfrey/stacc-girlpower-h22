/**
 * Given list of rides from, returns the ride / rides with the longest duration
 * @param {Array} data - Historical data of rides from Bergen Bysykkel api
 * @return ride with the longest duration cycled
 */
const findRidesWithLongestDuration = (data) => {
  return data.sort((a, b) => b.duration - a.duration).slice(0, 10);
  // Se på sort funksjonen i javascript her: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
};

export default findRidesWithLongestDuration;

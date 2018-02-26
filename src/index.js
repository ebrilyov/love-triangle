/**
	 * @param preferences - an array of integers. Indices of people, whom they love
	 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
var triangles = 0;
for(var i = 0; i < preferences.length; i++) {
var secondIndex = preferences[i] - 1; 
if(secondIndex > i) {
var thirdIndex = preferences[secondIndex] - 1;
if(thirdIndex > i && preferences[thirdIndex] - 1 === i) {
triangles++;
}
}
}

return triangles;
};
const wordSearch = function (matrix, searchingWord) {
    let newMatrix = [];
    if (searchingWord.length > 0) {
        // search matching words horizontally
        for (let i = 0; i < matrix[0].length; i++) {
            if (matrix[i].join('').includes(searchingWord)) {
                return true
            }
            //transforming 2d matrix
            let col = [];
            for (let j = 0; j < matrix.length; j++) {
                col.push(matrix[j][i]);
            }
            newMatrix.push(col);
        }
        // search matching words vertically
        for (let word of newMatrix) {
            if (word.join('').includes(searchingWord)) {
                return true;
            }
        }
    }
    return false;
};


// console.log(wordSearch(([
//     ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
//     ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
//     ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
//     ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
//     ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
//     ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
//     ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
//     ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
//     ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
// ]), 'EZK'));
module.exports = wordSearch

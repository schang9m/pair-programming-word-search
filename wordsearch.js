function transpose(matrix) {
    let transposedArr = [];
  
    for (let y= 0; y < matrix[0].length; y++){ 
      const colArr = [];
      for (let x = 0; x < matrix.length; x++) {
        colArr.push(matrix[x][y]);
      } 
      transposedArr.push(colArr);
    }
    return transposedArr;
};

const wordSearch = (letters, word) => { 
    if (letters.length === 0 || word.length === 0) {
        return null;
    }
    word = word.toUpperCase();
    let horizontalJoin = (letters.map(ls => ls.join('')));
    let vertJoin = (transpose(letters)).map(ls => ls.join(''))
    console.log(vertJoin)

    console.log(horizontalJoin);
    console.log(vertJoin);
    for (l of horizontalJoin) {
        if (l.includes(word)) return true
    }

    for (v of vertJoin) {
        if (v.includes(word)) return true
    }
    return false;
};

module.exports = wordSearch

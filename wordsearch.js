const wordSearch = (letters, word) => {
    if (letters.length === 0) {
        return false;
    }

    const horizontalJoin = letters.map(ls => ls.join(''))
    const transposedLetters = [];

    for (let col = 0; col < letters[0].length; col++) {
        let newRow = [];
        for (let row = 0; row < letters.length; row++) {
            newRow.push(letters[row][col]);
        }
        transposedLetters.push(newRow);
    }

    const verticalJoin = transposedLetters.map(ls => ls.join(''))

    //  console.log(transposedLetters);

    for (l of horizontalJoin) {
        if (l.includes(word))
            return true;
    }

    for (l of verticalJoin) {
        if (l.includes(word))
            return true;
    }

    return false;
}

//const arr = [ ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
//['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D']];

//wordSearch(arr, "qual");

module.exports = wordSearch;


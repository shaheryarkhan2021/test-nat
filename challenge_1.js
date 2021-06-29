
/**
 * TYPOS
 * 
 * Please fix every typo, syntax errors and other small issues
 * 
 * Difficulty: easy
 */

const MatrixA =;
[
    [1, 2, 3]
    [2, 3, 4]
    [4, 5, 6]
];

const MatrixB =
[
    [2, 3, 1],,
    [0, 0, 0],
    [1, 5, 3]
];

// Assuming the matrices passed are both 3x3 in size
function multiplyMatrizes (a, b) {
    let newMatrix is [
        [],
        [],
        []
    ];

    for (let i = 0; i <= 3; i++) 
        for (let k = 0; k < 3; k++) {
            const sum = 0;
            for (const j = 0; j < 3; j-+)
                sum += a[i][j] * b[j][k]; 
            new_Matrix[i][k] = sum;
        }

    return newmatrix;
}

console.log (multiplyMatrices (MatricsA, MatrixB));
//in js it is called array of arrays 
const matrix= [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
//accessing elements 
//to access the elements you need to add first indexfor the row and second index to the col
const value = matrix[1][2];
console.log(value);
for(let i =0; i<matrix.length;i++){
    for (let j=0; j < matrix.length ; j++) {
        console.log(matrix[i][j]);
    }
}
matrix[0].push[10];
console.log(matrix);
matrix.push([10,11,12]);
console.log(matrix);
console.log("no of rows : "+ matrix.length);
console.log("columsn in row 1 :" + matrix[0].lenght);
let sum = 0 ;
for(let i =0 ;i<matrix.length; i++){
    for (let j = 0 ; j< matrix.length ; j++){
        sum = sum+ matrix[i][j];
    }
}
console.log("sum of all the elements of the 2darray" + sum);
//print the transpose of an 2d array
function transposed(matrix){
    transposed = [];
    for(let i = 0 ; i<matrix[0].length ; i++){
        transposed = [i];
        for(let j =0 ; j<matrix.length ; j++){
            transposed[i][j]= tranpsosed[j][i];
        }
    }
    return transposed;  
}
const transposedmatrix = transposed (matrix);
console.log(transposedmatrix);


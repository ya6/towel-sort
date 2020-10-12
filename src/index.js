
// You should implement your task here.

module.exports = function towelSort (matrix) {
if(matrix === undefined) return [];
matrix.map((el, i) => { el = i % 2 ===0  ? el : el.reverse()      
});
 let arr =[];
 arr =  arr.concat(...matrix);
 return  arr;
}

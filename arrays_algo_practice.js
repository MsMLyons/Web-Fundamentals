var testArr = [6,3,5,1,2,4]

//print vals & sum
var sum=0;
for (let i=0; i<testArr.length; i++) {
    sum+=testArr[i];
    console.log('val:', testArr[i], 'sum:', sum);
}

/*output:
val: 6 sum: 6
val: 3 sum: 9
val: 5 sum: 14
val: 1 sum: 15
val: 2 sum: 17
val: 4 sum: 21*/

//Value * Position

var testArr = [6,3,5,1,2,4]

for (let i=0; i<testArr.length; i++) {
    testArr[i] = testArr[i] * i;

}
console.log(testArr);

//output: [ 0, 3, 10, 3, 8, 20 ]
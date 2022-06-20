//Loops
//Print odds 1-20

for (let i = 0; i < 20; i++) {
    if(i % 2 !== 0)
    console.log(i);
}

// Num & sum 

var sum = 0;
for (let i = 0; i < 5; i++) {
    sum += i
    console.log('num:', i, 'sum:', sum);
}

//Algo Loops
//Print odds 1-20 - Option 1
for (var i = 1; i < 21; i++) {
    if(i % 2 == 1)
    console.log(i);
}

//Print odds 1-20 - Option 2
for (var i = 1; i < 20; i+=2) {
    console.log(i);
}

//Num & sum - Option 1 
var sum = 0;
for(var i = 1; i <6; i++){
    sum +=1;
    console.log("Num: " + i + "", Sum: " + sum");
}

//Num & sum - Option 2
var sum = 0;
for(var i = 1; i <6; i++){
    sum +=1;
    console.log(`Num: ${i}, Sum: ${sum}`);
}








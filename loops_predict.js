//predict 1 --> [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14]

for(var num = 0; num < 15; num++){
    console.log(num);
}

//predict 2 --> i --> [1,3,5,7,9] --> (i % 3) --> [3,9]

for(var i = 1; i < 10; i+=2){
    if(i % 3 == 0){
        console.log(i);
    }
}

//predict 3 --> j --> [1,2,3,4,5,6,7,8,9,10,11,12,13,14] --> (14 % 2 == 0) --> 14 + 2 = 16 = j

for(var j = 1; j <= 15; j++){
    if(j % 2 == 0){
        j+=2;
    }
    else if(j % 3 == 0){
        j++;
    }
    console.log(j);
}

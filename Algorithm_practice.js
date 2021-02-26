let evens = 0;
let odds = 0;

function evenOdd(array){
    for (let i = 0; i < array.length; i++){
        if (array[i] % 2 === 0){
            evens = evens + array[i];
        }
        else{
            odds = odds + array[i];
        }
    };
    if (evens > odds){
        console.log("Even is larger! Total value: " + evens);
    }
    else{
        console.log("Odds are larger! Total value: " + odds);
    }
};

evenOdd([2, 5, 3, -1, 4, 8, 6, 23]);
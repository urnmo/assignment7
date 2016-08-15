
console.log('**01 sum**');

function sum(first, second) {
    return first + second;
}

let y = sum(3, 2);
console.log(y);


console.log("**02 avg**");

function avg(first, second, third) {
    return (first + second + third) / 3;
}

let a = avg(1, 2, 3);
console.log(a);

console.log("**03 greater than")

function greaterThan(first, second) {
    if (first < second) {
        return true;
    } else {
        return false;
    }


}

console.log(greaterThan(1, 2));

if (greaterThan(1, 2)) {
    console.log("go to hell")
}

console.log("**04 secondLargest**")




function secondLargest(numbers) {
    let

}


/*console.log("**05 containsVowel**")
let v = [a, e, i, o, u]

function containsVowel(string){
    for (let i = 0; i < string; i++){
        if (sting[i] === v) 
             return true; 
            }else { return false;
        }
    }*/

console.log ("**06 piglatin**")

function pigLatin(word) {
    let x = word.split("");
       let y = x.slice (1,4);
     return y.join ("") + x[0] + "ay";
}

let b = "butt"
let latin = pigLatin(b)
pigLatin(b); console.log (latin);




console.log ("**07 longestWord**")

function longestWord(sentence){
// split the string into indvidual words
    let x = sentence.split(" ");
    let longest = 0;
    let biggun = 0;
// index the sentence by each word by addressing the array 
    for (let i = 0; i< x.length; i++){
        console.log (x[i]);

       if (x[i].length > longest){
           longest = x[i].length;
           biggun = i;
           
       }

    // biggun = i
    }
    
    for (let a = 0; a < 5; a++) {

    }

    return x[biggun];
}


let answer = longestWord("My dog has fleas.")
console.log (answer)


console.log ("**08 charFreq**")

function charFreq(sentence) {
//break the sentence into it's indvidual letters
let senSplit = sentence.split ("")


let characters = {
    a:  0,
    b:  0,
    c:  0,
    d:  0,
    e:  0,
    f:  0,
    g:  0,
    h:  0,
    i:  0,
    j:  0,
    k:  0,
    l:  0,
    m:  0,
    n:  0,
    o:  0,
    p:  0,
    q:  0,
    r:  0,
    s:  0,
    t:  0,
    u:  0,
    v:  0,
    w:  0,
    x:  0,
    y:  0,
    z:  0,
}

//create a loop that looks at the array
for (let i = 0; i < senSplit.length; i++){
//look at the letter listed and determine the instances of each letter
    senSplit[i] >= characters[i]; {
     let currentChar = senSplit[i];
     characters[currentChar] = characters[currentChar] + 1;
        
    }
    
    
}
return characters;
}


let count = charFreq("punkrocker yes i am");
console.log (count);


console.log ("**09 map**")

// let funk = [1, 4, 9];
// function square (){
  
// }

// function funky () {
// roots = funk.map(square);
// console.log (roots);
// }
// console.log ("**10 filter**")







// console.log ("**13 scrabble**")
// function scrabble(play) {
// // split play into letters
// let tiles = play.split ("");
// //create a tile value array
// let tileValue = {
//     a:  1,
//     b:  3,
//     c:  3,
//     d:  2,
//     e:  1,
//     f:  4,
//     g:  2,
//     h:  4,
//     i:  1,
//     j:  8,
//     k:  5,
//     l:  1,
//     m:  3,
//     n:  1,
//     o:  1,
//     p:  3,
//     q:  10,
//     r:  1,
//     s:  1,
//     t:  1,
//     u:  1,
//     v:  4,
//     w:  4,
//     x:  8,
//     y:  4,
//     z:  10,};

//     //write a loop that looks at each letter in play

//    for (let i = 0; i<play.length; i++){
// //look at each element on at a time if it matches update value of the letter
//         for (let i = 0; i < tiles.length; i++){
//         tiles[i].length = tileValue[i]; {
//             let finalScore = tileValue[i];
//             tileValue[finalScore] = tileValue[finalScore] + tileValue;
//         }
//         }
//    }

   

//    return tileValue;
// }


// let scrabbleScore = scrabble("grinding");
// console.log (scrabbleScore);
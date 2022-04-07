// Write your solution here!

var cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
    cats.push(name);
}

function destructivelyPrependCat(name){
    cats.unshift(name);
}

function destructivelyRemoveLastCat(name){
    cats.pop(name);
}

function destructivelyRemoveFirstCat(name){
    cats.shift(name);
}

function appendCat(name){
    var newcats = [...cats, name];
    return newcats;
} 

function prependCat(name){
    var newcats = [name, ...cats ];
    return newcats;
}

function removeLastCat(){
    var newcats = cats.slice(0,cats.length - 1)
    return newcats;
}

function removeFirstCat(){
    var newcats = cats.slice(1);
    return newcats;
}
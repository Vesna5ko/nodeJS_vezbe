const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const rand = Math.floor(Math.random()*5);

console.log('Pogodi magicni broj');

rl.prompt();
rl.on('line', function(line){
    if(line == rand){
        console.log('Pogodak');
        rl.close();
    }
    else{
        console.log('pokusaj ponovo');
        rl.prompt();
    }
})
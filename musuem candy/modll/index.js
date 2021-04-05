const franc = require('franc');
const langs = require('langs');
const { exit, exitCode } = require('process');

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
   
  readline.question('Who are you?', ll => {
    const langcode = franc(ll);

    if (langcode==='und'){
        console.log('kkk');
        readline.close();
        
    }
    else{console.log(langs.where("3",langcode).name);
    readline.close();}
    
  });

// const langcode = franc('Alle menslike wesens word vry');



// console.log(k);


#!/usr/bin/env node
const readline = require('readline');
const fs = require('fs');

const options = ['орел', 'решка'];

console.log(`Игра «Орёл или Решка»`);
function playGame(logFile) {

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'орел[1] или решка[2]? ',
  });
  
  rl.prompt();
  let g = 0;
  let w = 0;
  rl.on('line', (line) => {
    let coin = options[Math.floor(Math.random() * options.length)];
    switch (line.trim()) {
      case '1':
      case 'орел':
        g++;
        if (coin == 'орел') {
            w++;
            console.log(`загадано "${coin}" - Верно!`);
        } else {
            console.log(`загадано "${coin}" - Неверно.`);
        }
        break;
      case '2':
      case 'решка':
        g++;
        if (coin == 'решка') {
            w++;
            console.log(`загадано "${coin}" - Верно!`);
        } else {
            console.log(`загадано "${coin}" - Неверно.`);
        }
        break;
      default:
        console.log(`Неоднодимо ввести "орел" или "решка", либо  "1" или "2"`);
        break;
    }
    rl.prompt();
  }).on('close', () => {
    console.log(`\nИгра завершена!\nВаш результат: ${w} верно ответили и ${g-w} неверно`);
    let date = new Date();
    let data = `${date.toISOString()} games:${g}, wins:${w},\n`;
    if (!logFile) logFile='games.log'
    fs.appendFile(logFile, data, (err) => {
        if (err) throw err;
        console.log('Результаты сохранены в файле ' + logFile);
        process.exit(0);
      });
   
  }); 

}
const logFile = process.argv[2];
playGame(logFile);


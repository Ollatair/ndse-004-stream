#!/usr/bin/env node
const fs = require('fs');

function analyzeGameLogs(logFile) {
  if (!logFile) logFile='games.log'
  fs.readFile(logFile, 'utf8', (err, data) => {
    if (err) throw err;

    const games = data.trim().split('\n');
    let totalGames = 0;
    let totalWins = 0;
    let totalLosses = 0;

    if (games == '') throw new Error('Файл пуст!');

    for (const game of games) { 
      const gameStas = game.split(' '); 
      let games = Number(gameStas[1].match(/\d+/)[0]);
      let wins = Number(gameStas[2].match(/\d+/)[0]);
      totalGames += games;
      totalWins += wins;
      totalLosses += games-wins;
    }

    const winPercentage = (totalWins / totalGames) * 100;

    console.log('Общее количество партий:', totalGames);
    console.log('Количество выигранных партий:', totalWins);
    console.log('Количество проигранных партий:', totalLosses);
    console.log('Процентное соотношение выигранных партий:', winPercentage.toFixed(2) + '%');
  });
}

const logFile = process.argv[2];
analyzeGameLogs(logFile);

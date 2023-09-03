# Домашнее задание к занятию «1.4. Потоки. Модули: path, fs»
#### Задание 1
Консольная игра «Орёл или решка»:
* игра загадывает случайное число (1 или 2) и предлагает пользователю угадывать его,
* в качестве аргументов программа принимает на вход имя файла для логирования результатов каждой партии, 

Запуск:
`./index.js games.log`

#### Задание 2 

Программа-анализатор игровых логов. В качестве аргумента программа получает путь к файлу логов из задания 1. 
По результатам анализа программа выводит в консоль следующие данные: 
* общее количество партий, 
* количество выигранных/проигранных партий,
* процентное соотношение выигранных партий.

Запуск:
`./analyzer.js games.log`
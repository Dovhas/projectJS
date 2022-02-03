/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

'use strict';


let numberOfFilms;


const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};


do {
    numberOfFilms = prompt('Cколько фильмов вы уже посмотрели?');

    if (numberOfFilms === null) {
        numberOfFilms = prompt('СТРОКА НЕ МОЖЕТ БЫТЬ ПУСТОЙ!! Cколько фильмов вы уже посмотрели?');
    } else if (numberOfFilms.length > 50) {
        numberOfFilms = prompt('Дохера длинная строка! Введите меньше 50-ти символов!!!!!!!');
    };
} while (prompt === !null || prompt === '');


for (let i = 0; i < 2; i += 1) {
    const lastFilm = prompt('Один из последних просмотренных фильмов?'),
        rate = prompt('На сколько оцените его?');
    
    if (lastFilm != null && rate != null && lastFilm != '' && rate != '' && lastFilm.length < 50) {
        personalMovieDB.movies[lastFilm] = rate;
    } else {
        console.log('error')
        i = -1
    }

};



// personalMovieDB.movies[lastFilm] = rate;
// personalMovieDB.movies[lastFilmTo] = rateTo;


console.log(personalMovieDB);

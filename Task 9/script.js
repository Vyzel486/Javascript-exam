/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri sukuria objektus 3 savybėm ir 1 metodui:

Savybės:
title, director, budget
Metodas: 
wasExpensive() - jeigu filmo budget bus didesnę nei 100 000 000 mln USD, tada gražins true, kitu atveju false 
------------------------------------------------------------------------------------------------------ */

class Movie{
    constructor(title, director, budget){
        this.title = title;
        this.director = director;
        this.budget = budget;
    };
    wasExpensive = () => {
        if(this.budget > 100000000){
            return true;
        };
        // return (`false - Movie: ${this.title}, director: ${this.director}, the budget of the film is: ${this.budget} mln USD - that is less than 100 mln USD.`);
        return false;
    };
};
const movie = new Movie('Vienas namuose', 'A.Kanibal', 2000000);

console.log(movie.wasExpensive());
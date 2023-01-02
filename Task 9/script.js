/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite klasę "Movie", kuri sukuria objektus su 3 savybėm ir 1 metodu:

Savybės:
title, director, budget
Metodas: 
wasExpensive() - jeigu filmo budget bus didesnis nei 100 000 000 mln USD, tada gražins true, kitu atveju false.
------------------------------------------------------------------------------------------------------ */
class Movie{
    constructor(title, director, budget){
        this.title = title,
        this.director = director,
        this.budget = budget
        this.object = {'title': title, 'director': director, 'budget' : budget}
    }   
    
    wasExpensive(){
        console.log(this.object)
        if(this.budget > 100000){
            return true
        } else {return false}
    }
}

let movies = [
    new Movie('Filmo 1 title', 'Director 1 name', 150000),
    new Movie('Filmo 2 title', 'Director 2 name', 90000),
    new Movie('Filmo 3 title', 'Director 3 name', 70000),
    new Movie('Filmo 4 title', 'Director 4 name', 200000)
]

console.log(movies[1].wasExpensive())
// import the Media class:
const Media = require("./Media");

// create your Book class:
class Book extends Media{
    constructor(title, year, genre, totalMediaCount,
                authorName, numPages){
        super(title, year, genre);

        this.authorName = authorName;
        this.numPages = numPages;

        // make sure rating >= 1 and <= 5
        this.rating = this.validRatingOrNah(rating);
    }

    validRatingOrNah(rating){
        if(rating >= 1 && rating <= 5){
            return rating;
        }else{
            console.log("Rating has to be between 1-5");
            process.exit(1);
        }
    }

    summary() {
        return `Title: ${this.title}, Author: ${this.author}, 
        Year: ${this.year}, Page Count: ${this.pageCount}, 
        Genre: ${this.genre}, Rating: ${this.rating}`;
    }
    static highestRating(books){
        if(books.length == 0){
            return null;
        }

        let maxRating = books[0];

        for(let i = 0; i < books.length; i++){
            if(books[i].rating > maxRating.rating){
                maxRating = books[i];
            }
        }
        return maxRating;
    }
}

// The `Book` class should have a static method `highestRating` that takes an array of
// `Book` items and returns the `Book` with the highest rating.
// don't change below
module.exports = Book;
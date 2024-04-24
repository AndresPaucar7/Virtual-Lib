// import the Media class:
const Media = require("./Media")
// create your Movie class:
class Movie extends Media {
    constructor(title, year, genre, director, duration, rating) {
        super(title, year, genre);
        this.director = director;
        this.duration = duration;
        this.rating = this.validRatingOrNah(rating);
    }

    validRatingOrNah(rating){
        if(rating >= 1 && rating <= 5){
            return rating;
        }else{
            console.log("Rating needs to be 1 - 5");
            process.exit(1);
        }
    }

    // Method to return a summary of the movie
    summary() {
        return `Title: ${this.title}, Director: ${this.director}, Year: ${this.year}, Genre: ${this.genre}, Duration: ${this.duration} minutes, Rating: ${this.rating}`;
    }

    static longestMovie(movies){
        if(movies.length == 0){
            return null;
        }

        let longestMovie = movies[0];

        for(let i = 1; i < movies,length; i++){
            if (movies[i].duration > longestMovie.duration) {
                longestMovie = movies[i];
            }
        }
        return longestMovie;
    }
}
// don't change below
module.exports = Movie;
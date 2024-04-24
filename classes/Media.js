// create your Media class:
class Media{
    constructor(title, year, genre, totalMediaCount){
        this.title = title;
        this.year = year;
        this.genre = genre;
        Media.totalMediaCount++;
    }

    static totalMediaCount = 0;

    summary(){
        return `title: ${this.title}, Year ${this.year} + Genre ${this.genre}`
    }
}
// uncomment below to export it:
module.exports = Media;


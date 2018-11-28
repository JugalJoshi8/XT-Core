const video = {
    genre: 'sc fi',
    list: ['a', 'b', 'c'],
    findMovies() {
        this.list.forEach((movie) => {
            console.log(`${this.genre}: ${movie}`);
            console.log(movie);
        })
    }
}

video.findMovies();
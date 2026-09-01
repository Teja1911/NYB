const movies = [
    {
        id: 101,
        title: "The Silent Signal",
        genre: "Thriller",
        rating: 8.4,
        director: {
            name: "Arun Kumar",
            country: "India"
        },
        streaming: {
            platform: "StreamBox"
        }
    },

    {
        id: 102,
        title: "Beyond Tomorrow",
        genre: "Sci-Fi",
        rating: 7.8,
        director: {
            name: "Maya Rao",
            country: "India"
        }
    },

    {
        id: 103,
        title: "Midnight Route",
        genre: "Thriller",
        rating: 9.1,
        director: {
            name: "David Lee",
            country: "USA"
        },
        streaming: {
            platform: "CinemaPlus"
        }
    }
]

function getMovieById(id){
    const movie=movies.find((movie)=>movie.id===id)
    return movie?movie.title:"Movie not Found"
}
console.log(getMovieById(101))

function getMovieDetails(movie){
    const {title,genre,rating,director:{name:directorName}}=movie
    return {title,genre,rating,director:directorName,platform:movie.streaming?.platform ?? "Movie Not Found"}   
}
console.log(getMovieDetails(movies[0]))
console.log(getMovieDetails(movies[1]))

function getMovieKeys(movie){
    return Object.keys(movie)
}
console.log(getMovieKeys(movies[0]))

function getMovieValues(movie){
    return Object.values(movie)
}
console.log(getMovieValues(movies[0]))

function getMovieEntries(movie){
    return Object.entries(movie)
}
console.log(getMovieEntries(movies[0]))

function updateMovie(movie,updates){
    const updatemovie={
        ...movie,
        ...updates
    }
    return movie?updatemovie:"Not Found"
}
console.log(updateMovie(movies[0],{rating:9}))

function removeStreamingInfo(movie){
    const {streamimg,...movieWithoutStreaming}=movie
    return movieWithoutStreaming
}
console.log(removeStreamingInfo(movies[0]))

function getStreamingPlatform(movie){
    return movie?.streaming?.platform ?? "Not Available"
}
console.log(getStreamingPlatform(movies[2]))
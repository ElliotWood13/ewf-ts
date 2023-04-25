import { Genre, Movie } from "./index.types"
import * as data from './db.json'

// 1. Multiple or single genres returned in an array
// 2. No duplicates
// 3. Empty array returns random movie ([movie])
// 4. Efficient algo "Big O" with some explanations

// TODO: Handle some sum for index of genres against movie genres
// TODO: Order by highest sum
// TODO: Look into optimising based on "Big O" with explanations
export const getFilteredMovies = ({ genres }: { genres: Genre[] }): Movie[] => {
  const movies: Movie[] = data.movies;

  let filteredMovies = movies.filter(movie =>
    movie.genres.some(genre => (genres as Genre[]).includes(genre as Genre))
  );

  // 1 genre "solution"
  if (genres.length === 1) {
    filteredMovies = filteredMovies.filter(movie => movie.genres.length === 1)
  }

  const uniqueMovies = [... new Set(filteredMovies)]

  if (!uniqueMovies.length) {
    const randomMovie = movies[Math.floor(Math.random() * movies.length)]
    return [randomMovie];
  }

  return uniqueMovies
}

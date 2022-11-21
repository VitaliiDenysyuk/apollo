import { useQuery, gql } from "@apollo/client";

const SEARCH_MOVIE = gql`
  query searchMovie($query: String!) {
    searchMovie(query: $query) {
      movies {
        id
        original_title
        original_language
        release_date
        vote_average
        vote_count
      }
    }
  }
`;


interface Movie {
  id: number;
  original_title: string;
  original_language: string;
  release_date: string;
  vote_average: number;
  vote_count: number;
}

interface DisplayMoviesProps {
  query: string;
}

const DisplayMovies = ({ query }: DisplayMoviesProps) => {
  const { loading, error, data } = useQuery(SEARCH_MOVIE, {
    variables: { query },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return data.searchMovie.movies.map((movie: Movie) => (
    <div key={movie.id}>
      <h3>{movie.original_title}</h3>
      <br />
      <b>Language:</b>
      <p>{movie.original_language}</p>
      <br />
    </div>
  ));
};

export default DisplayMovies;

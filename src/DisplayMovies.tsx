import { useQuery, gql } from "@apollo/client";
import Card from "react-bootstrap/Card";
import Spinner from "react-bootstrap/Spinner";
import Alert from "react-bootstrap/Alert";

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

const POPULAR_MOVIE = gql`
  query popularMovies {
    popularMovies {
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

const dateFormat = (s: string) => {
  return new Date(s).toLocaleDateString();
};

const DisplayMovies = ({ query }: DisplayMoviesProps) => {
  const { loading, error, data } = useQuery(
    query ? SEARCH_MOVIE : POPULAR_MOVIE,
    query
      ? {
          variables: { query: query },
        }
      : undefined
  );

  if (loading)
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  if (error) return <p>Error : {error.message}</p>;
  const selectMovies = query ? data.searchMovie : data.popularMovies;
  if (!selectMovies || !selectMovies.movies) {
    return (
      <Alert key="danger" variant="danger">
        {`No movie contains a word ${query}`}
      </Alert>
    );
  }
  return selectMovies.movies.map((movie: Movie) => (
    <Card key={movie.id} className="mb-2">
      <Card.Header key={`${movie.id}Header`}>
        <Card.Title key={`${movie.id}Title`}>{movie.original_title}</Card.Title>
      </Card.Header>
      <Card.Body key={`${movie.id}Body`}>
        <Card.Text key={`${movie.id}Text1`}>{`Language: ${
          movie.original_language
        }, release date: ${dateFormat(movie.release_date)}`}</Card.Text>
        <Card.Text key={`${movie.id}Text`}>
          {`Vote average: ${movie.vote_average}, vote count: ${movie.vote_count}`}
        </Card.Text>
      </Card.Body>
    </Card>
  ));
};

export default DisplayMovies;

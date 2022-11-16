import React from "react";
import { useQuery, gql } from "@apollo/client";

const GET_LOCATIONS = gql`
  query GetLocations {
    locations {
      id
      name
      description
      photo
    }
  }
`;

interface DataApollo {
  id: string;
  name: string;
  description: string;
  photo: string;
}

const DisplayLocations = () => {
  const { loading, error, data } = useQuery(GET_LOCATIONS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return data.locations.map(({ id, name, description, photo }: DataApollo) => (
    <div key={id}>
      <h3>{name}</h3>
      <img width="400" height="250" alt="location-reference" src={`${photo}`} />
      <br />
      <b>About this location:</b>
      <p>{description}</p>
      <br />
    </div>
  ));
};

const App = () => {
  return (
    <div>
      <header>
        <p>Learn apollo</p>
      </header>
      <DisplayLocations />
    </div>
  );
};

export default App;

import styled from "styled-components";

import DisplayMovies from "./DisplayMovies";

const StyledApp = styled.div`
  background-image: linear-gradient(to bottom, #bbb 50%, transparent 50%),
    linear-gradient(
      to right,
      #bbb 10px,
      transparent 10px 20px,
      #bbb 20px calc(100% - 20px),
      transparent calc(100% - 20px) calc(100% - 10px),
      #bbb 10px
    );

  background-size: 100% 20px;
  padding: 10px 30px;
`;

const App = () => {
  return (
    <StyledApp>
      <header>
        <h1>Search movie in database</h1>
      </header>
      <DisplayMovies query="black" />
    </StyledApp>
  );
};

export default App;

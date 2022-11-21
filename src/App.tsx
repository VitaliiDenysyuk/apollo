import { useState } from "react";
import styled from "styled-components";

import DisplayMovies from "./DisplayMovies";
import NavigationBar from "./NavigationBar";

const StyledApp = styled.div`
  min-height: 100vh;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
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
  padding: 10px 30px 20px 30px;
`;

const App = () => {
  const [queryText, setQueryText] = useState("");
  const [w2] = useState("22");
  console.warn("app");
  console.warn({ queryText });
  return (
    <StyledApp>
      <NavigationBar setQueryText={setQueryText} />
      <DisplayMovies query={queryText} w2={w2} />
    </StyledApp>
  );
};

export default App;

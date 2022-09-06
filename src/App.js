import React from "react";
import ForwardCounter from "./components/forward_counter";
import BackwardCounter from "./components/backward_counter";

const App = () => {
  return (
    <React.Fragment>
      <ForwardCounter></ForwardCounter>
      <BackwardCounter />
    </React.Fragment>
  );
};

export default App;

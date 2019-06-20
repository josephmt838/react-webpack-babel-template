import React from "react";
import ReactDOM from "react-dom";
import "index.scss";

const App = () => {
  console.log("hello");
  return <section>App Component</section>;
};

ReactDOM.render(<App />, document.getElementById("root"));

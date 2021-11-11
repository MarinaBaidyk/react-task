import React, {Component} from "react";
import Recurs from "./components/Recurs";
import data from "./data/directories.json";

class App extends Component{

  render() {
    return (
      <Recurs direct={data} />
    )
  }
}

export default App;

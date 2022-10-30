import React from "react";
import MovieList from "./MovieList";
import SeachBar from "./SearchBar";

class App extends React.Component {
  state = {
    movies: [
      {
        id: "2",
        title: "Interstaller",
        review: "4.5",
        img: "",
      },
      {
        id: "3",
        title: "Interstaller",
        review: "4.5",
        img: "",
      },
      {
        id: "4",
        title: "Interstaller",
        review: "4.5",
        img: "",
      },
    ],
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <SeachBar />
          </div>
        </div>

        <MovieList movies={this.state.movies} />
      </div>
    );
  }
}

export default App;

import React from "react";
import MovieList from "./MovieList";
import SeachBar from "./SearchBar";

class App extends React.Component {
  state = {
    movies: [
      {
        id: "2",
        title: "Hard Kill",
        desciption: "lorem impsum elisiusm",
        review: "5",
        img: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/ugZW8ocsrfgI95pnQ7wrmKDxIe.jpg",
      },
      {
        id: "3",
        title: "Para Ucagi",
        desciption: "lorem impsum elisiusm",
        review: "3.5",
        img: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg",
      },
      {
        id: "4",
        title: "Mulan",
        desciption: "lorem impsum elisiusm",
        review: "4.5",
        img: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/tJoqoMcxoydG3kiVvZnzvQo8M7Q.jpg",
      },
      {
        id: "5",
        title: "Santana",
        desciption: "lorem impsum elisiusm",
        review: "5",
        img: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/9Rj8l6gElLpRL7Kj17iZhrT5Zuw.jpg",
      },
      {
        id: "6",
        title: "Rouge",
        desciption: "lorem impsum elisiusm",
        review: "3.5",
        img: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/uOw5JD8IlD546feZ6oxbIjvN66P.jpg",
      },
      {
        id: "7",
        title: "Proje",
        desciption: "lorem impsum elisiusm",
        review: "4.5",
        img: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/apETSIY0oXOFvI0MgUWW81uRqsL.jpg",
      },
    ],
  };

  deleteMovie = (movie) => {
    const newMovieList = this.state.movies.filter((m) => m.id !== movie.id);

    // this.setState({
    //   movies: newMovieList,
    // });

    //ikinci kullanim
    this.setState((state) => ({ movies: newMovieList }));
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <SeachBar />
          </div>
        </div>

        <MovieList
          movies={this.state.movies}
          deleteMovieProp={this.deleteMovie}
        />
      </div>
    );
  }
}

export default App;

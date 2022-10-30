import React from "react";
import MovieList from "./MovieList";
import SeachBar from "./SearchBar";

class App extends React.Component {
  state = {
    movies: [
      {
        id: "2",
        title: "Interstaller",
        desciption: "lorem impsum elisiusm",
        review: "5",
        img: "https://upload.wikimedia.org/wikipedia/tr/archive/6/69/20171102154103%21Ayla_Film_Afi%C5%9Fi.jpg",
      },
      {
        id: "3",
        title: "siyah beyaz",
        desciption: "lorem impsum elisiusm",
        review: "3.5",
        img: "https://www.siyahbeyazmovies.com/files/contents/155.jpg",
      },
      {
        id: "4",
        title: "kilicbaligi",
        desciption: "lorem impsum elisiusm",
        review: "4.5",
        img: "https://www.siyahbeyazmovies.com/files/contents/166.jpg",
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

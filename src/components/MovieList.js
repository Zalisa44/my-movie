import React from "react";

class MovieList extends React.Component {
  render() {
    return (
      <div className="row">
        {this.props.movies.map((item) => (
          <div className="col-lg-4" key={item.id}>
            <div className="card mb-4 shadow-sm">
              <img src={item.img} className="card-img-top" alt="sample"></img>
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">{item.desciption}</p>
                <div className="d-flex justify-content-between align-item-center">
                  <button
                    className="btn btn-md btn-outline-danger"
                    type="button"
                    onClick={(event) => this.props.deleteMovieProp(item)}
                  >
                    Delete
                  </button>
                  <h2>
                    <span className="badge bg-info">{item.review}</span>
                  </h2>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default MovieList;

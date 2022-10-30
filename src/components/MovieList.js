import React from "react";

class MovieList extends React.Component {
  render() {
    return (
      <div className="row">
        {this.props.movies.map((item) => (
          <div className="col-lg-4" key={item.id}>
            <div className="card mb-4 shadow-sm">
              <img
                src="https://upload.wikimedia.org/wikipedia/tr/archive/6/69/20171102154103%21Ayla_Film_Afi%C5%9Fi.jpg"
                className="card-img-top"
                alt="sample"
              ></img>
              <div className="card-body">
                <h5 className="card-title">Sample Movie</h5>
                <p className="card-text">Simple Movie Description</p>
                <div className="d-flex justify-content-between align-item-center">
                  <button
                    className="btn btn-md btn-outline-danger"
                    type="button"
                  >
                    Delete
                  </button>
                  <h2>
                    <span className="badge bg-info">9.0</span>
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

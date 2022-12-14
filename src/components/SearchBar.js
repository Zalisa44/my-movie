import React from "react";

class SeachBar extends React.Component {
  clickHeandler = (e) => {
    e.preventDefault();
  };

  render() {
    return (
      <div>
        <h1>Seach Bar</h1>
        <form onSubmit={this.clickHeandler}>
          <div className="form-row mb-5">
            <div className="col-12">
              <input
                className="form-control"
                placeholder="Select a Movie"
                type="text"
                onChange={this.props.searchMovieProps}
              ></input>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default SeachBar;

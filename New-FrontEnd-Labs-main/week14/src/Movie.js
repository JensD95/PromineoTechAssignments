import React from "react";


new class Movie extends React.Component {
    render() {
        return (
            <div className="movie">
                <h2>{this.props.title}</h2>
                <p>{this.props.year}</p>
                <p>{this.props.description}</p>
                <p>{this.props.reviews}</p>
                <form></form>
            </div>
        );
    }
}



function Movie(props) {
  return (
    <div className="movie">
      <h2>{props.title}</h2>
      <p>{props.year}</p>
      <p>{props.description}</p>
      <p>{props.reviews}</p>
    </div>
  );
}

export default Movie;
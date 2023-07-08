import React, { useState } from "react";
import './App.css';
import './Stars.css';



function MovieCard(props) {
    const [yourRating, setYourRating] = useState(0);
    function fiveStarRating() {
        setYourRating(5);
    }
    function fourStarRating() {
        setYourRating(4);
    }
    function threeStarRating() {
        setYourRating(3);
    }
    function twoStarRating() {
        setYourRating(2);
    }
    function oneStarRating() {
        setYourRating(1);
    }
    new Date();
    var today = new Date(),
        date = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();
    const getDate = date;
    function submitReview(event) {
        event.preventDefault();
        let review = document.getElementById("reviewBoxData").value;
        let reviewUser = document.getElementById("reviewBoxUser").value;
        let reviewSection = document.getElementById("reviewSectionContent");
        let reviewList = document.getElementById("reviewList");
        const li = document.createElement("li");
        li.textContent = `
        On ${getDate}, ${reviewUser} rated ${props.movie.title} ${yourRating} stars and wrote:
        ${review}
        `;
        reviewList.appendChild(li);
        console.log(getDate);
        }
    
    return (
        <div className="movie-card">
            
            <img src={props.movie.poster} alt={props.movie.title} className="posterStyle" />
            <p className="titleStyle">{props.movie.title}</p>
            <p className="releaseDateStyle">Released in {props.movie.year}</p>
            <p className="descriptionStyle">{props.movie.description}</p>
            <p className="ratingStyle">Rating: {yourRating}</p>
            <p className="rating">
                    <button id="5" type="button" className="RatingStar starBackground"
                    onClick={fiveStarRating}>
                        ☆
                    </button>
                    <button id="4" className="RatingStar starBackground"
                    onClick={fourStarRating}>
                        ☆
                    </button>
                    <button id="3" className="RatingStar starBackground"
                    onClick={threeStarRating}>
                        ☆
                    </button>
                    <button id="2" className="RatingStar starBackground"
                    onClick={twoStarRating}>
                        ☆
                    </button>
                    <button id="1" className="RatingStar starBackground"
                    onClick={oneStarRating}>
                        ☆
                    </button>
            </p>
            <p>
                <ul id="reviewList" className="reviewList">Submitted Reviews
                </ul>
            </p>
            <section>
                <div id="reviewSectionContent" className="reviewSection">
                    <form method="post" onSubmit={submitReview}>
                        <label>
                        <textarea
                            className='reviewBox' id="reviewBoxUser" placeholder="Name"></textarea>
                            <textarea
                            className="reviewBox" id="reviewBoxData" placeholder="Your review here"></textarea>
                        </label>
                        <input id="submit" type="submit" className="submitButton" />
                    </form>
                </div>
            </section>
        </div>
    );
}
const fiveStar = document.getElementById("5");
const fourStar = document.getElementById("4");
const threeStar = document.getElementById("3");
const twoStar = document.getElementById("2");
const oneStar = document.getElementById("1");

function MovieList(props) {
    return (
        <div className="movie-list">
            {props.movies.map(movie => <MovieCard movie={movie} />)}
        </div>
    );
}


export default MovieList;
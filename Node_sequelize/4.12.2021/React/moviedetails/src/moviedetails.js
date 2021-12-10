import './App.css';
// import axios from 'axios';
import React, { useEffect ,useState} from 'react';
import "./moviedetails.css"
// const baseURL="localhost:7000"
// var id="03f11cc4-4bea-421a-af60-a1045b066d42"
function Details() {  
 const [movie]=useState({
  "MovieId": "03f11cc4-4bea-421a-af60-a1045b066d42",
  "MovieName": "Venom: Let There Be Carnage",
  "Language": "English",
  "Year": 2021,
  "Poster": "https://m.media-amazon.com/images/M/MV5BYTc3ZTAwYTgtMmM4ZS00MDRiLWI2Y2EtYmRiZmE0YjkzMGY1XkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_SX300.jpg",
  "Rating": 6.3,
  "Released": "01 Oct 2021",
  "Duration": "97 min",
  "Genre": "Action, Adventure, Sci-Fi",
  "RentAmt": 150,
  "BuyAmt": 480,
  "Description": "Eddie Brock attempts to reignite his career by interviewing serial killer Cletus Kasady, who becomes the host of the symbiote Carnage and escapes prison after a failed execution.",
  "createdAt": "2021-12-05T17:23:10.000Z",
  "updatedAt": "2021-12-05T17:23:10.000Z",
  "movieCast": {
      "MovieId": "03f11cc4-4bea-421a-af60-a1045b066d42",
      "Actors": "Tom Hardy, Woody Harrelson, Michelle Williams",
      "Producers": "Avi Arad, Matt Tolmach, Amy Pascal",
      "Director": "Andy Serkis",
      "Writer": "Kelly Marcel, Tom Hardy, Todd McFarlane",
      "createdAt": "2021-12-05T17:23:11.000Z",
      "updatedAt": "2021-12-05T17:23:11.000Z"
  }
})
//  useEffect(() => {
//   axios.get(`localhost:7000/movie/findById?id=${id}`).then((response) => {
//     setMovie(response.data);console.log(response.data)
//   }).catch(error => {
//     console.log(error);
//   });
// }, []);
  
  return (
    <div className="movie-detailed-page">
      <div className="movie-basic">
        <div className="poster">
          <img alt="movie" src={movie.Poster}></img>
        </div>
        <div className="movie-info">
          <div className="movie-head">
            <h2>{movie.MovieName}</h2>
            <span className="year">{movie.Year}</span>
            <span className="duration">{movie.Duration}utes</span> 
            <div className="genre">{movie.Genre}</div>
          </div>
          <div className="movie-amt">
            <span><button>Rent  &#8377;{movie.RentAmt}</button></span>
            <span><button>Buy  &#8377;{movie.BuyAmt}</button></span>
          </div>
        </div>
      </div>
      <div className="movie-cast-and-info">
        <p className="plot">{movie.Description}</p>
        <hr/>
        <p>CAST AND CREDITS</p>
        <div className="cast-detail">
          <div>
            <p>Actors</p>
            <div><p>{movie.movieCast.Actors}</p></div>
          </div>
          <div>
            <p>Producer</p>
            <div><p>{movie.movieCast.Producers}</p></div>
          </div>
          <div>
            <p>Director</p>
            <div><p>{movie.movieCast.Director}</p></div>
          </div>
          <div>
            <p>Writer</p>
            <div><p>{movie.movieCast.Writer}</p></div>
          </div>
        </div>
        <hr/>
        <div className="additional-info">
        <p>ADDITIONAL INFORMATION</p>
          <div>
            <p>Language</p>
            <p>{movie.Language}</p>
          </div>
          <div>
            <p>Rating</p>
            <p>{movie.Rating}</p>
          </div>
          <div>
            <p>Released on</p>
            <p>{movie.Released}</p>
          </div>
        </div>
      </div>

    </div>
    
  );
}

export default Details;

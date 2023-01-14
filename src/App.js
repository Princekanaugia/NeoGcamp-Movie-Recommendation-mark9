import React, { useState } from "react";
import "./styles.css";

var movieGenreDictionary /*more like emojiObject */ = {
  Comedy: [
    {
      movieName: "1. The Incredibles 2 (2018)",
      rating: "Rating 7.6",
      description:
        "The Incredibles family takes on a new mission which involves a change in family roles: Bob Parr (Mr. Incredible) must manage the house while his wife Helen (Elastigirl) goes out to save the world.",
    },
    {
      movieName: "2. Finding Dory (2016)",
      rating: "Rating 7.3",
      description:
        "Friendly but forgetful blue tang Dory begins a search for her long-lost parents and everyone learns a few things about the real meaning of family along the way.",
    },
  ],
  Horror: [
    {
      movieName: "1. It (I) (2017)",
      rating: "Rating 7.3",
      description:
        "In the summer of 1989, a group of bullied kids band together to destroy a shape-shifting monster, which disguises itself as a clown and preys on the children of Derry, their small Maine town.",
    },
    {
      movieName: "2. World War Z (2013)",
      rating: "Rating 7.0",
      description:
        "Former United Nations employee Gerry Lane traverses the world in a race against time to stop a zombie pandemic that is toppling armies and governments and threatens to destroy humanity itself.",
    },
  ],
  Action: [
    {
      movieName: "1. Avatar: The Way of Water (2022)",
      rating: "Rating 7.9",
      description:
        "Jake Sully lives with his newfound family formed on the extrasolar moon Pandora. Once a familiar threat returns to finish what was previously started, Jake must work with Neytiri and the army of the Na'vi race to protect their home.",
    },
    {
      movieName: "2. Tom Clancy's Jack Ryan (2018– )",
      rating: "Rating 8",
      description:
        "Up-and-coming CIA analyst, Jack Ryan, is thrust into dangerous field assignments.",
    },
  ],
  Crime: [
    {
      movieName: "1. The Cry for Help (2019)",
      rating: "Rating 8.1",
      description:
        "The story follows gangster Mafia Man as he grows and becomes more powerful while the people around him ruin his plans as he has to deal with them and their problems.",
    },
    {
      movieName: "2. The Dark Knight (2008)",
      rating: "Rating 9.0",
      description:
        "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    },
  ],
  Thriller: [
    {
      movieName: "1. The Hunger Games: Catching Fire (2013)",
      rating: "Rating 7.5",
      description:
        "Katniss Everdeen and Peeta Mellark become targets of the Capitol after their victory in the 74th Hunger Games sparks a rebellion in the Districts of Panem.",
    },
    {
      movieName: "2. Jurassic Park (1993)",
      rating: "8.2",
      description:
        "A pragmatic paleontologist touring an almost complete theme park on an island in Central America is tasked with protecting a couple of kids after a power failure causes the park's cloned dinosaurs to run loose.",
    },
  ],
};

var genreList = Object.keys(movieGenreDictionary);

export default function App() {
  var [recommend, setRecommend] = useState("Comedy");

  function movieGenreClickHandler(genre) {
    setRecommend(genre);
  }
  return (
    <div className="App">
      <nav class="navigation">
        <header>
          <div class="nav-brand"> Movie Recomendation </div>
          <div style={{ fontSize: "1.2rem", padding: ".5rem" }}>
            Are you looking for Movie suggestions? Here are my recommendations
          </div>
        </header>
      </nav>

      <section
        style={{
          backgroundSize: "contain",
          backgroundImage: "linearGradient()",
          backgroundBlendMode: "multiply",
        }}
      >
        <div style={{ margin: "1rem" }}>
          {Object.keys(movieGenreDictionary).map((genre) => {
            return (
              <ul style={{ display: "inline-block" }}>
                <li
                  key={genre}
                  style={{
                    listStyle: "none",
                  }}
                >
                  <button
                    style={{
                      fontSize: "1.4rem",
                      backgroundColor: "lightcyan",
                      borderRadius: "1rem",
                      padding: ".5rem 1rem",
                      cursor: "pointer",
                    }}
                    onClick={() => movieGenreClickHandler(genre)}
                  >
                    {genre}
                  </button>
                </li>
              </ul>
            );
          })}
        </div>

        <div id="liveRecommand">{recommend}</div>

        <div>
          {movieGenreDictionary[recommend].map((genre) => {
            return (
              <ul>
                <li key={genre.movieName} id="listStyle">
                  <div
                    className="dishName"
                    style={{
                      fontSize: "2.5rem",
                      fontWeight: "bolder",
                      color: "black",
                    }}
                  >
                    {genre.movieName}
                  </div>
                  <div
                    style={{
                      fontSize: "1.3rem",
                      fontWeight: "bold",
                      padding: "0.2rem 0 1rem 0",
                    }}
                  >
                    {genre.rating}
                  </div>
                  <div>{genre.description}</div>
                </li>
              </ul>
            );
          })}
        </div>
      </section>

      <footer id="footer">
        <h3>
          <b>About Movie Recommendation</b>
        </h3>
        <div id="footer-heading">
          <b>Movie Recommendation</b> app shows you suggestion based o the Genre
          you select. It is build useing Reactjs on codesandbox. Conditional in
          JSX, useState() are React concept used in making this app.
        </div>
      </footer>
    </div>
  );
}

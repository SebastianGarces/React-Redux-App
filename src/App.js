import React from "react";

import "./App.css";

import { fetchData } from "./actions";
import { connect } from "react-redux";

const App = (props) => {
  const randomNum = Math.round(Math.random() * 50);
  const url = `https://picsum.photos/v2/list?page=${randomNum}&limit=20`;

  console.log(props.dataToDisplay);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h1 className="App">React Redux App</h1>
      <button
        onClick={() => props.fetchData(url)}
        style={{
          padding: "1rem",
          width: "150px",
          border: "none",
          borderRadius: "5px",
          backgroundColor: "crimson",
          color: "white",
          fontSize: "1.1rem",
          cursor: "pointer",
          marginBottom: "1rem",
        }}
      >
        Fetch Images
      </button>

      <div
        className="collection-container"
        style={{
          width: "fit-content",
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {props.isLoading && <h1>Fetching images... 😁 </h1>}
        {props.error && (
          <h1 style={{ color: "red" }}>
            *Unable to fetch images, check logs 😢*
          </h1>
        )}
        {props.dataToDisplay.map((image) => {
          return (
            <div
              className="container"
              key={image.id}
              style={{
                display: "flex",
                flexDirection: "column",
                alignContent: "center",
                justifyContent: "flex-start",
                flexWrap: "wrap",
                margin: "1rem",
                maxWidth: "300px",
                minHeight: "360px",
              }}
            >
              <div
                style={{
                  width: "300px",
                  height: "200px",
                  backgroundImage: `url(${image.download_url})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  borderRadius: "20px 20px 0 0",
                }}
              />
              <div
                className="info"
                style={{
                  padding: "1rem",
                  border: "1px solid rgba(0,0,0,0.2)",
                  height: "160px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  borderRadius: "0 0 20px 20px",
                }}
              >
                <h2 style={{ color: "blue" }}>
                  by <span style={{ color: "#000" }}>{image.author}</span>
                </h2>
                <a href={image.download_url} target="_blank">
                  Download
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    dataToDisplay: state.dataToDisplay,
    isLoading: state.isLoading,
    error: state.error,
  };
};

export default connect(mapStateToProps, { fetchData })(App);

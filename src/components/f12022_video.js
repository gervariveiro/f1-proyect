import React, { useState } from "react";
import YouTube from "react-youtube";
var getYouTubeID = require("get-youtube-id");


export default function F12022_video () {
    const [id, setId] = useState("vwhmwdhnfAs");
  
    function handleChange(e) {
      console.log(e.target.value);
  
      setId(getYouTubeID(e.target.value));
    }
    const opts = {
      height: "390",
      width: "640",
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 0
      }
    };
    return (
      <div className="App">
        <input
          type="text"
          onChange={handleChange}
          required
          placeholder="URL..."
        />
  
        <YouTube videoId={id} opts={opts} onReady={this._onReady} />
      </div>
    );
  }
import React from "react";
import ReactPlayer from "react-player";
import './styles/contvideo.css'

export default function ContVideo() {
  React;
  return (
    <div className="cont-video glass">
        <ReactPlayer url={'https://joaquingambra.wistia.com/medias/m0hzlyu3vu'} 
        controls
        />
    </div>
  );
}
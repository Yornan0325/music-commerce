import React, { useEffect, useRef, useState } from "react";
import Control from "./Control";
import Details from "./Details";
import "../../../../App.css";

const Player = (props) => {
  const audioEl = useRef(null);
  const [isPlaying, setIsplaying] = useState(false);

  useEffect(() => {
    if (isPlaying) {
      audioEl.current.play();
    } else {
      audioEl.current.pause();
    }
  });

  const skipSong = (fowards = true) => {
    if (fowards) {
      props.setCurrentSongIndex(() => {
        let temp = props.currentSongIndex;
        temp++;
        if (temp > props.songs.length - 1) {
          temp = 0;
        }
        return temp;
      });
    } else {
      props.setCurrentSongIndex(() => {
        let temp = props.currentSongIndex;
        temp--;

        if (temp < 0) {
          temp = props.songs.length - 1;
        }
        return temp;
      });
    }
  };

  return (
    <>
      <div className="player">
        <h4> Musica </h4>
        <Details song={props.songs[props.currentSongIndex]} />
        <Control
          isPlaying={isPlaying}
          setIsplaying={setIsplaying}
          skipSong={skipSong}
        />
        <div  className="player__audio"> 
        <audio
          
          src={props.songs[props.currentSongIndex].src}
          ref={audioEl}
          controls
        ></audio>
        </div>
        <p>
          Next up:
          <span>
            {props.songs[props.nextSongIndex].title}
            by {props.songs[props.nextSongIndex].artist}
          </span>
        </p>
      </div>
    </>
  );
};

export default Player;

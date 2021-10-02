import React from "react";
import Details from "./Details"
const Player = () => {

    return (
        <>
            <div className="player">
                <h4>Musica</h4>
            </div>
            <Details />
            <audio 
            className="player__audio"
            src =""
            controls
            >

            </audio>
            <p>Next up:<span>Next song</span></p>
            
        </>
    );
};

export default Player;

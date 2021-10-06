import React from 'react'
import { faBackward, faForward, faPause, faPlay } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../../../App.css'
const Control = (props) => {
    return (

        <div className="control">
            <button className="control__skipBtn" onClick={()=>props.skipSong(false)}>
                <FontAwesomeIcon icon={faBackward} />
            </button>
            <button className="control__PlayButton" onClick={()=>props.setIsplaying(!props.isPlaying)}>
                <FontAwesomeIcon icon={props.isPlaying ? faPause : faPlay} />
            </button>
            <button className="control__skipBtn" onClick={()=>props.skipSong(true)}>
                <FontAwesomeIcon icon={faForward} />
            </button>
        </div>

    )
}
export default Control
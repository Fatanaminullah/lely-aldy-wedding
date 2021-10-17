import React, { useContext, useEffect, useState } from 'react';
import PauseButton from '../../assets/images/icon-pause.png';
import PlayButton from '../../assets/images/icon-play.png';
import ArRum21 from "../../assets/music/ar_rum_21.mp3";
import { AudioContext } from '../../context/audio-context';

const AudioPlayer = () => {
    const context = useContext(AudioContext)
    useEffect(() => {
        const audio = document.getElementById("audio");
        if (context?.isInteract) {
            if (context?.isPlaying) {
                audio.play()
            } else {
                audio.pause()
            }
        }
    }, [context?.isPlaying])
    const handlePlayer = (type) => {
        if (type === 'play') {
            context?.setIsPlaying(true)
        } else {
            context?.setIsPlaying(false)
        }
    }
    return (
        <>
            <audio id="audio">
                <source src={ArRum21} />
                Your browser does not support the <code>audio</code> element.
            </audio>
            <img
                className="audio-button"
                src={context?.isPlaying ? PauseButton : PlayButton}
                onClick={() => handlePlayer(context?.isPlaying ? 'pause' : 'play')}
            />
        </>
    )
}

export default AudioPlayer
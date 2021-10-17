import React, { createContext, useState } from "react"

export const AudioContext = createContext()

export const AudioProvider = ({ children }) => {
    const [isPlaying, setIsPlaying] = useState(false)
    const [isInteract, setIsInteract] = useState(false)
    return (
        <AudioContext.Provider value={{ isPlaying, setIsPlaying, isInteract, setIsInteract }}>
            {children}
        </AudioContext.Provider>
    )
}

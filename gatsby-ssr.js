import React from "react"
import "./src/assets/scss/_main.scss"
import { AudioProvider } from "./src/context/audio-context"
import { LoadingProvider } from "./src/context/loading-context"



export const wrapRootElement = ({ element }) => (
    <LoadingProvider>
        <AudioProvider>
            {element}
        </AudioProvider>
    </LoadingProvider>
)

import React from "react"

import { LoadingProvider } from "./src/context/loading-context"

import "./src/assets/scss/_main.scss"

export const wrapRootElement = ({ element }) => (
    <LoadingProvider>{element}</LoadingProvider>
)

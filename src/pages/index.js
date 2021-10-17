import React, { useContext, useEffect, useLayoutEffect } from "react"
import 'react-gallery-carousel/dist/index.css'
import AudioPlayer from "../components/general/audio-player"
import Bride from "../components/pages/bride"
import Countdown from "../components/pages/countdown"
import Cover from "../components/pages/cover"
import EventAndLocation from "../components/pages/event-and-location"
import Gallery from "../components/pages/gallery"
import { Loader } from "../components/general/loader"
import Protocols from "../components/pages/protocols"
import SEO from "../components/general/seo"
import Verse from "../components/pages/verse"
import { AudioContext } from "../context/audio-context"
import { LoadingContext } from "../context/loading-context"
import Navbar from "../components/general/navbar"


const IndexPage = () => {
  const context = useContext(LoadingContext)
  const audioContext = useContext(AudioContext)
  useEffect(() => {
    let vh = window.innerHeight * 0.01
    document.documentElement.style.setProperty("--vh", `${vh}px`)
    document.body.addEventListener('keydown', () => audioContext?.setIsInteract(true));
    document.body.addEventListener('click', () => audioContext?.setIsInteract(true));
  }, [])
  useLayoutEffect(() => {
    const wrapper = document.querySelector("main")
    wrapper.classList.add("animated", "fadeIn")
  }, [])


  return (
    <>
      <Loader />
      <main>
        <SEO />
        {!context?.initialLoading ? (
          <>
            <AudioPlayer />
            <Navbar />
            <Cover />
            <Verse />
            <Bride />
            <Countdown />
            <Gallery />
            <EventAndLocation />
            <Protocols />
          </>
        ) : <div />}
      </main>
    </>
  )
}

export default IndexPage

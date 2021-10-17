import React, { useContext, useEffect, useLayoutEffect } from "react"
import 'react-gallery-carousel/dist/index.css'
import Bride from "../components/bride"
import Countdown from "../components/countdown"
import Cover from "../components/cover"
import EventAndLocation from "../components/event-and-location"
import Gallery from "../components/gallery"
import { Loader } from "../components/loader"
import Protocols from "../components/protocols"
import SEO from "../components/seo"
import Verse from "../components/verse"
import { LoadingContext } from "../context/loading-context"

const IndexPage = () => {
  const context = useContext(LoadingContext)
  useEffect(() => {
    let vh = window.innerHeight * 0.01
    document.documentElement.style.setProperty("--vh", `${vh}px`)
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

import React, { useContext, useEffect, useLayoutEffect } from "react"
import Bride from "../components/bride"
import Cover from "../components/cover"
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
            <Protocols />
          </>
        ) : <div />}
      </main>
    </>
  )
}

export default IndexPage

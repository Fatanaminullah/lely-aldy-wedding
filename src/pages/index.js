import React, { useContext, useEffect, useLayoutEffect } from "react"
import Cover from "../components/cover"
import { Loader } from "../components/loader"
import SEO from "../components/seo"
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
    <main>
      <Loader />
      <SEO />
      {!context?.initialLoading ? (
        <>
          <Cover />
        </>
      ) : <div className="h-vh-100 w-vw-100" />}
    </main>
  )
}

export default IndexPage

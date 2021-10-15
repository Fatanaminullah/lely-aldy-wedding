import * as React from "react"
import "../assets/scss/_main.scss"
import Cover from "../components/cover"
import SEO from "../components/seo"

const IndexPage = () => {
  React.useEffect(() => {
    let vh = window.innerHeight * 0.01
    document.documentElement.style.setProperty("--vh", `${vh}px`)
  }, [])
  React.useLayoutEffect(() => {
    const wrapper = document.querySelector("main")
    wrapper.classList.add("animated", "fadeIn")
  }, [])
  return (
    <main>
      <SEO />
      <Cover />
    </main>
  )
}

export default IndexPage

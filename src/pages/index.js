import * as React from "react"
import Cover from "../components/cover"
import { Loader } from "../components/loader"
import SEO from "../components/seo"
import { LoadingContext } from "../context/loading-context"

const IndexPage = () => {
  const { initialLoading } = React.useContext(LoadingContext)
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
      <Loader />
      <SEO />
      {!initialLoading ? (
        <>
          <Cover />
        </>
      ) : <div className="h-vh-100 w-vw-100" />}
    </main>
  )
}

export default IndexPage

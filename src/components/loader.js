import loadingJSON from "../assets/lottie/loading.json"
import { LoadingContext } from "../context/loading-context"
import React, { useContext, useEffect, useState } from "react"
import Lottie from "react-lottie"

export const Loader = ({ className }) => {
  const [loader, setLoader] = useState(false)
  const context = useContext(LoadingContext)

  useEffect(() => {
    if (context?.initialLoading) {
      setLoader(true)
      setTimeout(() => {
        context?.setInitialLoading(prevInitialLoading => !prevInitialLoading)

        setTimeout(() => {
          setLoader(false)
        }, 1000)
      }, 2500)
    }
  }, [context?.setInitialLoading])

  return (
    <>
      {/* prettier-ignore */}
      <div className={`loader loader-dark loader-lottie fadeOut ${className} ${!context?.initialLoading ? `loader-exit ${!loader ? `d-none` : ``}` : ""}`}>
        <div className="img-lottie">
          <Lottie
            options={{
              loop: false,
              autoplay: true,
              animationData: loadingJSON,
              rendererSettings: {
                preserveAspectRatio: "xMidYMid slice"
              }
            }}
          />
        </div>
      </div>
    </>
  )
}

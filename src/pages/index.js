import React from "react"
import Appbar from "../components/appbar"
import Info from "../components/info"
import { Helmet } from "react-helmet"

function index() {
  return (
    <div>
      <Appbar />
      <Info />
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content="Josh Boddy | Computer Science and all things tech" />
        <meta name="keywords" content="Programming, Josh, Boddy, Joshua, City, University, Computing, Computer, Science, Engineering, Tech, Technology, Music, Acting, Theatre, Film, Guitar, Vocal, Song" />
        <meta name="author" content="Josh Boddy" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Home | Josh</title>
      </Helmet>
    </div>
  )
}

export default index

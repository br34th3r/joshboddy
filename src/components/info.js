import React from "react"
import Link from "gatsby-plugin-transition-link/AniLink"

import {
  FaTwitter as Twitter,
  FaGithub as Github,
  FaInstagram as Insta,
  FaLinkedin as LinkedIn,
} from "react-icons/fa"

export default function info() {
  return (
    <div className="container info">
      <div className="my-5"></div>
      <div className="display-3 header" style={{ color: "#FF8A00" }}>
        <span style = {{color : "white"}}>Hello,</span> <br />
        <span style = {{color : 'white'}}>I'm</span> Josh.
      </div>
      <div className="h1 code mt-4 mb-3">void <Link fade to="/about-me" className="info-link">info</Link>() {"{"}</div>
      <div className="mx-5 my-4 h3 text-justify info code-text">
      Young Developer in OOP and Web Design
      <br />
      JavaScript | Node JS | React | React Native | Electron | Python | Java
      </div>
      <div className="h1 code mt-2 mb-3">{"}"}</div>
      <div className="icons h1 mt-5">
        <a className="mr-4 icon" href="https://twitter.com/kamohoaliix">
          <Twitter />
        </a>
        <a className="mr-4 icon" href="https://instagram.com/joshboddyofficial">
          <Insta />
        </a>
        <a className="mr-4 icon" href="https://github.com/br34th3r">
          <Github />
        </a>
        <a className="mr-4 icon" href="https://www.linkedin.com/in/joshua-boddy/">
          <LinkedIn />
        </a>
      </div>
    </div>
  )
}

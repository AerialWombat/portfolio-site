import React from "react"
import Helmet from "react-helmet"
import Hero from "../components/Hero/hero"
import HeroBackground from "../components/HeroBackground/heroBackground"
import About from "../components/About/about"
import Showcase from "../components/Showcase/showcase"
import Footer from "../components/Footer/footer"

import "./index.scss"

export default () => (
  <div>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Adrian Zhan</title>
      <meta
        name="description"
        content="Personal website for Adrian Zhan, web developer."
      />
    </Helmet>
    <HeroBackground className="fixedBackground">
      <Hero />
    </HeroBackground>
    <main>
      <About />
      <Showcase />
    </main>
    <Footer />
  </div>
)

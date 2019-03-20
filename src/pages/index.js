import React from "react"
import Helmet from "react-helmet"
import Hero from "../components/Hero/hero"
import HeroBackground from "../components/HeroBackground/heroBackground"
import About from "../components/About/about"
import Showcase from "../components/Showcase/showcase"
import Footer from "../components/Footer/footer"
import favicon32 from "../../static/favicon32.png"

import "./index.scss"

export default () => (
  <div>
    <Helmet htmlAttributes={{ lang: "en" }}>
      <meta charSet="utf-8" />
      <title>Adrian Zhan</title>
      <meta
        name="description"
        content="Personal website for Adrian Zhan, web developer."
        link={[
          { rel: "shortcut icon", type: "image/png", href: `${favicon32}` },
        ]}
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

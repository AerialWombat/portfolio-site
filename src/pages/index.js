import React from "react"
import Hero from "../components/Hero/hero"
import HeroBackground from "../components/HeroBackground/heroBackground"
import About from "../components/About/about"
import Showcase from "../components/Showcase/showcase"

import "./index.scss"

export default () => (
  <div>
    <HeroBackground className="fixedBackground">
      <Hero />
    </HeroBackground>
    <main>
      <About />
      <Showcase />
    </main>
  </div>
)

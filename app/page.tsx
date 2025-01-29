import Hero from './components/Hero'
import About from './components/About'
import Works from './components/Works'
import Tools from './components/Tools'
import RunningText from './components/RunningText'
import Services from './components/Services'
import Contact from './components/Contact'

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Works />
      <Tools />
      <Services />
      <RunningText />

      <Contact />
    </>
  )
}


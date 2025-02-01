import Hero from './components/Hero'
import About from './components/About'
import Works from './components/Works'
import Tools from './components/Tools'
import RunningText from './components/RunningText'
import Services from './components/Services'
import Contact from './components/Contact'
import RunningText2 from './components/RunningText2'

export default function Home() {
  return (
    <>
      <Hero />
      <RunningText2 />
      <About />
      <Works />
      <Tools />
      <Services />
      <RunningText />
      <Contact />
    </>
  )
}


// SECTIONS 
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Contact from "./components/Contact"

// COMPONENTS
import Divisor1 from "./components/Divisor1"
import Divisor2 from "./components/Divisor2"

export function Index() {
  return (
    <>
      <header className="bg-hiperBlack">
        <Navbar />
        <Divisor2 />
      </header>

      <main>
        <section className="mt-52">
          <Home />
        </section>
        <Divisor1 />

        <section className="mt-52">
          <About />
        </section>
        <Divisor1 />

        <section className="mt-52">
          <Skills />
        </section>
        <Divisor1 />

        <section className="mt-52">
          <Projects />
          </section>
        <Divisor1 />

      </main>

      <footer className="mt-52 bg-hiperBlack">
        <Divisor2 />
        <Contact />
      </footer>
    </>
  )
}

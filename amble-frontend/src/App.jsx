import Hero from "./components/Hero"
import Section2 from "./components/section-2/Section2"
import Section3 from "./components/section-3/Section3"
import Section4 from "./components/section-4/Section4"
import Login from "./components/login"
import Signup from "./components/signup"
import "./utils.css"

function App() {

  return (
    <div className="App">
     <Hero />
     <Section2 />
     <Section3 />
     <Section4 />
     <Login  />
     <Signup />
    </div>
  )
}

export default App

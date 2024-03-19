import './App.css'
import About from './components/About'
import Features from './components/Features'
import Footer from './components/Footer'
import Home from './components/Home'
import Navbar from './components/Navbar'
import NewsLetter from './components/NewsLetter'
import Pricing from './components/Pricing'

function App() {

  return (
    <>
      <Navbar />
      <Home />
      <Features />
      <About />
      <Pricing />
      <NewsLetter />
      <Footer />
    </>
  )
}

export default App

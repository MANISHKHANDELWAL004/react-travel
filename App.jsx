

import './App.css'
import About from './components/About/About'
import Destination from './components/Destinations/Destination'
import CallToAction from './components/Footer/CallToAction'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Memories from './components/Memories/Memories'
import Nav from './components/Nav/Nav'
import Search from './components/Searches/Search'
import Testimonial from './components/Testimonial/Testimonial'
import Trips from './components/Trips/Trips'

function App() {
 

  return (
    <>
<div className='main'>

<Nav/>
<Header/>
<Memories/>
</div>
<Trips/>
 <Search/>
 <div className="main">
  <About/>
 </div>
<Testimonial/>
<Destination/>
<div className="main">
<CallToAction/>

</div>
<Footer/>
    </>

  )
}

export default App

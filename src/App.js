import Header from './components/Header'
import Navbar from './components/Navbar'

import './App.css'

const App = () => (
  <div className="app-container">
    <Header />
    <div className="bg-container">
      <Navbar />
      <h1 className="title">Places to stay</h1>
      <div className="places-container">
        <p className="desc border-right">
          Location
          <br />
          <span className="span-desc">Where are you going?</span>
        </p>
        <p className="desc border-right">
          Check in
          <br />
          <span className="span-desc">Adds dates</span>
        </p>
        <p className="desc border-right">
          Check out
          <br />
          <span className="span-desc">Adds dates</span>
        </p>
        <p className="desc margin">
          Guests
          <br />
          <span className="span-desc">Add guests</span>
        </p>
        <div className="search-icon-container">
          <img
            className="search-icon"
            alt="search"
            src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
          />
        </div>
      </div>
      <div className="content">
        <h1 className="heading">Go Near</h1>
        <button type="button" className="explore-btn">
          Explore nearby stays
        </button>
      </div>
    </div>
  </div>
)

export default App

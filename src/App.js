import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="logo">HotelBooking</div>
        <nav>
          <a href="/">Home</a>
          <a href="/">Rooms</a>
          <a href="/">Amenities</a>
          <a href="/">About Us</a>
          <a href="/">Contact Us</a>
        </nav>
        <div className="auth-buttons">
          <button>Login</button>
          <button>Sign Up</button>
        </div>
      </header>
      <section className="hero">
        <div className="hero-content">
          <h1>Find the Best Hotel Rooms</h1>
          <div className="search-bar">
            <input type="date" placeholder="Check-in Date" />
            <input type="date" placeholder="Check-out Date" />
            <input type="number" placeholder="Guests" />
            <select>
              <option value="">Room Type</option>
              <option value="standard">Standard</option>
              <option value="deluxe">Deluxe</option>
              <option value="suite">Suite</option>
            </select>
            <button>Search</button>
          </div>
        </div>
      </section>
      <section className="featured-rooms">
        <h2>Featured Rooms</h2>
        <div className="rooms-grid">
          <div className="room">
            <img src="https://via.placeholder.com/200" alt="Standard Room" />
            <p>Standard Room - From $100</p>
          </div>
          <div className="room">
            <img src="https://via.placeholder.com/200" alt="Deluxe Room" />
            <p>Deluxe Room - From $150</p>
          </div>
          <div className="room">
            <img src="https://via.placeholder.com/200" alt="Suite" />
            <p>Suite - From $200</p>
          </div>
          <div className="room">
            <img src="https://via.placeholder.com/200" alt="Family Suite" />
            <p>Family Suite - From $250</p>
          </div>
        </div>
      </section>
      <footer>
        <p>Follow Us: <a href="/">Facebook</a> <a href="/">Twitter</a> <a href="/">Instagram</a></p>
        <p>Contact: (123) 456-7890</p>
        <p><a href="/">Privacy Policy</a> | <a href="/">Terms of Service</a></p>
      </footer>
    </div>
  );
}

export default App;

import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Blogs from './components/Blogs/Blogs';
import Events from './components/Events/Events';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/blogs" element={<Blogs/>} />
          <Route exact path="/events" element={<Events/>}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

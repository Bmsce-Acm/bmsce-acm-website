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

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/blogs" element={<Blogs/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

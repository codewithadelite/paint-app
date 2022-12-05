import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import HomeScreen from './screens/HomeScreen';
import PosterScreen from './screens/PosterScreen';
import AddPosterScreen from './screens/AddPosterScreen'

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path='' element={<HomeScreen />} />
        <Route path='posters/' element={<PosterScreen />} />
        <Route path='poster/add/' element={<AddPosterScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import React from 'react';
import './App.css'
import Home from './pages/Home'
import SearchResults from './pages/SearchResults'
import Detail from './pages/Detail'

import { Link, Route } from "wouter"

export default function App() {
  return (
    <div className="App">
      <section className="App-content">
        <Link to="/">
          <h1>HOME</h1>
        </Link>
        <Route
          component={Home}
          path="/"
        />
        <Route
          component={SearchResults}
          path="/search/:keyword"  />
        <Route
          component={Detail}
          path="/gif/:id"
        />
      </section>
    </div>
  )
}

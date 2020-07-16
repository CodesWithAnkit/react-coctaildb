import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// Pages Import
import About from './pages/About'
import Error from './pages/Error'
import Home from './pages/Home'
import SingleCocktail from './pages/SingleCocktail'
// Components
import NavBar from './components/Navbar'

export default function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/cocktail/:id">
          <SingleCocktail />
        </Route>
        {/* Error Page */}
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  )
}

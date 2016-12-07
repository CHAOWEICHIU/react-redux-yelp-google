import React from 'react';
import Header from './header'

// TODO add <p> Header components (search and collection) </p>
// TODO add {this.props.children} to return
const Footer = () => (
  <nav className="nav navbar-fixed-bottom">
    <button className="btn btn-block active btn-danger sharp custom-header-btn">Currenty location is</button>
  </nav>
)
// <Header /> // TODO change color // TODO add font-awesome gluphcon to header

const App = () => (
  <div>
    <Header />
    <Footer />
  </div>
)

export default App

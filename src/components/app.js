import React from 'react';
import Header from './header'
import Footer from '../containers/footer'

// TODO add <p> Header components (search and collection) </p>
// TODO add {this.props.children} to return
// <Header /> // TODO change color // TODO add font-awesome gluphcon to header

const App = ({children}) => (
  <div>
    <Header />
      {children}
    <Footer />
  </div>
)

export default App

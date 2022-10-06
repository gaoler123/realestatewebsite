import React from 'react';
import Navigation from './components/Navigation';
import Mainsection from './components/Mainsection';
import 'semantic-ui-css/semantic.min.css'

export const App = () => {
  return (
    <div>
      <Navigation />
      <Mainsection />
    </div>
  )
}

export default App;
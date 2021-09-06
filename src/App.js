import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './components/pages/Home'
import Favorites from './components/pages/Favorites'
import Navbar from './components/layout/Navbar'

function App() {
  return (
    <Router>
      <Navbar />

      <div className='container'>
        <Switch>

          <Route exact path='/'>
            <Home />
          </Route>

          <Route path='/favorites'>
            <Favorites />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;

import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import Nav from './components/Nav'
import Shelves from './containers/Shelves'
import Book from './containers/Book'

function App() {
  return (
    <Router>
      <Nav />
        <div className="App">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/shelves" component={Shelves} />
              <Route path="/book/:id" component={Book} />
            </Switch>
        </div>
    </Router>
  );
}

export default App;

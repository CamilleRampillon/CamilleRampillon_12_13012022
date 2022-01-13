
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
//Components imports
import Header from './components/Header'
import SideNav from './components/SideNav'
import User from './pages/User'
import Error from './pages/Error'
//Style import
import './App.css';

/**
 * Manages routes & renders pages
 * @function App
 * @returns JSX
 */
function App() {
  return (
    <Router>
      <Header />
      <SideNav />   
        <Switch>
        <Route exact path="/user/:id" component={User}/>

            <Route>
              <Error />
            </Route>
        </Switch> 
    </Router>  
  )
}

export default App;
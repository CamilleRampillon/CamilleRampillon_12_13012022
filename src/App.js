import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// component imports
import  Header  from './components/Header'
import WelcomePage from './pages/WelcomePage'
import DashBoard from './pages/DashBoard'
import  Error from './pages/Error'

/**
 * Manages routes & renders pages
 * @function App
 * @returns {JSX}
 */
export default function App() {
  return (   
    <Router>
      <Header />  
        <Switch>
          <Route exact path="/" component={WelcomePage}/>
          <Route path="/user/:id" component={DashBoard}/>
          <Route path="/profile" component={WelcomePage}/>
          <Route path="/settings" component={WelcomePage}/>
          <Route path="/community" component={WelcomePage}/>
          <Route component={Error}/>
        </Switch> 
    </Router>  
  )
}
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import About from './Pages/About';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import TodoList from './Components/TodoList'



function App(){

   
    return (
        <>
            <Router>
                <Navbar/>
                
                <Switch>
                    <Route exact path="/" component={TodoList}></Route>
                    <Route exact path="/About" component={About}></Route>
                </Switch>
            </Router>
            <Footer/>
        </>            

    )
}
export default App
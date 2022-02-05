import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';



function App() {


    return (
        <>
            <Router>
                <Navbar />
                <Switch>
                    <Route exact path="/todo/" component={Home}></Route>
                    <Route exact path="/todo/About" component={About}></Route>
                </Switch>
                <Footer/>
            </Router>
        </>

    )
}
export default App
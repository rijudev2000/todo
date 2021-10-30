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
                    <Route exact path="/" component={Home}></Route>
                    <Route exact path="/About" component={About}></Route>
                </Switch>
            </Router>
            <Footer />
        </>

    )
}
export default App
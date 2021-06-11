import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FetchData from "./FetchData";
import PhotoPage from "./PhotoPage";

//Photopage route path="/photoPage/:id" makes image id shown
function App() {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route path="/photoPage/:id" component={PhotoPage} />
                    <FetchData />
                </Switch>
            </div>
        </Router>
    );
}

export default App;

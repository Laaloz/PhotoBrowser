import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FetchData from "./FetchData";
import PhotoPage from "./PhotoPage";

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/photoPage/:id" component={PhotoPage} />
                <div className="App">
                    <h1>Photobrowser</h1>
                    <FetchData />
                </div>
            </Switch>
        </Router>
    );
}

export default App;

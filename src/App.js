import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import FetchData from "./FetchData";
import PhotoPage from "./PhotoPage";

//Photopage route path="/photoPage/:id" makes image id shown
function App() {
    return (
        <Router>
            <Route path="/photoPage/:id" component={PhotoPage} />
            <div className="App">
                <h1>Photobrowser</h1>
                <FetchData />
            </div>
        </Router>
    );
}

export default App;

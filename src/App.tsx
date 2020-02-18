import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./sass/index.scss";
import configureStore from "./reducers/configureStore";
import Homepage from "./screens/Homepage";
import DevTools from "./utils/DevTools";
import Error404 from "./screens/Error404";
import SearchScreen from "./screens/SearchScreen";

const store = configureStore();

const App: React.FC = () => (
    <Router>
        <Provider store={store}>
            <Switch>
                <Route exact path="/" component={Homepage} />
                <Route exact path="/search" component={SearchScreen} />
                <Route component={Error404} />
            </Switch>
            {process.env.NODE_ENV === "development" && <DevTools />}
        </Provider>
    </Router>
);

export default App;

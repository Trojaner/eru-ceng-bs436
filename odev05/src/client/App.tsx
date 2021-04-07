import React from "react";
import { render } from "react-dom";
import { Route, Switch } from "react-router";
import { HashRouter } from "react-router-dom";
import Game from "./pages/Game";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

class App extends React.Component {
    render() {
        return (
            <HashRouter>
                <Switch>
                    <Route exact={true} path='/Game' component={Game} />
                    <Route exact={true} path='/' component={Index} />
                    <Route component={NotFound} />
                </Switch>
            </HashRouter>
        );
    }
}

const root = document.getElementById("root");
render(<App />, root);
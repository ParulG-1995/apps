import React from 'react';
import ReactDOM from 'react-dom';
import Login from './App'
import Page from './Page'
import User from './User'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

class Home extends React.Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <Switch>
                        <Route path="/" component={Login} exact />
                        <Route path="/page" component={Page} />
                        <Route path="/user" exact component={User} />
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}
export default Home;
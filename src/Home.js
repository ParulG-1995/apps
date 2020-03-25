import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import Page from './Page'
import User from './User'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

class Home extends React.Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <Switch>
                        <Route path="/" component={App} exact />
                        <Route path="/page" component={Page} />
                        <Route path="/user" component={User} />
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}
export default Home;
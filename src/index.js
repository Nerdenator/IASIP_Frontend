import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link
} from 'react-router-dom';

const TheGang = () => (
    <div>
        <ul>
            {

            }
        </ul>
    </div>
)

const Home = () => (
    <div>
        <h1>The Gang Gets Indicted</h1>
    </div>
);

const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Home} />
        </Switch>
    </main>
);

const Header = () => (
    <header>
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/gang">The Gang</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
        </nav>
    </header>
);

class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Main/>
            </div>
        )
    }
}

ReactDOM.render((
        <Router>
            <App/>
        </Router>
    ), document.getElementById('root')
);

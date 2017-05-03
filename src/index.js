import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link
} from 'react-router-dom';
import axios from 'axios';

class TheGang extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            gangList: []
        };
    }

    componentDidMount() {
        axios.get(`http://iasip-backend.herokuapp.com/characters/?format=json`)
            .then(res => {
                //console.log(res.data.map(function(a) {return a.preferred_name;}));
                const theGang = res.data.map(obj => obj.preferred_name);
                this.setState({gangList:theGang});
                console.log(this.state);
            })
    }

    render(){
        return(
            <ul>
                {this.state.gangList.map(member =>
                    <li key={member}><Link to={`/${member.toLowerCase()}`}>{member}</Link></li>
                )}
            </ul>
        )
    }
}

const Home = () => (
    <div>
        <h1>The Gang Gets Indicted</h1>
    </div>
);

const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/gang' component={TheGang} />
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

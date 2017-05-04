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

const GangMember = (props) => {

    const gangMember = axios.get(`http://iasip-backend.herokuapp.com/character_crime_list/${this.props.state.gangList.member}`)
        .then(res => {
            const theGang = res.data.map(obj => obj);
        });
};

class TheGang extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            gangList: []
        }
    }

    componentDidMount() {
        axios.get(`http://iasip-backend.herokuapp.com/characters/?format=json`)
            .then(res => {
                console.log(res);
                const theGang = res.data.map(obj => obj);
                this.setState({gangList: theGang});
                console.log(this.state);
            });
    }

    render() {
        return (
            <div>
                <h1>TheGang component</h1>

                <ul>
                    {this.state.gangList.map(member =>
                        <li key={member.id}>
                            <Link to={
                                {
                                    pathname: `/the_gang/${member.preferred_name.toLowerCase()}`,
                                    state: { gangList: this.state.gangList }
                                }
                            }>{member.preferred_name}</Link>
                        </li>
                    )}
                </ul>

            </div>
        )
    }
}

const Gang = () => (
    <Switch>
        <Route exact path="/the_gang" component={TheGang}/>
        <Route path="/the_gang/:member" component={GangMember}/>
    </Switch>
);

const
    Home = () => (
        <div>
            <h1>The Gang Gets Indicted</h1>
        </div>
    );

const
    Main = () => (
        <main>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/the_gang' component={Gang}/>
            </Switch>
        </main>
    );

const
    Header = () => (
        <header>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/the_gang">The Gang</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
            </nav>
        </header>
    );

class App
    extends Component {
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

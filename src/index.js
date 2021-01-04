import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import NavBar from './NavBar.js';
import Flask from './Project/FlaskFam.js';
import Home from './Home.js';
import Resume from './Resume.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import UBS from './Work/UBS.js';
import SLB from './Work/SLB.js';
import Chatboy from './Project/Chatboy.js';


class App extends React.Component {

    render(){
        return(
            <Router>
                <div style={{backgroundColor:'#1B1C1D'}}>
                    <NavBar />
                    <Switch>
                        <Route path="/" exact component={ Home } />
                        <Route path="/chatboy" component={ Chatboy }/>
                        <Route path="/flask" component={ Flask }/>
                        <Route path="/resume" component={ Resume } />
                        <Route path="/ubs" component={ UBS } />
                        <Route path="/slb" component={ SLB } />
                    </Switch>
                </div>
            </Router>
        );
    };
};


ReactDOM.render(<App />, document.querySelector('#root'));
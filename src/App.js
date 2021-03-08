import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import Chatboy from './Project/Chatboy';
import Flask from './Project/FlaskFam';
import Resume from './Resume';
import UBS from './Work/UBS';
import SLB from './Work/SLB';
import Fintech from './FintechSG/FintechSG';
import NavBar from './NavBar';

class App extends React.Component {
    state = {  }
    render() { 
        return (
            <div style={{backgroundColor:'#1B1C1D'}}>
                    <NavBar />
                    <Switch>
                        <Route path="/" exact component={ Home } />
                        <Route path="/chatboy" component={ Chatboy }/>
                        <Route path="/flask" component={ Flask }/>
                        <Route path="/resume" component={ Resume } />
                        <Route path="/ubs" component={ UBS } />
                        <Route path="/slb" component={ SLB } />
                        <Route path="/fintechsg" component={ Fintech }></Route>
                    </Switch>
                </div>
        );
    }
}
 
export default App;
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { BrowserRouter as Router, Route  } from 'react-router-dom';
import Leftnav from '../components/Leftnav';
import GridData from '../components/GridData';
import MyTeamAllocations from './MyTeamAllocations';
import Login from './Login';
import MyTeam from './MyTeam';

class PageLayout extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return(
            <Router>
            <div>
                <section className="container"> 
                    <div className="row">
                    <div className="col-md-4">
                        <Leftnav />
                    </div>
                    <div className="col-md-8">
                        <div>
                            <Route  path="/MyLogin" component={Login} />
                            <Route  path="/MyTeam" component={MyTeam} />
                            <Route exact path="/" component={MyTeam} />
                            <Route  path="/MyTeamAllocations" component={MyTeamAllocations} />
                        </div>
                    </div>
                    </div>
                </section> 
            </div>
            </Router> 
        )
    }
}

export default PageLayout;
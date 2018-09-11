import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import Leftnav from '../components/Leftnav';
import SectionContent from './SectionContent';


class PageLayout extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return(
            <div>
                <section className="container"> 
                    <div className="row">
                    <div className="col-md-4">
                        <Leftnav />
                    </div>
                    <div className="col-md-8"> 
                        <SectionContent />
                    </div>
                    </div>
        </section> 
            </div>
        )
    }
}


export default PageLayout;
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';


class Leftnav extends Component {
    constructor(props){
        super(props);
        console.log(props, 'LEFTNAV props')
    }
    render() {
        return(
            <div>
                <aside>
                <ul className="nav flex-column">
                    {
                        this.props.LeftNavData.map((LeftNavData, index)=> (
                            <li className="nav-item" key={LeftNavData.id}>
                                <Link to={LeftNavData.url}>{LeftNavData.name}</Link>
                            </li>
                        ))
                    }
                  </ul>
                </aside>
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log(state);
    debugger
    return {
        LeftNavData : state.LeftNavData
    }
}

export default connect(mapStateToProps)(withRouter(Leftnav));
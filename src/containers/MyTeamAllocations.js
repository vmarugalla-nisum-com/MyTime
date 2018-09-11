import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { myTeamAllocation } from '../actions';

class MyTeamAllocations extends Component{
    constructor(props) {
        super(props);
    }

    componentWillMount(){
        this.props.onLoad('TEAMALLOCATION_DATA');
    }

    render(){
        return (
            <div>
                <h2>MyTeamAllocations </h2>
                {this.props.ContentSection.content}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        ContentSection: state.ContentSection
    }
}


const mapDispatchToProps = dispatch => (
    {
        onLoad: ( flag ) => dispatch(myTeamAllocation( flag ))
    }
 );

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(MyTeamAllocations));
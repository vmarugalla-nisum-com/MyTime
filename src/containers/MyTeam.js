import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { myTeamData } from '../actions';

class MyTeam extends Component{
    constructor(props) {
        super(props);
    }
    componentWillMount(){
        this.props.onLoad('MYTEAM_DATA');
    }
    render(){
        return (
            <div>
                 <h2>MyTeam</h2>
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
       onLoad: ( flag ) => dispatch(myTeamData( flag ))
   }
);

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(MyTeam));
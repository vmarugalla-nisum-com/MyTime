import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { fetchData } from '../actions';

class Login extends Component{
    constructor(props) {
        super(props);;
    }
    componentWillMount(){
        this.props.onLoad('LOGIN_DATA');
    }
    render(){
        return (
            <div>
                <h2>Login </h2>
                {this.props.ContentSection.content}
            </div>
        )
    }
}

const mapStateToProps = (state) => (
     {
        ContentSection: state.ContentSection
    }
);


const mapDispatchToProps = dispatch => (
    {
        onLoad: ( flag ) => dispatch(fetchData( flag ))
    }
);

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Login));
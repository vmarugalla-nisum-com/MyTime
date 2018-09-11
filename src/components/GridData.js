import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

class GridData extends Component{
    constructor(props) {
        super(props);
        console.log(this.props);
        debugger
    }
    render(){
        return (
            <div>  
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

export default connect(mapStateToProps)(withRouter(GridData));
//export default GridData;
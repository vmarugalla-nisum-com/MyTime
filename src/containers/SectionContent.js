import React, { Component } from 'react';
import GridData from '../components/GridData';

class SectionContent extends Component {
    
    render() {
        return(
                <section className="container">
                        <h3> Respective section Data</h3>
                        <GridData />
                </section> 
        )
    }
}

// mapStateToProps = (state) => {
//     return {
//         ContentSection: state.ContentSection
//     }
// }

export default SectionContent;
import React, { Component } from 'react';
import { BrowserRouter as Router, Route  } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import { Provider } from 'react-redux';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import PageLayout from './containers/PageLayout';

class App extends Component {
  constructor(props){
    super(props);

    
  }
  componentWillMount(){

    // this.props.LeftNavData.map( ({name}, index) => {
    //   if(name ==='MyTeam') {
    //     this.MyTeam = 'MyTeam'
    //   } else if(name === 'My Team Allocations') {
    //     this.allocation = 'My Team Allocations';
    //   } else {
    //     this.login = 'My Login Details'
    //   }
    // });
  }

  render() {
    return (
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <PageLayout />
          <footer className="App-header">
              <p>Footer</p>
          </footer>
        </div>
    );
  }
}


const mapStateToProps = state => {
    console.log(state);
    return {
        LeftNavData : state.LeftNavData,
        ContentSection: state.ContentSection
    }
}

//export default connect(mapStateToProps)(withRouter(App));
export default App;

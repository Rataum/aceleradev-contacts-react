import React from 'react';

import './App.scss';
import Contacts from './components/Contacts';
import Topbar from './components/Topbar';
import Filters from './components/Filters';

class App extends React.Component {

  originalValue = [];

	constructor(props) {
		super(props);
    this.state = { data: [] };
    this.parentHandler = this.parentHandler.bind(this);
  }

  parentHandler(data) {
    this.setState({
      data: data
    });
  }

  componentDidMount() {
		fetch('https://5e82ac6c78337f00160ae496.mockapi.io/api/v1/contacts')
      .then((response) => response.json())
      .then((json) => {
        this.setState({ data: json })
        this.originalValue = json;
      });
  }

  render() {
    return (
      <React.Fragment>        
        <Topbar />
        <Filters data={this.state.data} originalData={this.originalValue} parentHandler={this.parentHandler}/>        
        <Contacts data={this.state.data} />
      </React.Fragment>
    )
  }
}

export default App;

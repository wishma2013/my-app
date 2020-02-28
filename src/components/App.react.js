import React, {Component} from 'react';

class App extends Component {

  constructor(props){
    super(props)
    console.log(props)
    this.state = {
      no : 'ok!'
    }
  }

  componentDidMount() {
    console.log("App didMount")
  }

  componentWillUnmount() {
    console.log("App willUnMount")
  }


  render() {
    return this.props.children
  }
}

export default App;

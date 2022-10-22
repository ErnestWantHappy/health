import React from 'react';
import './App.scss';
import axios from 'axios'
import List01 from '../src/storybook/Part/Carousel'
class App extends React.Component{

  constructor(props){
    super(props)
    // 测试axios
    axios.get("data.json").then(res=>{
      console.log(res);
    })
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          sxx
          <List01>
            <p>this os is </p>
          </List01>
        </header>
      </div>
    );
  }
}

export default App;

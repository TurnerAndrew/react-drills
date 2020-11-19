import { render } from '@testing-library/react';
import React, {Component} from 'react';
import './App.css';
import Todo from './components/Todo'

class App extends Component{
  constructor(){
    super()

    this.state ={
      list: [],
      input: ''
    }
    this.listAdd = this.listAdd.bind(this)
  }


inputChange(val){
  this.setState({input: val})
}

listAdd(){
  this.setState({
    list: [...this.state.list, this.state.input],
    input: ''
  })
}




 render() {
   let list = this.state.list.map((element, index) => {
     return <Todo key={index} task={element} />
   })
 
 return (
  <div className="App">
    <h1>To Do List:</h1>
  
    <div>
      <input
        value={this.state.input}
        onChange={e => this.inputChange(e.target.value)}
      />

      <button onClick={this.listAdd}>Add</button>

    </div>

    {list}

  </div>
 )}
}


export default App;

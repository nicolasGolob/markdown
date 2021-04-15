import React, {Component} from 'react'
import './styles/App.css'
import {text} from './data/text'

class App extends Component{
  
  state={text}

  handleChange=(event)=>{
    const text=event.target.value
    this.setState({text})
  }
  render(){
    const {text} = this.state
    return(
      <div className='container'>
        <div className='row'>
          <div className='col-sm-6'>
            <textarea
              className='form-control'
              value={text}
              onChange={this.handleChange}
              rows="35"/> 
          </div>
          <div className='col-sm-6'>
            <h1>Résultat</h1>
            {text}
          </div>

        </div>
      </div>

    )
    }

}

export default App;

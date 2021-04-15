import React, {Component} from 'react'
import './styles/App.css'
import {text} from './data/text'
import marked from 'marked'

class App extends Component{
  state={text}

  handleChange=(event)=>{
    const text=event.target.value
    this.setState({text})
  }
  renderText = (text)=>{
    const __html = marked(text, {sanitize:true})
    return{__html}
  }

  // componentDidMount(){
  //   const text= localStorage.getItem('text')
  //   if(text){
  //     this.setState({text})
  //   }else(
  //     this.setState({text})
  //   )
  // }

  // componentDidUpdate(){
  //   const {text} = this.state
  //   localStorage.setItem('text', text)
  // }

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
            <div dangerouslySetInnerHTML={this.renderText(text)}>
            </div>
          </div>

        </div>
      </div>

    )
    }

}

export default App;

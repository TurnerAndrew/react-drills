import React, {Component} from 'react'

class Text extends Component{
    constructor(){
        super()

        this.state ={
            input: '',
        }
    }
    
    textInput(val) {
        this.setState({input: val})
    }
    


    render(){
        return(
            <div>
                <input onInput={(e) => this.textInput(e.target.value)}></input>
                <p>{this.state.input}</p>
            </div>

        )
    }
}


export default Text
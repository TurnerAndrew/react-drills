import React, {Component} from 'react'

class Login extends Component {
    constructor(){
        super()

        this.state = {
            username: '',
            password: ''

        }
    }

    setUser(val){
        this.setState({username: val})
    }

    setPass(val){
        this.setState({password: val})
    }

    
    render(){
        return (
            <div>
                <input onChange={(e) => this.setUser(e.target.value)}></input>
                <input type='password' onChange={(e) => this.setPass(e.target.value)}></input>
                <button onClick={() => window.alert(`username: ${this.state.username} password: ${this.state.password}`)}>login</button>
            </div>
        )
    }

}



export default Login
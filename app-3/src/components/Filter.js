import React, {Component} from 'react'

class Filter extends Component {
    constructor(){
        super()
        
        this.state = {
            input: '',
            list: ['Star Wars', 'Back to the Future', 'Ghostbusters', 'Indiana Jones', 'Aliens'],
        }
    }
    
    search(val){
        this.setState({input: val})
    }


    render() {
        let movieList = this.state.list.filter((element, index ) => {
            return element.includes(this.state.input)
        })
        .map((element, index) => {
            return <h2 key={index}>{element}</h2>
        })
        
    return (
        <div>
            <input onChange={e => this.search(e.target.value)}/>
            {movieList}
        </div>
        )
    }
}


export default Filter
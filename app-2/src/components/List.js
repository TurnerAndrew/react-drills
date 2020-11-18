import React, {Component} from 'react'

class List extends Component {
    constructor(){
        super()

        this.state = {
            list: ['yankee and the brave', 'ohh la la', 'out of sight', 'holy calamaf*ck', 'goonies vs ET', 'walking in the snow', 'JU$T', 'never look back', 'the ground below', 'pulling the pin', 'a few words for the firing squad']
        }
    }

    render() {
        let songList = this.state.list.map((element, index) => {
            return (<h2 key={index}>{element}</h2>)
                })
                
        return <div>{songList} </div>
    }
}

export default List
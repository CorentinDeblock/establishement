import React,{Component} from 'react'
import Data from './data'
import Establishement from './establishement'
import HappyDrink from './happyDrink'

export default class Main extends Component{
    constructor(props){
        super(props)

        this.state = {
            input:""
        }
    }
    isDefined() {
        return (this.state.input === "" ? 
                Data.map(value => <Establishement establishement={value} />) : 
                Data.map((value) => {
                    if(value.name.toLowerCase().match(this.state.input.toLowerCase()))
                        return <Establishement establishement={value} />
                }))
    }
    getInput = (event) => {
        this.setState({input:event.target.value})
    }

    render(){ 
        return (
            <div>
                <HappyDrink max={25} min={10}/>
                <input type="text" onChange={this.getInput}></input>
                {this.isDefined()}
            </div>
        )
    }
}
import Button from './button'
import React,{Component} from 'react'

export default class ButtonManager extends Component {
    constructor(props) {
        super(props)
        this.state = {
            like:0,
            dislike:0
        }
    }
    checkAction(event,id,id2) {
        if(event.target.id === id) {
            let obj = {}

            if(this.state[id] === 1) {
                obj[id] = 0
                this.setState(obj)
            }else{
                obj[id] = 1
                obj[id2] = 0;
                this.setState(obj)
            }
        }
    }
    action = (event,active) => {
        this.checkAction(event,"like","dislike")
        this.checkAction(event,"dislike","like")
    }
    render() {
        return (
            <div>
                <div>
                    <Button id="like" counter={this.state.like} related={this.action} default="far fa-thumbs-up" active="fas fa-thumbs-up like" />
                </div>
                <div>
                    <Button id="dislike" counter={this.state.dislike} related={this.action} default="far fa-thumbs-down" active="fas fa-thumbs-down dislike"/>
                </div>
            </div>
        )
    }
}
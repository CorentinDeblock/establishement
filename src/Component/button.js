import React,{Component} from 'react'

export default class Button extends Component {
    constructor() {
        super()
        this.state = {
            active:false
        }
    }

    action = (event) => {
        if(this.props.related)
            this.props.related(event)
        this.setState({active:(this.state.active ? false : true)});
    }
    compare() {
        let def = (this.state.active ? this.props.active : this.props.default);
        if(this.props.counter !== undefined)
            def = (this.props.counter === 1 ? this.props.active : this.props.default)
        return def;
    }
    render() {
        let str = 'btn mt ' + this.compare()
        return (
            <button id={this.props.id} onClick={this.action} className={str}>{this.props.counter}</button>
        )
    }
}
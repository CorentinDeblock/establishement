import React,{Component} from 'react'
import logo from './../logo.svg';
import RandomUser from './randomUser'

export default class HappyDrink extends Component {
    constructor() {
        super()
        this.state = {
            name:"Someone"
        }
    }
    action = () => {
        this.setState({
            name:RandomUser(Math.random() * (this.props.max - this.props.min) + this.props.min)
        })
    }
    render() {
        return (
            <div>
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                    Welcome {this.state.name} to happyDrink
                    </p>
                    <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    Learn React
                    </a>
                </header>
                <button className="mt" onClick={this.action}>Changer votre pseudo</button>
            </div>
        );
    }
}
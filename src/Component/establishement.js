import React,{Component} from 'react'
import ButtonManager from './ButtonManager'
import Button from './button'

export default class Establishement extends Component {
    render() {
        return (
            <div className="presentation d-flex">
                <Button default="far fa-star" active="fas fa-star active"></Button>
                <div>
                    <h2>{this.props.establishement.name}</h2>
                    <p>{this.props.establishement.description}</p>
                </div>
                <ButtonManager />
            </div>
        )
    }
}
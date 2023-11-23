import {Component} from "react";

class Car extends Component {
    render() {
        const {id, brand, price, year} = this.props.car;
        return (
            <div>
                <i>
                    <div>id: {id}</div>
                    <div>brand: {brand}</div>
                    <div>price: {price}</div>
                    <div>year: {year}</div>
                    <hr/>
                </i>
            </div>
        )
    }
}

export {Car}
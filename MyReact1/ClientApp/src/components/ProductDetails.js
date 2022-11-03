import React, { Component } from 'react';

export default class ProductDetails extends Component {
    constructor(props) {
        super(props);

        this.state = { name: 'some nice items', description: 'this is the item', price: 100 };
    }

    render() {
        return <div className="row">
            <div className="col-12">
                <div className="media">
                    <img src="https://vis.placeholder.com/600" className="mr-3" alt="Item" />
                    <div className="media-body">
                        <h1>{this.state.name}</h1>
                        <p>{this.state.description}</p>
                        <p>${this.state.price}</p>
                    </div>
                </div>
            </div>
        </div>
    }
}
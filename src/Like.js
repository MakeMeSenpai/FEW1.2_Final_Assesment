import React, { Component } from 'react';

class Like extends Component {
    constructor(props) {
      super(props);
      this.state = { 
        count: 0,
      };
    };

    increase() {
        this.setState({ count: this.state.count + 1 });
    }

    decrease() {
        this.setState({ count: this.state.count - 1 });
    }

    render() {
        return (
        <div>
            <button onClick={this.decrease.bind(this)}>Dislike</button>
            <div>
                <h2>{this.state.count}</h2>
            </div>
            <button onClick={this.increase.bind(this)}>Like</button>
        </div>
        )
    }
}

export default Like;
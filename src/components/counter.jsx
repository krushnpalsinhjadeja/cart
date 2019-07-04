import React, { Component } from "react";
import './counter.css';

class Counter extends Component {
  state = {
    count: 0,
    tages : []
  };

  render() {

    

    return (
      <div className="container">
        <span className= { this.getBadge() } >{this.formateCount()}</span>
        <button onClick={ this.handleIncrement} className="btn btn-secondary btn-sm but">Increment</button>
        <button onClick={ this.handleDecrement} className="btn btn-secondary btn-sm but">Increment</button>
      </div>
    );
  }

  handleIncrement = () => {
      this.setState( {count: this.state.count + 1} );
  }

  handleDecrement = () =>  {
    this.setState( {count: this.state.count - 1} );
  }

    // randerTag(){
    //     if (this.state.tages.length === 0) return <p>There are no tags</p>;

    //     return this.state.tages.map(tages => <li key={tages}>{tages}</li>);
    // }

    getBadge() {
        let Classes = "badge m-2 badcolor badge-";
        Classes += this.state.count === 0 ? "warning" : "primary";
        return Classes;
    }

  formateCount() {
    return this.state.count === 0 ? "zero" : this.state.count;
  }
}

export default Counter;

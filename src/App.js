import "./styles.css";
import React from 'react';

/* Updating state as a result of a click action */
class Click extends React.Component {
  constructor(props) {
    super(props)
    this.state = {counter: 0} /* sets initial state counter to 0 */
    }
    handleClick(event) {
      this.setState({counter: ++this.state.counter}) /* increases the counter value by 1 */
    }
    render() {
    return (
      /* attaches the onClick event listener to handleClick trigger */
    <div>
    <button
    onClick={this.handleClick.bind(this)}
    className="btn btn-primary"> 
    Don’t click me {this.state.counter} times!
    </button> 
    </div>
    )
    }
    }    

export default Click;
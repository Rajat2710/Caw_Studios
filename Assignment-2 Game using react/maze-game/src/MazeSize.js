import React,{Component} from 'react';
import Maze from './Maze';

class MazeSize extends React.Component {
    constructor() {
      super();
      this.state = {size: 0};
    }

handleClick = () => {

    let val = prompt('Please enter size of maze', 5);
    val=parseInt(val);
    this.setState({ size : val })

}

  render() {
    return (
      <div >
        <input
          type="button"
          value="input size"
          onClick={this.handleClick}
        />
       
        <Maze size={this.state.size} />
      </div>
    );
  }
};

export default MazeSize;
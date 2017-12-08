import React, {Component} from 'react';
import {render} from 'react-dom';

import afterTyping from '../../src';

const Input = props => (
  <input type="text" {...props} />
);

const InputWithCallback = afterTyping(Input);

const toggleShow = state => ({
  show: !state.show,
});

class Demo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
    }
  }
  render() {
    return <div>
      <h1>react-after-typing Demo</h1>
      <InputWithCallback afterTyping={() => this.setState(toggleShow)}/>
      <br/> 
      {this.state.show && <span>This text is hidden after typing</span>}
    </div>
  }
}

render(<Demo/>, document.querySelector('#demo'))

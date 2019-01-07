import React, { Component } from 'react';
import Viewer from '../containers/viewer.js';

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      video_id : [
        {
          name: 'Symphony',
          id: 'aatr_2MstrI'
        },
        {
          name: 'EdSheren_1',
          id: '2Vv-BfVoq4g'
        },
        {
          name: 'EdSheren_2',
          id: 'lp-EO5I60KA'
        },
        {
          name: 'see you again',
          id: 'RgKAFK5djSk'
        },
        {
          name: 'treat you better',
          id: 'lY2yjAdbvdQ'
        },
        {
          name: 'Rockabye',
          id: 'papuvlVeZg8'
        }
      ],
    }
  }
  render() {
    const { video_id } = this.state;
    return (
      <div>
        {
          video_id.map((item) => (
              <Viewer item={item} />
          ))
        }
      </div>
    );
  }
}

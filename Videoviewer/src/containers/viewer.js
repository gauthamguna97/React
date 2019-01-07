import Youtube from 'react-youtube';
import React, { Component } from 'react';

export default class Viewer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      videoId: "",
      opts: {
        height: '250',
        width: '100%',
        playerVars: { // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      }
    };
  }


  componentDidMount() {
  }

  playVideo() {
    console.log('playing video');
  }
  _onReady = (event) => {
    console.log('video is ready');
  }

  render() {
    const opts = {
      height: '250',
      width: '100%',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    }

    return(
      <div>
        <div>{this.props.item.name}</div>
        <Youtube
          videoId={this.props.item.id}
          opts={opts}
          onReady={this._onReady}
        />
      </div>
    );
  }
}

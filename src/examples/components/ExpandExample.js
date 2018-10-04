import React, { Component, Fragment } from 'react';

import { linkReplace } from "loom-embed";

import { LINK_REPLACED_CLASS } from '../../sdk/common'

import './ExpandExample.css';

const DEFAULT_LOOM_LINK = "https://www.useloom.com/share/0281766fa2d04bb788eaf19e65135184";
const INITIAL_STATE = { fetching: false };
const LINK_SELECTOR = '.loom-video';

class ExpandExample extends Component {
  state = INITIAL_STATE;

  onFetchOembed = async () => {
    if (this.state.fetching) { return; }

    try {
      this.setState({ fetching: true });

      await linkReplace(LINK_SELECTOR);

      this.setState({ fetching: false });

    } catch {
      this.setState({ fetching: false });
    }
  };

  onResetClick = () => {
    const linkNode = document.querySelector(LINK_SELECTOR);

    linkNode.className = linkNode.className.replace(LINK_REPLACED_CLASS, '');

    const videoNode = document.querySelector('.lo-emb-vid');

    if (videoNode) {
      videoNode.remove();
    }
  }

  render() {
    const { fetching } = this.state;

    return (
      <Fragment>
        <p>Given the HTML content below:</p>
        <div className="video-container">
          <p>Hey you! See the video link below?</p>
          <a className="loom-video" href={DEFAULT_LOOM_LINK}>Loom Video Link</a>
          <p className="sub-comment">Click 'Expand' below to auto-expand the link</p>
        </div>

        <div className="button-container">
          <div
            className={`button-base action-button ${
              fetching ? "disabled" : ""
            }`}
            onClick={this.onFetchOembed}
          >
            { fetching ? "Expanding..." : "Expand Links" }
          </div>
          <div className="button-base reset-button" onClick={this.onResetClick}>
            Reset
          </div>
        </div>
      </Fragment>
    );
  }
}

export default ExpandExample;
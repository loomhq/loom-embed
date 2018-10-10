import React, { Component, Fragment } from 'react';

import { oembed } from "loom-embed";

const ORIGINAL_EXAMPLE = "https://www.useloom.com/share/0281766fa2d04bb788eaf19e65135184";

const INITIAL_STATE = {
  inputText: ORIGINAL_EXAMPLE,
  outputText: "",
  fetching: false
};

class OembedExample extends Component {
  state = INITIAL_STATE;

  onFetchOembed = async () => {
    if (this.state.fetching) { return; }

    try {
      this.setState({ fetching: true });

      const outputText = await oembed(this.state.inputText);

      this.setState({
        outputText: JSON.stringify(outputText, null, 2),
        fetching: false
      });

    } catch {
      this.setState({ fetching: false });
    }
  };

  onResetClick = () => this.setState(INITIAL_STATE);

  onInputChange = ev => this.setState({ inputText: ev.target.value });

  render() {
    const { fetching } = this.state;

    return (
      <Fragment>
        <p>Input:</p>
        <input value={this.state.inputText} onChange={this.onInputChange}></input>

        <div className="button-container">
          <div
            className={`button-base action-button ${
              fetching ? "disabled" : ""
            }`}
            onClick={this.onFetchOembed}
          >
            {fetching ? "Fetching..." : "Fetch"}
          </div>
          <div className="button-base reset-button" onClick={this.onResetClick}>
            Reset
          </div>
        </div>

        <p>Output:</p>
        <textarea rows="4" cols="50" value={this.state.outputText} readOnly />
      </Fragment>
    );
  }
}

export default OembedExample;
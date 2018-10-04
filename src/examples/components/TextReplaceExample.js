import React, { Component, Fragment } from "react";

import { textReplace } from "loom-embed";

const ORIGINAL_EXAMPLE =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod" +
  "tempor ut labore et dolore magna aliqua. " +
  "\n\n" +
  "https://www.useloom.com/share/0281766fa2d04bb788eaf19e65135184" +
  "\n\n" +
  "Tincidunt augue interdum velit euismod in pellentesque.";

const INITIAL_STATE = {
  inputText: ORIGINAL_EXAMPLE,
  outputText: "",
  fetching: false
};

class TextReplaceExample extends Component {
  state = INITIAL_STATE;

  onReplaceTextClick = async () => {
    if (this.state.fetching) { return; }

    try {
      this.setState({ fetching: true });

      const outputText = await textReplace(this.state.inputText);

      this.setState({
        outputText,
        fetching: false
      });

    } catch {
      this.setState({ fetching: false });
    }
  };

  onResetClick = () => this.setState(INITIAL_STATE);

  onTextAreaChange = ev => this.setState({ inputText: ev.target.value });

  render() {
    const { fetching } = this.state;

    return (
      <Fragment>
        <p>Input:</p>
        <textarea
          rows="4"
          cols="50"
          value={this.state.inputText}
          onChange={this.onTextAreaChange}
        />

        <div className="button-container">
          <div
            className={`button-base action-button ${fetching ? "disabled" : ""}`}
            onClick={this.onReplaceTextClick}
          >
            {fetching ? "Replacing..." : "Replace Links"}
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

export default TextReplaceExample;

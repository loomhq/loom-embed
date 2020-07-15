import "./App.css";

import React, { Component, Fragment } from "react";

import ExpandDocs from "./ExpandDocs";
import GettingStarted from './GettingStarted';
import NavMenu from "./NavMenu";
import Oembed from "./Oembed";
import TextReplace from "./TextReplace";

const MethodHeading = ({ title, titleId, children }) => (
  <div className="method-block">
    <h3 id={titleId}>
      <a href={`#${titleId}`}>{title}</a>
    </h3>
    {children}
  </div>
);

const ContentDocs = () => (
  <div className="example-content">
    <div className="section-block">
      <h2 id="getting-started">
        <a href="#getting-started">Getting Started</a>
      </h2>
      <p>The loom embed SDK provides tools for easy embedding of videos</p>

      <MethodHeading title="Installation" titleId="install" />
      <GettingStarted />
    </div>

    <div className="section-block">
      <h2 id="methods">
        <a href="#methods">Methods</a>
      </h2>

      <MethodHeading
        title=".textReplace(textString, [options])"
        titleId="text-replace"
      >
        <p>
          Given a string, it will find and replace Loom URLs with the embed code
        </p>
      </MethodHeading>
      <TextReplace />

      <MethodHeading title=".oembed(videoUrl, [options])" titleId="oembed">
        <p>Fetches oembed metadata of the video</p>
      </MethodHeading>
      <Oembed />

      <MethodHeading title=".linkReplace(selector, [options])" titleId="link-replace">
        <p>Replaces any loom links with the embedded video at the nodes matching the selector</p>
      </MethodHeading>
      <ExpandDocs />
    </div>

    <div className="section-block">
      <h2 id="options">
        <a href="#options">Options = {`{}`}</a>
      </h2>
      <p>
        The embed code is responsive by default. Only set the width/height
        values if you require your embed code to be a fixed size
      </p>

      <MethodHeading title="width: Number" titleId="option-width">
        <p>Max width in pixels</p>
      </MethodHeading>

      <MethodHeading title="height: Number" titleId="option-height">
        <p>Max height in pixels</p>
      </MethodHeading>
    </div>
  </div>
);

class App extends Component {
  render() {
    return (
      <Fragment>
        <header>
          <h1>
            <span className="loom-title">loom</span>
            <span className="subtitle"> embed</span>
          </h1>
        </header>
        <div className="body-container">
          <NavMenu />
          <ContentDocs />
        </div>
      </Fragment>
    );
  }
}
export default App;

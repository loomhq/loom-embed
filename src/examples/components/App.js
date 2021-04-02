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
          <h1 className="loom-heading">
            <svg
              className="loom-title"
              viewBox="0 0 100 30"
              fill="none"
              symbolcolor="#625df5"
              wordmarkcolor="#212121"
            >
              <path
                d="M30.01 13.43h-9.142l7.917-4.57-1.57-2.72-7.918 4.57 4.57-7.915-2.72-1.57-4.571 7.913V0h-3.142v9.139L8.863 1.225l-2.721 1.57 4.57 7.913L2.796 6.14 1.225 8.86l7.917 4.57H0v3.141h9.141l-7.916 4.57 1.57 2.72 7.918-4.57-4.571 7.915 2.72 1.57 4.572-7.914V30h3.142v-9.334l4.655 8.06 2.551-1.472-4.656-8.062 8.087 4.668 1.571-2.72-7.916-4.57h9.141v-3.14h.001zm-15.005 5.84a4.271 4.271 0 11-.001-8.542 4.271 4.271 0 01.001 8.542z"
                fill="#625df5"
              />
              <path
                d="M38.109 25.973V4.027h4.028v21.946h-4.028zM76.742 11.059h3.846v1.82c.818-1.455 2.727-2.244 4.362-2.244 2.03 0 3.665.88 4.422 2.485 1.18-1.82 2.756-2.485 4.725-2.485 2.756 0 5.39 1.667 5.39 5.668v9.67h-3.906v-8.851c0-1.607-.788-2.82-2.636-2.82-1.727 0-2.757 1.335-2.757 2.942v8.73h-3.996v-8.852c0-1.607-.818-2.82-2.636-2.82-1.757 0-2.787 1.305-2.787 2.942v8.73h-4.027V11.059zM51.24 26.405c-4.538 0-7.824-3.367-7.824-7.889 0-4.45 3.276-7.896 7.824-7.896 4.57 0 7.824 3.478 7.824 7.896 0 4.49-3.288 7.889-7.824 7.889zm0-12.135a4.25 4.25 0 00-4.244 4.247 4.25 4.25 0 004.244 4.247 4.25 4.25 0 004.243-4.247 4.25 4.25 0 00-4.243-4.247zM67.667 26.405c-4.538 0-7.824-3.367-7.824-7.889 0-4.45 3.276-7.896 7.824-7.896 4.57 0 7.824 3.478 7.824 7.896 0 4.49-3.29 7.889-7.824 7.889zm0-12.186a4.3 4.3 0 00-4.293 4.296 4.3 4.3 0 004.293 4.296 4.3 4.3 0 004.293-4.296 4.3 4.3 0 00-4.293-4.296z"
                fill="#212121"
              />
            </svg>
            <span className="subtitle">embed</span>
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

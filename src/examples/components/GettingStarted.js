import * as packageJson from '../../../package.json';

import React, { Component } from "react";

import InfoBlock from "./InfoBlock";

const CodeBlock = ({ script }) => (
  <div className="code-block">
      {script}
  </div>
);

class GettingStarted extends Component {
  render() {
    return (
      <div>
        <InfoBlock title="npm">
          <CodeBlock script="npm install @loomhq/loom-embed" />
        </InfoBlock>

        <InfoBlock title="script tag">
          <CodeBlock script={`<script src="https://cdn.loom.com/loom-embed/v${packageJson.version}/sdk.js"></script>`} />
          <p>
            Refer to the{" "}
            <a href="https://github.com/loomhq/loom-embed/blob/master/CHANGELOG.md">
              CHANGELOG.md
            </a>{" "}
            for the latest version
          </p>

          <p>
            If installed by script tag, the methods are exposed through{" "}
            <b>window.loom</b>
          </p>
        </InfoBlock>
        <p />
      </div>
    );
  }
}

export default GettingStarted;

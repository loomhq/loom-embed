import React, { Component } from "react";

import InfoBlock from "./InfoBlock";
import ExpandExample from './ExpandExample';

class ExpandDocs extends Component {
  render() {
    return (
      <div>
        <InfoBlock title="Arguments">
          <p className="description-block">selector (String)</p>
          <p className="description-block">options (Object)</p>
        </InfoBlock>

        <InfoBlock title="Returns">
          <p>Promise -> (Boolean)</p>
        </InfoBlock>

        <InfoBlock title="Example">
          <ExpandExample />
        </InfoBlock>
      </div>
    );
  }
}

export default ExpandDocs;

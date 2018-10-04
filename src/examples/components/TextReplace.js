import React, { Component, Fragment } from "react";

import InfoBlock from './InfoBlock';
import TextReplaceExample from './TextReplaceExample';

class TextReplace extends Component {
  render() {
    return (
      <Fragment>
        <InfoBlock title="Arguments">
          <p className="description-block">textString (String)</p>
          <p className="description-block">options (Object)</p>
        </InfoBlock>

        <InfoBlock title="Returns">
          <p>Promise -> (String)</p>
        </InfoBlock>

        <InfoBlock title="Example">
          <TextReplaceExample />
        </InfoBlock>
      </Fragment>
    );
  }
}

export default TextReplace;

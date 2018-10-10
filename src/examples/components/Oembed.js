import React, { Component } from 'react';

import InfoBlock from './InfoBlock';
import OembedExample from './OembedExample';

class Oembed extends Component {
  render() {
    return (
      <div>
        <InfoBlock title="Arguments">
          <p className="description-block">videoUrl (String)</p>
          <p className="description-block">options (Object)</p>
        </InfoBlock>

        <InfoBlock title="Returns">
          <p>Promise -> (Object)</p>
        </InfoBlock>

        <InfoBlock title="Example">
          <OembedExample />
        </InfoBlock>
      </div>
    );
  }
}

export default Oembed;
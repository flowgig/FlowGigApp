// Dependencies
import React, { Component } from 'react';

// Components
import Gigs from 'components/Gigs';

export default class HomePage extends Component {
  render() {
    return <Gigs bandId={this.props.match.params.bandId} />;
  }
}

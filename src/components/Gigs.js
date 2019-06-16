import React, { Component } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {fetchGigs} from '../actions/gigs';


class Gigs extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchGigs(this.props.bandId);
  }

  render() {
    return (
      <div>
      Gigs
      </div>
    );
  }
}

Gigs.propTypes = {
  bandId: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired
};

const mapDispatchToProps = {
  fetchGigs,
};

const mapStateToProps = state => ({
  gigs: state.gigs
});

export default connect(mapStateToProps, mapDispatchToProps)(Gigs);

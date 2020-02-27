// Dependencies
import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

// Actions
import {fetchGigs} from 'actions/gigs';

class Gigs extends Component {

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

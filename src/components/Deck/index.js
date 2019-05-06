import React, { Component } from 'react';
import Card from '../Card';
import { connect } from 'react-redux';

import './deck.scss';

class Deck extends Component {
  render() {
    return (
      <div className="deck">
        {this.props.deck.map((v, i) => <Card key={i} index={i} />)}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  ...state
})

export default connect(mapStateToProps, null)(Deck);
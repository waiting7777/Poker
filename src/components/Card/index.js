import React, { Component } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { holdCard } from '../../actions/cardAction';

import './card.scss';

class Card extends Component {
  constructor() {
    super();

    this.hold = this.hold.bind(this)
  }
  hold() {
    if (this.props.inGame) {
      this.props.holdCard(this.props.index)
    }
  }
  render() {
    return (
      <div className="poker" onClick={this.hold}>
        <div className={classNames({
          'poker-card': true,
          'active': (this.props.card !== -1)
        })}>
          <div className="poker-card-front">
            <img src='/poker/-1.png' alt="card" />
          </div>
          <div className="poker-card-back">
            <img src={`/poker/${this.props.deck[this.props.index]}.png`} alt="card" />
          </div>
        </div>
        <div className={classNames({
          'poker-mask': true,
          'd-none': !this.props.hold[this.props.index]
        })}>
          Keep
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  ...state
})

export default connect(mapStateToProps, { holdCard })(Card);
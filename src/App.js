import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './components/Header';
import Deck from './components/Deck';

import { drawCard } from './actions/cardAction';

import './App.scss';

class App extends Component {
  constructor() {
    super();

    this.draw = this.draw.bind(this);
    this.holdCard = this.holdCard.bind(this);
  }

  draw() {
    this.props.drawCard();
  }

  renderButton() {
    if (this.props.inGame) {
      return <button className="btn" onClick={this.draw}>Change</button>
    } else {
      return <button className="btn" onClick={this.draw}>Draw</button>
    }
  }

  holdCard(hold) {
    const temp = [false, false, false, false, false];
    for(let i = 0; i < hold.length; i++) {
      temp[hold[i]] = true
    }
    this.setState({
      hold: temp
    });
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="content-panel">
          <h1>Video Poker Bot Strategy</h1>
          <div>
            <Deck />
          </div>
          <div className="btn-contain">
            {this.renderButton()}
          </div>
        </div>
        <div className="odds-panel"></div>
        {
          JSON.stringify(this.props)
        }
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({
  ...state
})

export default connect(mapStateToProps, { drawCard })(App);

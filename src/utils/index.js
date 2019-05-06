import _ from 'lodash'

class card {
  genDeck() {
    const deck = []
    while (deck.length < 5) {
      const card = _.random(51);
      if (!deck.includes(card)) {
        deck.push(card);
      }
    }
    return deck;
  }
}

export default card;
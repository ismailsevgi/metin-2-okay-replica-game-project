import { createCards } from './createCards';
import _, { initial } from 'lodash';
import { ICard } from '../constants/types';
import { CardStates } from '../constants/constants';

export function getNewGame() {
  let newDeck = _.shuffle([
    ...createCards('BLUE'),
    ...createCards('RED'),
    ...createCards('YELLOW'),
  ]);

  let firstFive: ICard[] = [];

  for (let i = 0; i < 5; i++) {
    let card = newDeck.pop();
    card!.state = CardStates.ON_TOP;

    if (card) {
      firstFive.push(card);
    }
  }

  return {
    deck: newDeck,
    onTop: firstFive,
    onBottom: [],
    used: [],
    discarded: [],
    point: 0,
  };
}

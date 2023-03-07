import { CardStates } from '../constants/constants';
import { ICard } from '../constants/types';
CardStates;
export function createCards(color: 'RED' | 'BLUE' | 'YELLOW') {
  let arr: ICard[] = [];
  for (let i = 1; i < 9; i++) {
    arr.push({
      id: crypto.randomUUID(),
      color: color,
      number: i,
      state: CardStates.IN_DECK,
    });
  }
  return arr;
}

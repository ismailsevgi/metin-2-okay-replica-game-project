import { ICard } from '../constants/types';

export function createCards(color: 'RED' | 'BLUE' | 'YELLOW') {
  let arr: ICard[] = [];
  for (let i = 1; i < 9; i++) {
    arr.push({
      id: crypto.randomUUID(),
      color: color,
      number: i,
      state: 'IN_DECK',
    });
  }
  return arr;
}

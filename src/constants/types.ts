import { CardStates } from './constants';

export interface ICard {
  color: 'RED' | 'BLUE' | 'YELLOW';
  number: number;
  id: string;
  state: CardStates;
}

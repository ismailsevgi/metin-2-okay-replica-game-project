import {
  IN_DECK,
  USED,
  ON_TOP,
  ON_BOTTOM,
  DISCARDED,
  NEW_GAME,
} from './constants';

export interface ICard {
  color: 'RED' | 'BLUE' | 'YELLOW';
  number: number;
  id: string;
  state:
    | typeof IN_DECK
    | typeof USED
    | typeof ON_TOP
    | typeof ON_BOTTOM
    | typeof DISCARDED
    | typeof NEW_GAME;
}

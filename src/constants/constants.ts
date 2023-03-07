//In deck: Şu anda kart destenin içindedir
//On Top: Şu anda kart Top board'dadır
//On Bottom: Şu anda kart Bottom Board'dadır
//Used: Kart kullanılmıştır.
//Discarded: Kart Çıkarılmıştır.

export enum ActionTypes {
  TO_TOP = 'TO_TOP',
  TO_BOTTOM = 'TO_BOTTOM',
  DISCARD = 'DISCARD',
  NEW_GAME = 'NEW_GAME',
  DRAW = 'DRAW',
  USED = 'USED',
}

export enum CardStates {
  IN_DECK = 'IN_DECK',
  USED = 'USED',
  ON_TOP = 'ON_TOP',
  ON_BOTTOM = 'ON_BOTTOM',
  DISCARDED = 'DISCARDED',
  NEW_GAME = 'NEW_GAME',
}

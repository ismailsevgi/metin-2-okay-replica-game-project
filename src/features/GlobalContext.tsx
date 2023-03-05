import { createContext, useContext, useReducer, useState } from 'react';
import { ICard } from '../constants/types';
import _, { initial } from 'lodash';
import { createCards } from '../utils/createCards';
import {
  IN_DECK,
  USED,
  ON_TOP,
  TO_TOP,
  ON_BOTTOM,
  TO_BOTTOM,
  DISCARDED,
  NEW_GAME,
  DRAW,
} from '../constants/constants';

type ACTION_TYPES =
  | { type: typeof DISCARDED; payload: string }
  | { type: typeof TO_BOTTOM; payload: string }
  | { type: typeof TO_TOP; payload: string }
  | { type: typeof NEW_GAME; payload: string }
  | { type: typeof USED; payload: string }
  | { type: typeof DRAW };

interface Istate {
  deck: ICard[];

  onTop: ICard[];
  onBottom: ICard[];
  used: ICard[];
  discarded: ICard[];
  point: number;
}

type ContextType = {
  state: Istate;
  dispatch: React.Dispatch<ACTION_TYPES>;
};

type GlobalContextProviderProps = {
  children: React.ReactNode;
};

const GlobalContext = createContext<ContextType | undefined>(undefined);

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error(
      'useGlobalContext must be used within a GlobalContextProvider'
    );
  }
  return context;
};

export const GlobalContextProvider: React.FC<GlobalContextProviderProps> = ({
  children,
}) => {
  let newDeck = _.shuffle([
    ...createCards('BLUE'),
    ...createCards('RED'),
    ...createCards('YELLOW'),
  ]);

  let firstFive: ICard[] = [];

  for (let i = 0; i < 5; i++) {
    let card = newDeck.pop();
    card!.state = 'ON_TOP';

    if (card) {
      firstFive.push(card);
    }
  }

  const initialState: Istate = {
    deck: newDeck,
    onTop: [...firstFive],
    onBottom: [],
    used: [],
    discarded: [],
    point: 0,
  };

  const myReducer = (initialState: Istate, action: ACTION_TYPES) => {
    switch (action.type) {
      case TO_BOTTOM:
        if (initialState.onBottom.length === 3) {
          alert(
            `You can't put more card on bottom shelf current bottom cards: ${initialState.onBottom}`
          );
          return initialState;
        }

        console.log('!TO BOTTOM');

        const movingCard = initialState.onTop.find(
          (card) => card.id === action.payload
        );

        movingCard!.state = 'ON_BOTTOM';
        return {
          ...initialState,
          onTop: [
            ...initialState.onTop.filter((card) => card.id !== action.payload),
          ],
          onBottom: [...initialState.onBottom, movingCard],
        };

      case TO_TOP:
        if (initialState.onTop.length === 5) {
          alert("You can't put more card on top shelf");
          return initialState;
        }
        console.log('!TO TOP');
        const removedCard = initialState.onBottom.find(
          (card) => card.id === action.payload
        );
        removedCard!.state = 'ON_TOP';
        return {
          ...initialState,
          onBottom: [
            ...initialState.onBottom.filter(
              (card) => card.id !== action.payload
            ),
          ],
          onTop: [...initialState.onTop, removedCard],
        };

        if (initialState.onTop.length === 5) {
          alert("You can't put more card on top shelf");
          return initialState;
        }
        const cards_indeck = initialState.deck.filter(
          (card: ICard) => card.state === 'IN_DECK'
        );

        console.log('DRAWED!');

        initialState.deck[cards_indeck.length] = {
          ...initialState.deck[cards_indeck.length],
          state: 'ON_TOP',
        };
        return initialState;

      case NEW_GAME:
        return initialState;
    }
  };

  const [state, dispatch] = useReducer(myReducer, initialState);

  const contextValue: ContextType = {
    state,
    dispatch,
  };

  return (
    <GlobalContext.Provider value={contextValue}>
      {children}
    </GlobalContext.Provider>
  );
};

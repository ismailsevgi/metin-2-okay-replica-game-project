import { createContext, useContext, useReducer, useState } from 'react';
import { ICard } from '../constants/types';
import _, { initial } from 'lodash';

import { ActionTypes, CardStates } from '../constants/constants';
import { getNewGame } from '../utils/getNewGame';
import { getPoints } from '../utils/getPoints';
import { ToastContainer, toast } from 'react-toastify';

type ACTION_TYPES = { type: ActionTypes; payload: string };

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
  const gameState = getNewGame();

  const myReducer = (gameState: Istate, action: ACTION_TYPES) => {
    switch (action.type) {
      case ActionTypes.TO_BOTTOM:
        if (gameState.onBottom.length === 3) {
          toast('LIMIT IS 3!');
          return gameState;
        }

        console.log('!TO BOTTOM', gameState);

        const movingCard = gameState.onTop.find(
          (card) => card.id === action.payload
        );

        if (movingCard) {
          movingCard!.state = CardStates.ON_BOTTOM;

          const newState = {
            ...gameState,
            onTop: [
              ...gameState.onTop.filter((card) => card.id !== action.payload),
            ],
            onBottom: [...gameState.onBottom, movingCard],
          };
          console.log('test x');
          //FINAL
          if (newState.onBottom.length === 3) {
            console.log('test 2');
            const result = getPoints(newState.onBottom);
            if (result.isConsecutive || result.isSameNumber) {
              return {
                ...newState,

                used: [...newState.used, ...newState.onBottom],
                onBottom: [],
                point: newState.point + result.totalPoint,
              };
            } else {
              return newState;
            }
          } else {
            return newState;
          }
        } else {
          //error handler
          return gameState;
        }

      case ActionTypes.TO_TOP:
        if (gameState.onTop.length === 5) {
          toast(`TOP BOARD LIMIT IS 5!`);
          return gameState;
        }

        console.log('!TO TOP');
        const removedCard = gameState.onBottom.find(
          (card) => card.id === action.payload
        );

        if (removedCard) {
          removedCard!.state = CardStates.ON_TOP;

          return {
            ...gameState,
            onBottom: [
              ...gameState.onBottom.filter(
                (card) => card.id !== action.payload
              ),
            ],
            onTop: [...gameState.onTop, removedCard],
          };
        } else {
          return gameState;
        }

      case ActionTypes.DRAW:
        if (gameState.onTop.length === 5) {
          toast(`THERE IS NOT ENOUGH SPACE!`);
          return gameState;
        }

        console.log('DRAWED!');
        const lastCard = gameState.deck.pop();

        if (lastCard) {
          lastCard.state = CardStates.ON_TOP;

          return { ...gameState, onTop: [...gameState.onTop, lastCard] };
        } else {
          alert('There is no card left!');
        }

        return gameState;

      case ActionTypes.NEW_GAME:
        return getNewGame();

      case ActionTypes.DISCARD:
        const discardedCard =
          gameState.onTop.find((card) => card.id === action.payload) ||
          gameState.onBottom.find((card) => card.id === action.payload);

        if (discardedCard) {
          return {
            ...gameState,
            onBottom: [
              ...gameState.onBottom.filter(
                (card) => card.id !== action.payload
              ),
            ],
            onTop: [
              ...gameState.onTop.filter((card) => card.id !== action.payload),
            ],
            discarded: [...gameState.discarded, discardedCard],
          };
        } else {
          return gameState;
        }

      default:
        return gameState;
    }
  };

  const [state, dispatch] = useReducer(myReducer, gameState);

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

import React, { useState } from 'react';
import { ActionTypes } from '../../constants/constants';
import { useGlobalContext } from '../../features/GlobalContext';
import Card from '../Card/Card';
import './BottomSlot.scss';

function BottomSlot() {
  const { state, dispatch } = useGlobalContext();

  const cards_indeck = state.deck.length;

  return (
    <div className='max-h-[250px] flex justify-between items-center bg-slate-800 font-cardFont border-t-2 border-b-2 border-orange-600'>
      <div className='max-h-[250px] max-w-[500px] grid grid-cols-3 place-items-center gap-4 my-4 mx-4'>
        {state.onBottom.map((card) => {
          return <Card key={card.id} card={card} />;
        })}
      </div>
      <div
        className='deckWrap'
        onClick={() => dispatch({ type: ActionTypes.DRAW, payload: 'null' })}
      >
        <div className='deckWrap-outer'>
          <div className='inner'>
            <div className='red'></div>
            <div className='blue'></div>
            <div className='yellow'></div>
          </div>
        </div>
        <p className='text-white text-4xl text-center '>DECK</p>
        <p className='text-white absolute bottom-0 mx-2 my-2 right-0 text-4xl text-center'>
          {cards_indeck}
        </p>
      </div>
    </div>
  );
}

export default BottomSlot;

import React, { useState } from 'react';
import { ActionTypes } from '../../constants/constants';
import { useGlobalContext } from '../../features/GlobalContext';
import Card from '../Card/Card';

function BottomSlot() {
  const { state, dispatch } = useGlobalContext();

  const cards_indeck = state.deck.length;

  return (
    <div className='h-[250px] flex justify-between items-center bg-slate-800 font-cardFont border-t-2 border-b-2 border-orange-600'>
      <div className='h-[250px] w-[500px] grid grid-cols-3 place-items-center '>
        {state.onBottom.map((card) => {
          return <Card key={card.id} card={card} />;
        })}
      </div>
      <div
        id='deckWrap'
        className='h-[200px] mr-[23px] border-2 w-[125px] bg-blue-900 cursor-pointer'
        onClick={() => dispatch({ type: ActionTypes.DRAW, payload: 'null' })}
      >
        <p className='text-white text-4xl text-center '>DECK</p>
        <p className='text-white text-4xl text-center'>{cards_indeck}</p>
      </div>
    </div>
  );
}

export default BottomSlot;

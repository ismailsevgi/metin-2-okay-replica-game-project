import React, { useState } from 'react';
import { useGlobalContext } from '../../features/GlobalContext';
import Card from '../Card/Card';

function BottomSlot() {
  const { state, dispatch } = useGlobalContext();

  const cards_indeck = state.deck.length;

  return (
    <div className='h-[250px] flex justify-between items-center bg-[#565656]'>
      <div className='h-[250px] w-[500px] border-2  flex justify-evenly items-center '>
        {state.onBottom.map((card) => {
          return <Card key={card.id} card={card} />;
        })}
      </div>
      <div
        id='deckWrap'
        className='h-[200px] mr-[23px] border-2 w-[125px] bg-blue-900 cursor-pointer'
        onClick={() => dispatch({ type: 'DRAW' })}
      >
        <p className='text-white text-4xl text-center '>DECK</p>
        <p className='text-white text-4xl text-center'>{cards_indeck}</p>
      </div>
    </div>
  );
}

export default BottomSlot;

import React from 'react';
import { useGlobalContext } from '../../features/GlobalContext';
import Card from '../Card/Card';

type Props = {};

function TopSlot({}: Props) {
  const { state, dispatch } = useGlobalContext();

  return (
    <div className='h-[250px] max-w-[800px] mx-auto bg-slate-800 border-b-2  border-orange-600 font-cardFont'>
      <div className='grid px-4 grid-cols-5 place-content-center h-full gap-4'>
        {state.onTop.map((card) => {
          return <Card key={card.id} card={card} />;
        })}
      </div>
    </div>
  );
}

export default TopSlot;

import React from 'react';
import { useGlobalContext } from '../../features/GlobalContext';
import Card from '../Card/Card';

type Props = {};

function TopSlot({}: Props) {
  const { state, dispatch } = useGlobalContext();

  return (
    <div className='h-[250px] w-[800px] mx-auto bg-[#565656]'>
      <div className='flex justify-evenly items-center h-full'>
        {state.onTop.map((card) => {
          return <Card key={card.id} card={card} />;
        })}
      </div>
    </div>
  );
}

export default TopSlot;

import React from 'react';
import './Card.scss';

import { ICard } from '../../constants/types';
import { useGlobalContext } from '../../features/GlobalContext';
type Props = {
  card: ICard;
};

function Card({ card }: Props) {
  const { state, dispatch } = useGlobalContext();

  return (
    <div
      onClick={() =>
        dispatch({
          type: card.state === 'ON_TOP' ? 'TO_BOTTOM' : 'TO_TOP',
          payload: card.id,
        })
      }
      className={`cardWrapper BACKGROUND-${card.color} h-[200px] w-[125px] rounded-[10px]`}
    >
      <h1 className=' text-white text-9xl'>{card.number}</h1>
      <h3>CARD STATE: {card.state}</h3>
    </div>
  );
}

export default Card;

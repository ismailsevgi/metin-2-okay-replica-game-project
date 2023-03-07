import './Card.scss';

import { ICard } from '../../constants/types';
import { useGlobalContext } from '../../features/GlobalContext';
import { ActionTypes, CardStates } from '../../constants/constants';

type Props = {
  card: ICard;
};

function Card({ card }: Props) {
  const { state, dispatch } = useGlobalContext();

  return (
    <div
      onClick={() =>
        dispatch({
          type:
            card.state === CardStates.ON_TOP
              ? ActionTypes.TO_BOTTOM
              : ActionTypes.TO_TOP,
          payload: card.id,
        })
      }
      className={`cardWrapper cursor-pointer relative BACKGROUND-${card.color} h-[200px] w-[125px] rounded-[10px]`}
    >
      <h1 className=' text-white text-9xl'>{card.number}</h1>
      <h3>CARD STATE: {card.state}</h3>
      <div
        onClick={() =>
          dispatch({ type: ActionTypes.DISCARD, payload: card.id })
        }
        className='absolute   bg-red top-1 right-1 cursor-pointer'
      >
        <svg className='w-[25px] h-[25px] border-2 border-black '>
          <line
            x1={'5'}
            y1='5'
            x2={'15'}
            y2={'15'}
            stroke='white'
            strokeWidth={'2px'}
          ></line>
          <line
            x1={'15'}
            y1='5'
            x2={'5'}
            y2={'15'}
            stroke='white'
            strokeWidth={'2px'}
          ></line>
        </svg>
      </div>
    </div>
  );
}

export default Card;

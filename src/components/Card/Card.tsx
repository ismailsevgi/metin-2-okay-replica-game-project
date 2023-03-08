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
      onClick={(e) => {
        e.stopPropagation();

        console.log('CARD CLICKED!');

        dispatch({
          type:
            card.state === CardStates.ON_TOP
              ? ActionTypes.TO_BOTTOM
              : ActionTypes.TO_TOP,
          payload: card.id,
        });
      }}
      className={`cardWrapper cursor-pointer relative BACKGROUND-${card.color} max-h-[200px] max-w-[125px] rounded-[3px]`}
    >
      <h1 className=' text-white text-9xl'>{card.number}</h1>

      <div
        onClick={(e) => {
          console.log('DISCARD CLICKED!');
          e.stopPropagation();
          dispatch({ type: ActionTypes.DISCARD, payload: card.id });
        }}
        className='absolute  bg-red-600 top-1 right-1 cursor-pointer'
      >
        <svg className='w-[30px] h-[30px]'>
          <line
            x1={'5'}
            y1='5'
            x2={'25'}
            y2={'25'}
            stroke='white'
            strokeWidth={'5px'}
          ></line>
          <line
            x1={'25'}
            y1='5'
            x2={'5'}
            y2={'25'}
            stroke='white'
            strokeWidth={'5px'}
          ></line>
        </svg>
      </div>
    </div>
  );
}

export default Card;

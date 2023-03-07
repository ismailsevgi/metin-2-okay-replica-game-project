import { useState } from 'react';

import './App.scss';
import Card from './components/Card/Card';
import TopSlot from './components/TopSlot/TopSlot';

import BottomSlot from './components/BottomSlot/BottomSlot';
import { useGlobalContext } from './features/GlobalContext';
import { ActionTypes } from './constants/constants';

//cardların farklı stateleri olmak zorunda
//card state ine göre yerleştirme yapılabilir
//in deck, on top, on bottom, used, discarded.

function App() {
  const { state, dispatch } = useGlobalContext();

  return (
    <div className='h-[100vh] bg-black w-100 border-2 '>
      <div
        id='wrapper'
        className='w-[1024px] h-[764px] mx-auto bg-[#343434] flex flex-col gap-4 justify-center'
      >
        <div className='w-[800px] h-[600px] mx-auto border'>
          <TopSlot />
          <div className='ml-[23px] w-[125px] h-[50px] border grid place-content-center'>
            <span className='text-white'>POINTS: {state.point}</span>
          </div>
          <BottomSlot />
          <button
            className='bg-red-500 w-[400px] h-[50px] mx-auto block text-white text-xl cursor-pointer hover:bg-red-400'
            onClick={() =>
              dispatch({ type: ActionTypes.NEW_GAME, payload: 'null' })
            }
          >
            NEW GAME
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;

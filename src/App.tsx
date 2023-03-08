import { useState } from 'react';

import './App.scss';
import Card from './components/Card/Card';
import TopSlot from './components/TopSlot/TopSlot';

import BottomSlot from './components/BottomSlot/BottomSlot';
import { useGlobalContext } from './features/GlobalContext';
import { ActionTypes } from './constants/constants';
import Navbar from './components/Navbar/Navbar';
import { ToastContainer } from 'react-toastify';

//cardların farklı stateleri olmak zorunda
//card state ine göre yerleştirme yapılabilir
//in deck, on top, on bottom, used, discarded.

function App() {
  const { state, dispatch } = useGlobalContext();

  return (
    <div className='h-[100vh] bg-slate-900 w-100 '>
      <Navbar />
      <div
        id='wrapper'
        className='max-w-[1024px] max-h-[764px] mx-auto  flex flex-col gap-4 justify-center '
      >
        <div className='max-w-[800px]  mx-auto rounded-lg bg-slate-900 border-2 border-orange-600 overflow-hidden'>
          <TopSlot />
          <div className='ml-[23px] w-max h-[50px] grid place-content-center text-2xl'>
            <span className='text-white'>POINTS: {state.point}</span>
          </div>
          <BottomSlot />
          <button
            className='bg-red-500 max-w-[400px] px-4 h-[50px] mx-auto block text-white text-xl cursor-pointer my-4 hover:bg-red-400'
            onClick={() =>
              dispatch({ type: ActionTypes.NEW_GAME, payload: 'null' })
            }
          >
            NEW GAME
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;

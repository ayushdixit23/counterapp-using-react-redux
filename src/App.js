import './App.css';
import Count from './Count';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'
import { useDispatch } from 'react-redux';
import { add, sub } from './redux/slice/counterSlice'

function App() {
  const dispatch = useDispatch();
  return (
    <>
      <div className='hello'>
        <div>
          <button onClick={() => dispatch(sub())}><AiOutlineMinus /></button>
          <Count />
          <button onClick={() => dispatch(add())}><AiOutlinePlus /></button>
        </div>
      </div>
    </>
  );
}

export default App;

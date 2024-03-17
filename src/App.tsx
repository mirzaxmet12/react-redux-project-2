import './App.css'
import { changeText } from './store/project2'
import { useSelector, useDispatch } from 'react-redux'

function App() {
  const dispatch = useDispatch()
  const text = useSelector((state: any) => state.text.text)

  return (
    <>
      <div className="box">
        <h1>Change state</h1>
        <div className="block">
          <button onClick={() => dispatch(changeText({ text: 'Watery' }))}>Liquid</button>
          <button onClick={() => dispatch(changeText({ text: 'Like Vapor' }))}>Gas</button>
          <button onClick={() => dispatch(changeText({ text: 'Ice Ice' }))}>Solid</button>
        </div>
        <h1>H20 is feeling:</h1>
        <h2>{text}</h2>
      </div>
    </>
  )
}

export default App

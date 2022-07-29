import { useState } from 'react';
import './App.css';
import NotesList from './components/NotesList';
import { useDispatch, useSelector } from 'react-redux';
import { addNoteAC } from './Redux/reducer';

function App() {

  const [value, setValue] = useState('')
  const notes = useSelector(state => state.notesReducer.notes)
  const dispatch = useDispatch()

  // const [notes, setNotes] = useState([{
  //   id: Date.now(),
  //   text: value,
  //   // date: 
  // }])

  const addText = () => {
    dispatch(addNoteAC(value))
    setValue('')
  }
  return (
    <div className="container">
      <div className='add-text'>
        <input value={value} className='input-btn'
          onChange={(e) => setValue(e.target.value)}
          placeholder='New Note' />


        <button className='add-btn' onClick={addText}>Add the text</button>
        <NotesList notes={notes} />
      </div>
    </div>
  );
}

export default App;

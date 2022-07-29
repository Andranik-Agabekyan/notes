import React from 'react'
import { MdDeleteForever } from 'react-icons/md'
import { deleteTextAC } from '../Redux/reducer'
import { useDispatch } from 'react-redux/es/exports'

const Note = ({note}) => {
    const dispatch = useDispatch()

    const deleteText = (id) => {
        dispatch(deleteTextAC(id))
    }

    return (
        <div className='note'>
            <div className='note-text'>{note.text}</div>
            <div className='note-footer'>
                <small>{note.date}</small>
                <MdDeleteForever className='delete-icon' size='1.3em' 
                onClick={() => deleteText(note.id)}/>
            </div>
        </div>
    )
}

export default Note
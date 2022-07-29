const ADD_NOTE = 'ADD_NOTE'
const DELETE_TEXT = 'DELETE_TEXT'

const initialState = {
    notes: []
}

const notesReducer =  (state = initialState, action) => {
    switch (action.type) {
        case ADD_NOTE: {
            return {
                ...state, 
                notes: [...state.notes, {
                    id: Date.now(),
                    text: action.text,
                    date: new Date().getFullYear() + '-' +(new Date().getMonth() +1) + '-' + new Date().getDate()
                }]
            }
        }
        case DELETE_TEXT: {
            return {
                ...state,
                notes: state.notes.filter(item => item.id !== action.id)
            }
        }
            
        default:
            return state
    }
}
export default notesReducer

export const addNoteAC = (text) => ({type: ADD_NOTE, text})
export const deleteTextAC = (id) => ({type: DELETE_TEXT, id})
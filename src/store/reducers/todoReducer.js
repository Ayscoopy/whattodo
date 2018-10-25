import uuid from "uuid";
import { ADD_ITEM, ADD_ITEM_ERROR} from '../actions/types'

const initialState = {
    todoItems: [
        { id: uuid(), item:'I will sleep well tonight', date: Date() },
        { id: uuid(), item:'I am the god of war!!!', date: Date() },
        { id: uuid(), item:'None shall define me ', date: Date() },
        { id: uuid(), item:'I will sleep well tonight', date: Date() },
        { id: uuid(), item:'I am the god of war!!!', date: Date() },
        { id: uuid(), item:'I will sleep well tonight', date: Date() },
        { id: uuid(), item:'I am the god of war!!!', date: Date() }
    ]
}

const todoReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_ITEM:
            return state
        case ADD_ITEM_ERROR:
            console.log('Item Added Error', action.err)
            break;
        case "DELETE_ITEM":
           return state
            
        default:
            return state;
        }
          
}

export default todoReducer;
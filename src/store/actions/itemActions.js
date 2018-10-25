import { ADD_ITEM, ADD_ITEM_ERROR } from './types';

export const deleteItem = (id) => {
    return( dispatch, getState, { getFirebase, getFirestore }) => {
        //console.log('from action: '+id)
        const firestore = getFirestore();
        
        firestore.collection('todoItem').doc(id).delete()
        .then(() => {
            dispatch({
                type: 'DELETE_ITEM'
            })
        })
        
    }
}

export const editItem = (id, newItem) => {
    return( dispatch, getState, { getFirebase, getFirestore }) => {
       const firestore = getFirestore();
     
       firestore.collection('todoItem').doc(id).update({
           "item": newItem.newItem,
       })
    }
}

export const addItem = (todoItem) => {
    return (dispatch, getState, { getFirestore, getFirebase }) => {
        // make a async call to database
        const firestore = getFirestore();
        const ref = firestore.collection('todoItem').doc();
        
        ref.set({
            uid: ref.id,
            item: todoItem.item,
            mainId: todoItem.mainId,
            date: todoItem.date, 
        })
        .then(() => {
            dispatch({ 
                type: ADD_ITEM,
                todoItem: todoItem
            })
        }).catch((err) => {
            dispatch({ 
                type: ADD_ITEM_ERROR,
                err
            })
        })
        
    }
}

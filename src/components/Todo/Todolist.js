import React from 'react';
import Todoitem from './Todoitem';
import { connect } from 'react-redux';

const Todolist = ({ todoItems }) => {
    //const { auth } = props
    return(
        <div>
            { 
                todoItems && todoItems.map(item => {
                    return (
                        <Todoitem item={item} key={item.uid}/>
                    )
                })
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    //console.log(state)
    return{
        auth: state.firebase.auth,
        todoItems: state.firestore.ordered.todoItem
    }
}

export default connect(mapStateToProps)(Todolist)
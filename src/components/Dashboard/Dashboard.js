import React, { Component } from 'react';
import Todolist from '../Todo/Todolist';
import Additem from '../Todo/Additem';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';



class Dashboard extends Component {
    
    render(){
        const { todoItems, auth } = this.props
        if (!auth.uid) return <Redirect to="/signin" />
        return(
            <div className="bg_gradient" style={{ height:"100vh" }}>
                <Additem auth={auth} />
                <Todolist todoItems={todoItems} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    
    return{
        todoItems: state.firestore.data.users,
        auth: state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'todoItem' }
    ])
)(Dashboard);